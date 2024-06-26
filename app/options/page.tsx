"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import useDisableMouse from "@/components/disablemouse";
import useKeyboardNavigation from "@/components/keyboardnavigation";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

import {
  SquareArrowDown,
  SquareArrowLeft,
  SquareArrowRight,
  SquareArrowUp,
  Swords,
} from "lucide-react";

export default function Options() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useDisableMouse();

  const workRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);

  const elementRefs = [workRef, aboutRef];

  // Ensure the hook runs after refs are assigned
  useKeyboardNavigation(elementRefs);

  useEffect(() => {
    if (workRef.current) {
      workRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      {!isFullscreen ? (
        <motion.div
          initial={{ scale: 1 }} // Initial scale
          animate={{ scale: [1, 1.005, 1] }} // Animation variants (scaling up, scaling down, back to normal)
          transition={{ duration: 1, repeat: Infinity }} // Transition duration and loop infinitely
          // style={{ width: 100, height: 100, backgroundColor: "blue" }}
        >
          <div className="mt-10 mb-[-700px]">
            <Card>
              <CardBody className="bg-red-500">
                <p>This page is still under development! Stay tuned!</p>
              </CardBody>
            </Card>
          </div>
        </motion.div>
      ) : null}

      <div className="mx-auto my-auto">
        <div className="flex flex-col mt-3 ">
          <div className="flex items-center justify-center mt-10">
            <Swords size={50} className="mr-2" />{" "}
            <Swords size={50} className="mr-10" />
            <h1 className="text-center text-5xl">
              Gian Ca<span className="text-[#9d2227] uppercase">big</span>ting
            </h1>
            <Swords size={50} className="ml-10 mr-2" />{" "}
            <Swords size={50} className="mr-2" />
          </div>
          <div className="border-2 border-t border-white mt-1"></div>
          <div className="text-center mt-1">
            21 | Engineering Student | Self-Learned Full-Stack Developer
          </div>
          <div className="flex flex-row w-1/2 mx-auto mt-24">
            <div className="text-center w-full flex flex-col gap-y-10 ">
              <h1>
                <Link ref={workRef} tabIndex={0} href="/works">
                  Music Volume
                </Link>
              </h1>
              <h1>
                <Link ref={aboutRef} tabIndex={0} href="/about">
                  Sound Effects Volume
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <SquareArrowUp size={20} className="mr-2" />
          <span className="mr-2">Up</span>
          <SquareArrowDown size={20} className="mr-2" />
          <span className="mr-2">Down</span>
          <SquareArrowLeft size={20} className="mr-2" />
          <span className="mr-2">Back</span>
          <SquareArrowRight size={20} className="mr-2" />
          <span className="mr-2">Enter</span>
        </div>
      </div>
    </div>
  );
}
