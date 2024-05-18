"use client";
"use client";
import { motion } from "framer-motion";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-gray-900 text-gray-200 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-yellow-400 text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              Who am I?
            </h3>
            <p className="leading-relaxed">
              I'm a quirky and creative developer with a passion for building
              amazing digital experiences. With a background in various fields,
              I bring a unique perspective to my work, blending technical
              expertise with artistic flair.
            </p>
            <p className="leading-relaxed mt-4">
              I've been happily married for 13 years and have two wonderful
              kids. My family is my constant source of inspiration and joy.
            </p>
          </div>

          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Skills</h3>
            <ul className="list-disc list-inside">
              <li>Proficient in React, Next.js, and Tailwind CSS</li>
              <li>Experienced with Python, Django, and Flask</li>
              <li>Skilled in UI/UX design and animations</li>
              <li>
                Passionate about creating accessible and inclusive designs
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={itemVariants}
        >
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Hobbies</h3>
            <ul className="list-disc list-inside">
              <li>Photography</li>
              <li>Hiking and exploring nature</li>
              <li>Playing guitar and listening to music</li>
              <li>Reading science fiction novels</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              Let's Talk!
            </h3>
            <p className="leading-relaxed">
              I'm always eager to take on new challenges and collaborate with
              like-minded individuals. Feel free to reach out, and let's create
              something extraordinary together!
            </p>
            <button className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg mt-4 hover:bg-yellow-500 transition-colors duration-300">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
