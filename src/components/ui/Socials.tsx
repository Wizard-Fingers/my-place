"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaGithubAlt } from "react-icons/fa6";
import Link from "next/link";

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
    <div className="flex">
      <motion.div
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="hover"
      >
        <Link
          href="https://www.facebook.com/arthur.b.beckett/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-3xl text-brandCol4 hover:text-brandCol1 cursor-pointer transition-colors duration-300 ease-in-out ml-4 mr-4" />
        </Link>
      </motion.div>
      <motion.div
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="hover"
      >
        <Link
          href="https://www.linkedin.com/in/art-beckett-3b19b7209/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="text-3xl text-brandCol4 hover:text-brandCol1 cursor-pointer transition-colors duration-300 ease-in-out ml-4 mr-4" />
        </Link>
      </motion.div>
      <motion.div
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="hover"
      >
        <Link
          href="https://github.com/Wizard-Fingers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubAlt className="text-3xl text-brandCol4 hover:text-brandCol1 cursor-pointer transition-colors duration-300 ease-in-out ml-4 mr-4" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Socials;
