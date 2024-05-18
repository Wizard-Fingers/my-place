"use client";
import TimelinePicture from "../../public/timeline-pic.png";
import TimelineBall from "../../public/timeline-ball.png";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const TimelinePic = () => {
  const ballControls = useAnimation();

  useEffect(() => {
    ballControls.start({
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    });
  }, [ballControls]);

  return (
    <div className="flex justify-center w-full">
      <div>
        <Image src={TimelinePicture} alt="timeline-pic" className="" />
      </div>
      <motion.div animate={ballControls} className="">
        <Image
          src={TimelineBall}
          width={150}
          height={150}
          alt="timeline-ball"
          className="-translate-x-[5rem] translate-y-[6rem] md:-translate-x-[7rem] md:translate-y-[10rem]"
        />
      </motion.div>
    </div>
  );
};

export default TimelinePic;
