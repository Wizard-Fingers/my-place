"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineEvent {
  title: string;
  description: string;
  date: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-[4rem] px-4">
      <h2 className="text-6xl font-bold text-center mb-[5rem] text-gray-900 font-blanka tracking-widest">
        My Timeline
      </h2>
      <motion.div
        ref={containerRef}
        className="space-y-8 max-w-4xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="p-4 border-l-4 border-brandCol3 bg-black shadow-lg rounded-sm"
            variants={itemVariants}
          >
            <div className="p-4 bg-brandCol2 shadow-lg">
              <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row lg:justify-between lg:items-center">
                <h3 className="text-2xl font-semibold text-brandCol4 font-open-dyslexic-alta-bold mb-2 lg:mb-0">
                  {event.title}
                </h3>
                <p className="text-brandCol3 font-open-dyslexic-alta-bold">
                  {event.date}
                </p>
              </div>
              <p className="mt-2 text-gray-200 font-open-dyslexic py-[1.5rem] leading-relaxed">
                {event.description}
              </p>
              <div className="flex justify-end mt-4">
                <div className="w-full h-[4px] bg-brandCol1 rounded-sm " />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>{" "}
    </div>
  );
};

export default Timeline;
