"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
  isCollaborative: boolean;
  url: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  image,
  isCollaborative,
  url,
}) => {
  return (
    <div className=" bg-brandCol1 p-6 flex flex-col items-center border-2 border-brandCol2 m-6 rounded-sm">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="mb-4 overflow-hidden rounded-md"
      >
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="rounded-sm object-cover"
          />
        </Link>
      </motion.div>
      <h3 className="text-xl text-brandCol2 font-open-dyslexic-alta-bold mb-2">
        {title}
      </h3>
      <p className="text-brandCol2 text-center font-open-dyslexic mb-4">
        {description}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-brandCol2 text-brandCol1 rounded-sm px-3 py-1 font-open-dyslexic-mono"
          >
            {tech}
          </span>
        ))}
      </div>
      {isCollaborative && (
        <p className="text-brandCol5 font-open-dyslexic-alta-bold">
          Collaborative Project
        </p>
      )}
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <button className="bg-brandCol5 text-brandCol1 px-4 py-2 rounded-md mt-4 font-open-dyslexic">
          Visit Site
        </button>
      </Link>
    </div>
  );
};

interface ProjectsProps {
  projects: ProjectProps[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="py-16 text-brandCol1">
      <div className="container mx-auto">
        <h2 className="font-blanka text-5xl text-brandCol2 mb-[4rem] tracking-widest text-center rounded-sm">
          Exciting <span className="text-brandCol5">Projects</span> on the
          Horizon!
        </h2>
        <section className=" p-4 rounded-sm">
          <div className="bg-gray-800 rounded-sm mb-[4rem] p-4 border-2 border-brandCol1 font-open-dyslexic text-lg lg:text-xl leading-relaxed ">
            <p className="text-gray-300 text-center font-open-dyslexic px-6 lg:text-xl">
              Hey there, fellow coding enthusiasts! I&apos;m stoked to share
              some of the awesome projects I&apos;ve been working on. Now, this
              isn&apos;t an exhaustive list – these are just a few that my
              clients have given me the green light to showcase, plus a personal
              collab I&apos;m really pumped about.
            </p>
            <br />
            <p className="text-brandCol1 text-center font-open-dyslexic pb-6 px-6 lg:text-xl">
              And get this – I&apos;ve got some rad personal projects brewing
              that I can&apos;t wait to unveil soon! Trust me, you&apos;re going
              to want to keep an eye out for those. But for now, let me give you
              a sneak peek at the awesome stuff I&apos;ve been up to...
            </p>
          </div>
          <div className=" justify-center py-[4rem] hidden lg:flex">
            <div className=" w-[80%] h-[5px] bg-brandCol2 rounded-sm" />
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
