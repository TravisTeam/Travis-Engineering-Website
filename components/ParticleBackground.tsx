'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const parent = canvas.parentElement!

    const resizeCanvas = () => {
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
      // Reinitialise so particles fill the new size
      particlesRef.current = makeParticles(canvas.width, canvas.height)
    }

    const makeParticles = (w: number, h: number): Particle[] => {
      const count = window.innerWidth < 768 ? 40 : 80
      return Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.8,
      }))
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const REPEL_RADIUS = 110
    const CONNECTION_DIST = 130

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      particlesRef.current.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS
          p.x -= (dx / dist) * force * 2.5
          p.y -= (dy / dist) * force * 2.5
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(15, 23, 42, 0.18)'
        ctx.fill()
      })

      // Draw connections in a separate pass to avoid mid-loop state issues
      for (let i = 0; i < particlesRef.current.length; i++) {
        const a = particlesRef.current[i]
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const b = particlesRef.current[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECTION_DIST) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(15, 23, 42, ${0.07 * (1 - d / CONNECTION_DIST)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10,
      }}
    />
  )
}
