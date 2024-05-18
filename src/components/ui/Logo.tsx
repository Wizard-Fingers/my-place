"use client";
import { motion, useAnimation } from "framer-motion";
const Logo = () => {
  const letterControls = useAnimation();

  const desktopVariants = {
    initial: { opacity: 1 },
    hover: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const letterVariants = {
    initial: { y: 0 },
    hover: {
      y: [0, -20, 20, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.div
        // make a nice transition in tailwind
        className="font-blanka text-brandCol1 hover:text-brandCol3 cursor-pointer transition-colors duration-300 ease-in-out"
        variants={desktopVariants}
        initial="initial"
        animate={letterControls}
        onMouseEnter={() => letterControls.start("hover")}
        onMouseLeave={() => letterControls.start("initial")}
      >
        <div className="flex w-[4rem] h-[4rem] ml-2 lg:ml-0 m-1 mb-2 -mt-2 items-center z-10">
          <motion.p className="  text-[2.5rem]" variants={letterVariants}>
            A
          </motion.p>
          <motion.p className="  text-[2.5rem]" variants={letterVariants}>
            B
          </motion.p>
          <motion.p className="ml-2  text-[2.5rem]" variants={letterVariants}>
            .
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default Logo;
