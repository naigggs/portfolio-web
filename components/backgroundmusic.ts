"use client";
import { useEffect } from "react";

const BackgroundMusic = () => {
  useEffect(() => {
    const audio = new Audio("/bg-music.mp3");
    audio.loop = true;
    audio.volume = 0.08;
    audio.play();
    return () => {
      audio.pause();
    };
  }, [0.2]);

  return null;
};

export default BackgroundMusic;
