"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaGithubAlt } from "react-icons/fa6";

const Socials = () => {
  const iconVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        yoyo: Infinity, // Repeat the animation infinitely
      },
    },
  };

  return (
    <div className="flex ">
      <motion.div
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="hover"
      >
        <FaFacebookF className="text-3xl text-brandCol3 hover:text-brandCol1 cursor-pointer transition-colors duration-300 ease-in-out ml-4 mr-4" />
      </motion.div>
      <motion.div
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="hover"
      >
        <FaLinkedinIn className="text-3xl text-brandCol3 hover:text-brandCol1 cursor-pointer transition-colors duration-300 ease-in-out ml-4 mr-4" />
      </motion.div>
      <motion.div
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="hover"
      >
        <FaGithubAlt className="text-3xl text-brandCol3 hover:text-brandCol1 cursor-pointer transition-colors duration-300 ease-in-out ml-4 mr-4" />
      </motion.div>
    </div>
  );
};

export default Socials;
