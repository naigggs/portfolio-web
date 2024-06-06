'use client'
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const linkVariants = {
    hover: {
      scale: 1.02, // Grow on hover
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="flex flex-col align-middle mx-[83px]">
      <div className="flex flex-col text-[220px] leading-none my-[60px]">
        <motion.div variants={linkVariants} whileHover="hover" className="w-1/2">
          <Link href={"/works"}>
            <div className="text-wrapper  w-1/2"><h1>WORK</h1></div>
          </Link>
        </motion.div>
        <motion.div variants={linkVariants} whileHover="hover" className="w-1/2">
          <Link href={"/about"}>
            <div className="text-wrapper  w-1/2"><h1>ABOUT</h1></div>
          </Link>
        </motion.div>
        <motion.div variants={linkVariants} whileHover="hover" className="w-1/2">
          <Link href={"/contact"}>
            <div className="text-wrapper  w-1/2"><h1>CONTACT</h1></div>
          </Link>
        </motion.div>
      </div>
      <div className="absolute top-[780px]">
        <h1 className="text-[22px] leading-none mb-2">
          {" "}
          21 | Engineering Student | Self-Learned Full-Stack Developer{" "}
        </h1>
        <hr className=" border-black border-medium w-[755px]" />
        <h1 className="text-[98px] leading-none">Gian Cabigting</h1>
      </div>
    </div>
  );
}

// Add this CSS to your stylesheet
