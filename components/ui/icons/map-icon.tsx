"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const MapIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      // Pin drops in from above
      await animate(
        ".map-pin",
        { y: [-5, 0], opacity: [0, 1] },
        { duration: 0.3, ease: "easeOut" }
      );
      // Sonar ring expands and fades
      animate(
        ".sonar-ring",
        { scale: [0.5, 2], opacity: [0.8, 0] },
        { duration: 0.6, ease: "easeOut" }
      );
    };

    const stop = () => {
      animate(".map-pin", { y: 0, opacity: 1 }, { duration: 0.2 });
      animate(".sonar-ring", { scale: 0.5, opacity: 0 }, { duration: 0.15 });
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
        {/* Folded map body */}
        <path d="M9 3L3 6v15l6-3 6 3 6-3V3l-6 3z" />
        {/* Fold lines */}
        <path d="M9 3v15" />
        <path d="M15 6v15" />

        {/* Location pin group */}
        <motion.g className="map-pin" style={{ transformOrigin: "12px 11px" }}>
          {/* Pin head */}
          <circle cx="12" cy="9" r="2" />
          {/* Pin tail */}
          <path d="M12 11v2" />
        </motion.g>

        {/* Sonar ring — centered on pin */}
        <motion.circle
          className="sonar-ring"
          cx="12"
          cy="9"
          r="2"
          fill="none"
          initial={{ scale: 0.5, opacity: 0 }}
          style={{ transformOrigin: "12px 9px" }}
        />
      </motion.svg>
    );
  }
);

MapIcon.displayName = "MapIcon";
export default MapIcon;
