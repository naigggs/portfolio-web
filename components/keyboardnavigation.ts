import { useEffect } from "react";

const useKeyboardNavigation = (elements: React.RefObject<HTMLElement>[]) => {
  useEffect(() => {
    let currentIndex = 0;

    const focusElement = (index: number) => {
      elements[index]?.current?.focus();
    };

    const playSoundEffect = () => {
      // Create and play the sound effect audio
      const soundEffectAudio = new Audio("/select-sound.mp3");
      soundEffectAudio.volume = 0.05;
      soundEffectAudio.play();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
          currentIndex = (currentIndex - 1 + elements.length) % elements.length;
          focusElement(currentIndex);
          playSoundEffect(); // Play sound effect
          break;
        case "ArrowDown":
        case "s":
        case "S":
          currentIndex = (currentIndex + 1) % elements.length;
          focusElement(currentIndex);
          playSoundEffect(); // Play sound effect
          break;
        case "ArrowRight":
        case "d":
        case "D":
          const activeElement = elements[currentIndex]?.current;

          activeElement?.click();

          break;
        case "ArrowLeft":
        case "a":
        case "A":
          window.history.back();
          break;
        default:
          return;
      }
      event.preventDefault();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [elements]);
};

export default useKeyboardNavigation;
