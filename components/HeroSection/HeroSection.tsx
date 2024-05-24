import React from "react";
import { FlipWords } from "../ui/flip-words";
import { SparklesCore } from "../ui/sparkles";
import { Spotlight } from "../ui/spotlight";

const HeroSection = () => {
  return (
    <>
      <main>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="blue"
        />
        <div className="bg-black h-screen flex flex-col gap-5 items-center justify-center">
          <h1 className="text-sky-200 text-5xl font-bold tracking-tight">
            Hey, I'm
          </h1>

          <div className="text-5xl font-bold font-hero tracking-wider">
            <FlipWords
              words={["", "a"]}
              duration={3000}
              className="text-blue-700"
            />
            <FlipWords
              words={["Aryan", "Web"]}
              duration={3000}
              className="text-blue-700"
            />
            <FlipWords
              words={["Pahuja", "Developer"]}
              duration={3000}
              className="text-blue-700"
            />
          </div>

          <div className="w-[40rem] h-40 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
