"use client";
import { Image } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

export default function Works() {
  const [position, setPosition] = useState({ top: 360, left: 580 });
  const [showInfo, setShowInfo] = useState(false);

  const handleKeyDown = (event: any) => {
    const step = 5;
    let newPosition = { ...position };

    switch (event.key) {
      case "ArrowUp":
      case "w":
      case "W":
        newPosition = {
          ...newPosition,
          top: Math.max(newPosition.top - step, 0),
        };
        break;
      case "ArrowDown":
      case "s":
      case "S":
        newPosition = {
          ...newPosition,
          top: Math.min(newPosition.top + step, window.innerHeight - 50), // Adjust the bottom boundary
        };
        break;
      case "ArrowLeft":
      case "a":
      case "A":
        newPosition = {
          ...newPosition,
          left: Math.max(newPosition.left - step, 460),
        };
        break;
      case "ArrowRight":
      case "d":
      case "D":
        newPosition = {
          ...newPosition,
          left: Math.min(newPosition.left + step, window.innerWidth - 415), // Adjust the right boundary
        };
        break;
      case "Escape":
        window.history.back();
        break;
    }

    setPosition(newPosition);

    // Log the new position to the console
    console.log(`Character position - Top: ${newPosition.top}, Left: ${newPosition.left}`);

    // Check if character is in a certain location with a 20px error margin
    const firstTargetTop = 360;
    const firstTargetLeft = 580;
    const margin = 20;

    if (
      newPosition.top >= firstTargetTop - margin &&
      newPosition.top <= firstTargetTop + margin &&
      newPosition.left >= firstTargetLeft - margin &&
      newPosition.left <= firstTargetLeft + margin
    ) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  useEffect(() => {
    const handleFocus = () => {
      document.getElementById("game-container")?.focus();
    };

    handleFocus();
    window.addEventListener("click", handleFocus);
    return () => {
      window.removeEventListener("click", handleFocus);
    };
  }, []);

  return (
    <div
      id="game-container"
      onKeyDown={handleKeyDown}
      className="flex justify-center items-center w-screen h-screen relative outline-none"
    >
      <Image className="z-1 mx-auto my-auto" src="/map.png" width={1000} />
      <div
        className="character z-2 absolute"
        style={{
          top: position.top,
          left: position.left,
          width: 50, // Character width
          height: 50, // Character height
        }}
      >
        <Image className="z-1 mx-auto my-auto" src="/character-icon.png" width={50} height={50} />
      </div>
      {showInfo && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            padding: "10px",
            textAlign: "center",
          }}
        >
          This is the information you want to display when the character is in a
          certain location.
        </div>
      )}
        {showInfo && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            padding: "10px",
            textAlign: "center",
          }}
        >
         hahahahahha
        </div>
      )}
    </div>
  );
}
