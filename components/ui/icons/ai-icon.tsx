"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      // Chip body pulses
      animate(".chip-body", { scale: [1, 1.08, 1] }, { duration: 0.35, ease: "easeOut" });
      // Center dot transmits outward — first pulse
      animate(
        ".pulse-1",
        { scale: [0, 2.5], opacity: [1, 0] },
        { duration: 0.5, ease: "easeOut", delay: 0.1 }
      );
      // Second trailing pulse
      animate(
        ".pulse-2",
        { scale: [0, 2.5], opacity: [0.6, 0] },
        { duration: 0.5, ease: "easeOut", delay: 0.3 }
      );
    };

    const stop = () => {
      animate(".pulse-1", { scale: 0, opacity: 0 }, { duration: 0.15 });
      animate(".pulse-2", { scale: 0, opacity: 0 }, { duration: 0.15 });
    };

    useImperativeHandle(ref, () => ({ startAnimation: start, stopAnimation: stop }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={start}
        onHoverEnd={stop}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
        style={{ overflow: "visible" }}
      >
        {/* Chip body */}
        <motion.rect className="chip-body" x="7" y="7" width="10" height="10" rx="1.5" style={{ transformOrigin: "12px 12px" }} />

        {/* Left pins */}
        <line x1="3" y1="9.5" x2="7" y2="9.5" />
        <line x1="3" y1="14.5" x2="7" y2="14.5" />

        {/* Right pins */}
        <line x1="17" y1="9.5" x2="21" y2="9.5" />
        <line x1="17" y1="14.5" x2="21" y2="14.5" />

        {/* Top pins */}
        <line x1="10" y1="3" x2="10" y2="7" />
        <line x1="14" y1="3" x2="14" y2="7" />

        {/* Bottom pins */}
        <line x1="10" y1="17" x2="10" y2="21" />
        <line x1="14" y1="17" x2="14" y2="21" />

        {/* Transmission pulses — centered on chip */}
        <motion.circle
          className="pulse-1"
          cx="12" cy="12" r="2"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          style={{ transformOrigin: "12px 12px" }}
        />
        <motion.circle
          className="pulse-2"
          cx="12" cy="12" r="2"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          style={{ transformOrigin: "12px 12px" }}
        />

        {/* Static center dot */}
        <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      </motion.svg>
    );
  }
);

AiIcon.displayName = "AiIcon";
export default AiIcon;
