"use client";
import React from "react";
import Link from "next/link";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Whiteboard",
    description: "A collaborative online whiteboard app.",
  },
  { title: "Clippy.AI", description: "An AI-powered virtual assistant." },
  { title: "Delivio", description: "A delivery management platform." },
  { title: "PFlix", description: "A streaming service for movies and shows." },
  { title: "Portfolio", description: "My personal portfolio website." },
  { title: "TBA.", description: "Coming Soon!" },
];

export default function Works() {
  const linkVariants = {
    hover: {
      scale: 1.02, // Grow on hover
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="flex flex-col h-full w-full align-middle mx-[83px]">
      <div className="flex flex-row my-[60px]">
        <h1 className="text-[220px] leading-none">WORK</h1>
        <div className="text-right mx-20 my-[30px]">
          <ScrollShadow
            hideScrollBar
            size={100}
            className="w-[900px] h-[830px] space-y-10"
          >
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                variants={linkVariants}
                whileHover="hover"
              >
                <Link href={`/works/${project.title.toLowerCase()}`}>
                  <div className="text-wrapper relative">
                    <h1 className="text-9xl">{project.title}</h1>
                  </div>
                </Link>
              </motion.div>
            ))}
          </ScrollShadow>
        </div>
      </div>{" "}
      
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
