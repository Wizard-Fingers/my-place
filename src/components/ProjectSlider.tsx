"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface ProjectProps {
  image: StaticImageData;
  technologies: string[];
  collaboration: boolean;
}

interface ProjectSliderProps {
  projects: ProjectProps[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-900 text-gray-200 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400">Projects</h2>
        <div className="relative">
          <motion.div
            className="flex overflow-hidden"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
              >
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Image
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2 text-yellow-400">
                    Project {index + 1}
                  </h3>
                  <p className="mb-2">
                    Technologies used: {project.technologies.join(", ")}
                  </p>
                  <p className="mb-2">
                    {project.collaboration
                      ? "Collaborative project"
                      : "Solo project"}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-gray-900 py-2 px-4 rounded-l-lg hover:bg-yellow-500 transition-colors duration-300"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-gray-900 py-2 px-4 rounded-r-lg hover:bg-yellow-500 transition-colors duration-300"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
