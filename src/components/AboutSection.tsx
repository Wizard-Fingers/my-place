"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
      className="bg-black text-gray-200 rounded-sm py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-brandCol4 text-center font-blanka tracking-widest bg-opacity-50"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={itemVariants}
        >
          <div className="bg-brandCol2 p-6 rounded-sm shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-brandCol4 font-open-dyslexic-alta-bold">
              The Creative Code Craftsman
            </h3>
            <p className="leading-relaxed font-open-dyslexic-alta text-lg">
              Allow me to introduce myself—I&apos;m a dedicated, creative, and
              skilled web developer with a unique background that spans various
              fields. I bring a blend of technical expertise, artistic flair,
              and a human-centered approach to my work, crafting digital
              experiences that are both engaging and purposeful. Behind the
              code, there&apos;s a story of love and family. I&apos;m happily
              married for 13 years and blessed with two wonderful children who
              inspire me every day and keep me grounded in what truly matters.
            </p>
          </div>

          <motion.div
            className="bg-brandCol2 p-6 rounded-sm shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4 text-brandCol4 font-open-dyslexic-alta-bold">
              A Diverse Skill Set
            </h3>
            <ul className="list-disc list-inside font-open-dyslexic-alta text-lg space-y-2">
              <li>Proficient in JavaScript, React, Next.js, and CSS.</li>
              <li>Experienced in Python programming.</li>
              <li>Skilled in logo design and digital asset creation.</li>
              <li>
                Adept at crafting intuitive UI/UX designs and engaging
                animations.
              </li>
              <li>Committed to creating accessible websites.</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          <div className="bg-brandCol2 p-6 rounded-sm shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-brandCol4 font-open-dyslexic-alta-bold">
              Passions Beyond the Pixels
            </h3>
            <p className="font-open-dyslexic-alta text-lg mb-4">
              When I&apos;m not immersed in the world of web development, you
              can find me:
            </p>
            <ul className="list-disc list-inside font-open-dyslexic-alta text-lg space-y-2">
              <li>
                Exploring the great outdoors through hiking and nature walks.
              </li>
              <li>Expressing my creativity through writing.</li>
              <li>
                Expanding my imagination through science fiction literature.
              </li>
              <li>
                Bonding with my children over video games and interactive
                experiences.
              </li>
              <li>
                Building video games with my children and exploring new
                technology.
              </li>
              <li>Painting animals and landscapes while on holiday.</li>
              <li>
                Building a Blogging site and developing my presence on social
                media.
              </li>
            </ul>
          </div>

          <div className="bg-brandCol2 p-6 rounded-sm shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-brandCol4 font-open-dyslexic-alta-bold">
              Let&rsquo;s Collaborate and Create!
            </h3>
            <p className="leading-relaxed font-open-dyslexic-alta text-lg mb-6">
              I&apos;m always thrilled to take on new challenges and collaborate
              with like-minded professionals. Whether you have a project in
              mind, an opportunity to discuss, or simply want to connect,
              I&apos;m eager to hear from you. If you&apos;re looking for a
              dedicated and skilled web developer to join your team or
              contribute to your project, I&apos;d love to explore how I can
              help bring your vision to life. With my diverse skill set and
              passion for creating exceptional digital experiences, I&apos;m
              confident that together, we can achieve remarkable results. Feel
              free to reach out to me. I&apos;m excited about the possibility of
              working with you and making a meaningful impact through our
              collaboration. Let&rsquo;s create something amazing together!
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 leading-relaxed font-open-dyslexic-alta text-lg">
              <button
                className="bg-brandCol6 text-brandCol1 py-2 px-4 rounded-lg hover:bg-brandCol3 transition-colors duration-300"
                onClick={() =>
                  (window.location.href = "mailto:art.b.beckett@gmail.com")
                }
              >
                Let&rsquo;s bring your vision to life.
              </button>
              <a
                href="/CV.pdf"
                download
                className="bg-brandCol6 text-white py-2 px-4 rounded-lg hover:bg-brandCol3 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
