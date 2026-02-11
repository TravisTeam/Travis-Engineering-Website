"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const RoofMagnifierIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
    (
        { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
        ref,
    ) => {
        const [scope, animate] = useAnimate();

        const start = async () => {
            // Reset
            await animate(".magnifier", { x: 0, y: 0, opacity: 1 }, { duration: 0 });
            await animate(".highlight", { opacity: 0, scale: 0 }, { duration: 0 });

            // Slide Magnifier along roof edge (approximate diagonal movement)
            // Moving up and left to follow the right roof slope
            animate(
                ".magnifier",
                {
                    x: [-2, -6],
                    y: [-2, -6],
                },
                { duration: 0.8, ease: "easeInOut" },
            );

            // Reveal highlight
            await animate(
                ".highlight",
                { opacity: [0, 1, 0], scale: [0.5, 1.2, 1] },
                { duration: 0.8, delay: 0.1 }
            );

            // Return to start
            animate(".magnifier", { x: 0, y: 0 }, { duration: 0.5, ease: "easeInOut" });
        };

        const stop = () => {
            // Optional: Reset if needed, but the animation above is self-contained or ends at start
            // animate(".magnifier", { x: 0, y: 0 }, { duration: 0.3 });
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
                style={{ overflow: "visible" }}
            >
                {/* Roof Geometry */}
                <path d="M3 13L12 5l9 8" />
                <path d="M9 21V11" strokeOpacity="0.3" /> {/* Subtle wall hint */}
                <path d="M15 21V13" strokeOpacity="0.3" />

                {/* Magnifier Group */}
                <motion.g className="magnifier" style={{ originX: "50%", originY: "50%" }}>
                    {/* Glass */}
                    <circle cx="16" cy="11" r="3" />
                    {/* Handle */}
                    <path d="M18.5 13.5L21 16" />
                </motion.g>

                {/* Highlight Effect */}
                <motion.circle
                    className="highlight"
                    cx="16"
                    cy="11"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                    initial={{ opacity: 0 }}
                />
            </motion.svg>
        );
    },
);

RoofMagnifierIcon.displayName = "RoofMagnifierIcon";
export default RoofMagnifierIcon;
