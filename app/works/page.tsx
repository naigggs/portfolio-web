"use client";
import React from "react";
import Link from "next/link";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";

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
        <Link className="h-48" href={"/works"}>
          <h1 className="text-[220px] leading-none">WORK</h1>
        </Link>
        <div className="text-right mx-20 my-[30px]">
          <ScrollShadow
            hideScrollBar
            size={100}
            className="w-[900px] h-[830px] space-y-10"
          >
            <motion.div variants={linkVariants} whileHover="hover" className="">
              <Link href={"/works"}>
                <div className="text-wrapper">
                  <h1 className="text-9xl">Whiteboard</h1>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover" className="">
              <Link href={"/works"}>
                <div className="text-wrapper">
                  <h1 className="text-9xl">Clippy.AI</h1>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover" className="">
              <Link href={"/works"}>
                <div className="text-wrapper">
                  <h1 className="text-9xl">Delivio</h1>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover" className="">
              <Link href={"/works"}>
                <div className="text-wrapper">
                  <h1 className="text-9xl">PFlix</h1>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover" className="">
              <Link href={"/works"}>
                <div className="text-wrapper">
                  <h1 className="text-9xl">Portfolio</h1>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover" className="">
              <Link href={"/works"}>
                <div className="text-wrapper">
                  <h1 className="text-9xl">T.B.A.</h1>
                </div>
              </Link>
            </motion.div>
          </ScrollShadow>
        </div>
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
