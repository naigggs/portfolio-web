'use client'
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function TBA() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20},
    enter: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <motion.main
    variants={variants}
    initial="hidden"
    animate="enter"
    transition={{ type: "linear" }}
  >
    <div className=" flex flex-col justify-center align-middle">
      <div className="mx-auto my-96">
        <div className=" text-9xl">Error 404</div>
        <div className="text-xl text-center">
          This page is still under development! Stay tuned!
        </div>

        <div className="mt-10 flex justify-center">
         
          <Button><Link href={'/'}>Go back to homepage!</Link></Button>
        </div>
      </div>
    </div>
  </motion.main>
  );
}
