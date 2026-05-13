"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ProjectsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      // Folder body lifts slightly
      animate(".folder-body", { y: [0, -1.5, 0] }, { duration: 0.35, ease: "easeOut" });
      // Lines draw in from left
      animate(".line-1", { pathLength: [0, 1] }, { duration: 0.3, ease: "easeOut", delay: 0.15 });
      animate(".line-2", { pathLength: [0, 1] }, { duration: 0.25, ease: "easeOut", delay: 0.3 });
    };

    const stop = () => {
      animate(".line-1", { pathLength: 1 }, { duration: 0.1 });
      animate(".line-2", { pathLength: 1 }, { duration: 0.1 });
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
      >
        {/* Folder tab */}
        <motion.path
          className="folder-body"
          d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
        />
        {/* Document lines */}
        <motion.path className="line-1" d="M6 14h12" initial={{ pathLength: 1 }} />
        <motion.path className="line-2" d="M6 17h8" initial={{ pathLength: 1 }} />
      </motion.svg>
    );
  }
);

ProjectsIcon.displayName = "ProjectsIcon";
export default ProjectsIcon;
