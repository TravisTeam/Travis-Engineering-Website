"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AcademyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      // Cap bounces up
      animate(
        ".cap",
        { y: [0, -3, 0] },
        { duration: 0.4, ease: "easeOut" }
      );
      // Tassel swings left then right then settles
      animate(
        ".tassel",
        { rotate: [0, -20, 15, -8, 0] },
        { duration: 0.7, ease: "easeInOut", delay: 0.1 }
      );
    };

    const stop = () => {
      animate(".tassel", { rotate: 0 }, { duration: 0.2 });
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
        {/* Graduation cap board + hood */}
        <motion.g className="cap">
          {/* Cap diamond */}
          <path d="M12 3L2 8l10 5 10-5z" />
          {/* Hood sides */}
          <path d="M6 10.5v4a6 6 0 0012 0v-4" />
        </motion.g>

        {/* Tassel — pivots from right corner of cap */}
        <motion.g
          className="tassel"
          style={{ transformOrigin: "22px 8px" }}
        >
          {/* Cord */}
          <line x1="22" y1="8" x2="22" y2="14" />
          {/* Tassel end ball */}
          <circle cx="22" cy="15" r="1" fill="currentColor" stroke="none" />
        </motion.g>
      </motion.svg>
    );
  }
);

AcademyIcon.displayName = "AcademyIcon";
export default AcademyIcon;
