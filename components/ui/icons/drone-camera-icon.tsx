"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DroneCameraIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
    (
        { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
        ref,
    ) => {
        const [scope, animate] = useAnimate();

        const start = async () => {
            // Radar Sweep
            animate(
                ".radar-arc",
                { pathLength: [0, 1], opacity: [0, 1, 0] },
                { duration: 1.5, ease: "easeInOut" }
            );

            // Lens Pulse
            await animate(
                ".lens-center",
                { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] },
                { duration: 0.6, ease: "easeInOut", delay: 0.2 }
            );
        };

        const stop = () => {
            animate(".radar-arc", { opacity: 0 }, { duration: 0.2 });
        };

        useImperativeHandle(ref, () => ({
            startAnimation: start,
            stopAnimation: stop,
        }));

        const handleHoverStart = () => {
            start();
        };

        const handleHoverEnd = () => {
            stop();
        };

        return (
            <motion.svg
                ref={scope}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
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
                {/* Camera Body */}
                <rect x="4" y="8" width="16" height="12" rx="2" />
                <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />

                {/* Lens */}
                <circle cx="12" cy="14" r="3" />
                <motion.circle
                    className="lens-center"
                    cx="12"
                    cy="14"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                />

                {/* Radar Arc - Invisible initially */}
                <motion.path
                    className="radar-arc"
                    d="M5 5 C 9 1, 15 1, 19 5"
                    initial={{ opacity: 0, pathLength: 0 }}
                />
            </motion.svg>
        );
    },
);

DroneCameraIcon.displayName = "DroneCameraIcon";
export default DroneCameraIcon;
