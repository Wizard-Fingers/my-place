"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

interface SquigglyLineProps {
  color: string;
}

const SquigglyLine: React.FC<SquigglyLineProps> = ({ color }) => {
  const controls = useAnimation();

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
    wiggle: {
      d: [
        "M 0,5 Q 5,2 10,5 Q 15,8 20,5 Q 25,2 30,5 Q 35,8 40,5 Q 45,2 50,5 Q 55,8 60,5 Q 65,2 70,5 Q 75,8 80,5 Q 85,2 90,5 Q 95,8 100,5",
        "M 0,5 Q 5,8 10,5 Q 15,2 20,5 Q 25,8 30,5 Q 35,2 40,5 Q 45,8 50,5 Q 55,2 60,5 Q 65,8 70,5 Q 75,2 80,5 Q 85,8 90,5 Q 95,2 100,5",
        "M 0,5 Q 5,2 10,5 Q 15,8 20,5 Q 25,2 30,5 Q 35,8 40,5 Q 45,2 50,5 Q 55,8 60,5 Q 65,2 70,5 Q 75,8 80,5 Q 85,2 90,5 Q 95,8 100,5",
      ],
      transition: {
        duration: 3.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  useEffect(() => {
    controls.start("visible");
    controls.start("wiggle");
  }, [controls]); // Include 'controls' in the dependency array

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M 0,5 Q 5,2 10,5 Q 15,8 20,5 Q 25,2 30,5 Q 35,8 40,5 Q 45,2 50,5 Q 55,8 60,5 Q 65,2 70,5 Q 75,8 80,5 Q 85,2 90,5 Q 95,8 100,5"
        fill="none"
        stroke={color}
        strokeWidth="0.5"
        initial="hidden"
        animate={controls}
        variants={pathVariants as Variants}
      />
    </svg>
  );
};

export default SquigglyLine;
