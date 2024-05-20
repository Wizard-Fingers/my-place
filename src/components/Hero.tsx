"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Me from "../../public/me.png";
import Name from "../../public/name.png";

const Hero = () => {
  const hoverVariants = {
    initial: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const spinVariants = {
    initial: {
      rotate: 0,
    },
    hover: {
      rotate: 360,
      transition: {
        duration: 6,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center mt-[5rem]">
      {/* profile pic */}
      <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
        <div className="max-w-[80%] mx-auto lg:max-w-[60%] p-2 lg:p-4 lg:cursor-pointer bg-brandCol1">
          <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={Me} alt="me" className="rounded-sm shadow-xl" />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
            initial="initial"
            whileHover="hover"
          >
            <div className="hidden lg:flex justify-center items-center w-full h-full">
              <motion.div
                className="absolute"
                variants={hoverVariants}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <motion.div variants={spinVariants}>
                  <Image
                    src={Name}
                    alt="name"
                    className="w-[25rem] drop-shadow-sm"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Hero Text */}
      <div className="w-full lg:w-1/2 p-4 ">
        <h1 className="font-blanka text-4xl lg:text-7xl mb-4 text-brandCol4 lg:mb-[2rem] tracking-wider">
          Hello There!
        </h1>
        <p className="font-open-dyslexic text-lg lg:text-xl mb-4 leading-relaxed">
          I&apos;m Art Beckett, a passionate Web Developer with over 3 years of
          experience, including 18 months of commercial work and 8 months of
          running my own studio in Swindon, UK. I&apos;m a bit of a geek, and I
          love crafting awesome digital experiences.
        </p>
        <p className="font-open-dyslexic-mono text-lg lg:text-xl text-brandCol5 mb-2 leading-relaxed">
          Recently, I embarked on a thrilling quest...
        </p>
        <p className="font-open-dyslexic text-lg lg:text-xl leading-relaxed">
          {" "}
          I enrolled in two boot camps to level up my skills in software
          development and fullstack Web Development. I&apos;ve already conquered
          one, and I&apos;m on the verge of completing the other, with a
          triumphant finish expected in July this year. It&apos;s been an epic
          journey of learning and growth!
        </p>
      </div>
    </section>
  );
};

export default Hero;
