"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
  isCollaborative: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  image,
  isCollaborative,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-center mb-4">{description}</p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      {isCollaborative && (
        <p className="text-green-600 font-bold">Collaborative Project</p>
      )}
    </motion.div>
  );
};

interface ProjectsProps {
  projects: ProjectProps[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-brandCol2">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
