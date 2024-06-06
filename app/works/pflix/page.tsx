'use client'
import React from "react";
import { motion } from "framer-motion";

export default function PFlix() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      <div className="text-center text-9xl">PFlix</div>;
    </motion.main>
  );
}
