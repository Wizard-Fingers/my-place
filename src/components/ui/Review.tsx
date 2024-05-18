// Review.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";

interface ReviewProps {
  name: string;
  title: string;
  picture: StaticImageData;
  content: string;
  linkedinUrl: string;
}

const Review: React.FC<ReviewProps> = ({
  name,
  title,
  picture,
  content,
  linkedinUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const toggleReview = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      reviewRef.current &&
      !reviewRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="bg-brandCol3 text-white text-xl px-8 py-4 rounded-sm font-open-dyslexic-bold"
        onClick={toggleReview}
      >
        A Review
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleReview}
            />
            <motion.div
              ref={reviewRef}
              className="fixed top-0 left-0 right-0 bottom-0 m-auto bg-brandCol1 p-4 sm:p-8 max-w-[90%] sm:max-w-[600px] z-50 rounded-lg shadow-lg"
              style={{ width: "fit-content", height: "fit-content" }}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row items-center mb-4">
                <motion.div
                  className="w-24 h-24 overflow-hidden mr-0 sm:mr-4 mb-4 sm:mb-0 bg-brandCol3 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={picture}
                    alt={name}
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </motion.div>
                <motion.div
                  className="text-center sm:text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold mb-1 text-brandCol2 font-open-dyslexic-alta-bold">
                    {name}
                  </h3>
                  <p className="text-brandCol2 font-semibold font-open-dyslexic-alta-bold">
                    {title}
                  </p>
                  <Link
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-brandCol3 hover:text-blue-700 transition-colors duration-300 font-open-dyslexic-alta-bold">
                      LinkedIn Profile
                    </p>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                className="text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p className="text-brandCol2 font-open-dyslexic mt-4 opacity-80">
                  {content}
                </p>
              </motion.div>
              <button
                className="absolute top-2 right-2 text-brandCol2 hover:text-brandCol3 transition-colors duration-300"
                onClick={toggleReview}
                title="Toggle Review"
              >
                <FaWindowClose className="text-2xl" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Review;
