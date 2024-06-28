"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, Variants, motion } from "framer-motion";

interface SlightFlipProps {
  words: string[];
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  interval?: number;
}

export default function SlightFlip({
  words,
  duration = 0.3,
  delayMultiple = 0.08,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
  interval = 4200, // default interval of 2 seconds
}: SlightFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const changeWord = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(changeWord);
  }, [words, interval]);

  const currentWord = words[currentWordIndex];

  return (
    <div className="flex justify-center space-x-2">
      <AnimatePresence mode="wait">
        {currentWord.split("").map((char, i) => (
          <motion.span
            key={`${currentWord}-${i}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("origin-center drop-shadow-sm", className)}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
