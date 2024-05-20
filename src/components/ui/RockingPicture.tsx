"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

const RockingPicture = ({
  imageUrl,
  altText,
}: {
  imageUrl: StaticImageData;
  altText: string;
}) => {
  const hoverAnimation = {
    rotate: [0, -5, 5, -5, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      loop: Infinity,
    },
  };

  return (
    <motion.div
      className="-mb-[3rem]"
      whileHover={hoverAnimation}
      animate={{ rotate: 0, transition: { duration: 0.5 } }}
    >
      <Image src={imageUrl} alt={altText} />
    </motion.div>
  );
};

export default RockingPicture;
