'use client'

import { useEffect, useRef } from 'react'

interface Dot {
  homeX: number
  homeY: number
  x: number
  y: number
  vx: number
  vy: number
}

const SPACING = 38       // grid spacing in px
const RADIUS = 1.8       // dot size
const REPEL_RADIUS = 90  // mouse influence radius
const REPEL_STRENGTH = 6
const SPRING = 0.06      // how fast dots return home
const DAMPING = 0.78     // velocity decay

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const parent = canvas.parentElement!

    const buildGrid = (w: number, h: number): Dot[] => {
      const dots: Dot[] = []
      const cols = Math.floor(w / SPACING)
      const rows = Math.floor(h / SPACING)
      const offsetX = (w - (cols - 1) * SPACING) / 2
      const offsetY = SPACING
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const hx = offsetX + c * SPACING
          const hy = offsetY + r * SPACING
          dots.push({ homeX: hx, homeY: hy, x: hx, y: hy, vx: 0, vy: 0 })
        }
      }
      return dots
    }

    const resizeCanvas = () => {
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
      dotsRef.current = buildGrid(canvas.width, canvas.height)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      ctx.fillStyle = 'rgba(15, 23, 42, 0.22)'

      dotsRef.current.forEach((d) => {
        // Spring back to home
        d.vx += (d.homeX - d.x) * SPRING
        d.vy += (d.homeY - d.y) * SPRING
        d.vx *= DAMPING
        d.vy *= DAMPING

        // Mouse repel
        const dx = d.x - mx
        const dy = d.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH
          d.vx += (dx / dist) * force
          d.vy += (dy / dist) * force
        }

        d.x += d.vx
        d.y += d.vy

        ctx.beginPath()
        ctx.arc(d.x, d.y, RADIUS, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationRef.current)
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
