import React from "react";
import { FlipWords } from "../ui/flip-words";

const HeroSection = () => {
  return (
    <>
      <main>
        <div className="bg-[#101010] h-screen flex flex-col gap-5 items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Hey, I'm</h1>
          <div className="text-5xl font-bold">
            <FlipWords
              words={["", "a"]}
              duration={3000}
              className="text-red-600"
            />
            <FlipWords
              words={["Aryan", "Web"]}
              duration={3000}
              className="text-red-600"
            />
            <FlipWords
              words={["Pahuja", "Developer"]}
              duration={3000}
              className="text-red-600"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
