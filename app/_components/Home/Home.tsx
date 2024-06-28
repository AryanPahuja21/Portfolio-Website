import Image from "next/image";
import TypingAnimation from "@/components/magicui/typing-animation";
import SparklesText from "@/components/magicui/sparkles-text";
import SlightFlip from "@/components/magicui/flip-text";
import ShimmerButton from "@/components/magicui/shimmer-button";

const HomePage = () => {
  return (
    <main className="relative w-full h-screen bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 grid grid-2">
      <div className="flex justify-center">
        <div className="mt-24">
          <SparklesText
            text="Welcome to my portfolio!"
            className="text-3xl mb-10 text-center font-bold text-black"
          />
          <TypingAnimation
            className="text-7xl font-bold py-2 text-center bg-gradient-to-l from-slate-700 to-slate-500 bg-clip-text text-transparent"
            text="I'm Aryan Pahuja"
          />

          <SlightFlip
            words={[
              "",
              "Frontend Developer",
              "Backend Developer",
              "MERN Stack Developer",
            ]}
            className="text-3xl font-techy"
          />
        </div>
      </div>
      <section className="flex justify-between">
        <Image
          src="/heroImage.png"
          alt="Aryan Pahuja"
          width={700}
          height={700}
          className="absolute bottom-0 left-0"
        />
        <div className="mt-24 absolute right-56 bottom-44">
          <h1 className="text-4xl tracking-widest font-bold bg-gradient-to-b from-black to-indigo-600 bg-clip-text text-transparent">
            Visit my Resume
          </h1>
          <a href="/Aryan_Resume.pdf" download>
            <ShimmerButton className="shadow-2xl mx-auto my-4">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Download Resume
              </span>
            </ShimmerButton>
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
