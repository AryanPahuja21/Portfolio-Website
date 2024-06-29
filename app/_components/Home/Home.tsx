import Image from "next/image";
import TypingAnimation from "@/components/magicui/typing-animation";
import SparklesText from "@/components/magicui/sparkles-text";
import SlightFlip from "@/components/magicui/flip-text";
import ShimmerButton from "@/components/magicui/shimmer-button";

const HomePage = () => {
  return (
    <main className="relative w-full h-[calc(100vh-50px)] md:h-[calc(100vh-70px)] lg:h-screen bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 flex flex-col lg:grid lg:grid-2 lg:justify-normal">
      <div className="flex justify-center">
        <div className="mt-24">
          <SparklesText
            text="Welcome to my portfolio!"
            className="text-3xl mb-10 text-center font-bold text-black"
          />
          <h1 className="text-5xl md:text-7xl font-bold py-2 text-center bg-gradient-to-l from-slate-700 to-slate-500 bg-clip-text text-transparent">
            I&apos;m Aryan Pahuja
          </h1>

          <SlightFlip
            words={[
              "Frontend Developer",
              "Backend Developer",
              "MERN Stack Developer",
            ]}
            className="text-xl md:text-3xl font-techy"
          />
        </div>
      </div>
      <section className="w-full h-full flex flex-col justify-between items-center lg:grid lg:grid-cols-2">
        <div className="w-full mx-auto md:mt-14 mb-7 md:mb-0">
          <h1 className="text-2xl md:text-4xl mt-6 lg:mb-14 text-center tracking-widest font-bold bg-gradient-to-b from-black to-indigo-600 bg-clip-text text-transparent">
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
        <div className="w-full">
          <Image
            src="/heroImage.png"
            alt="Aryan Pahuja"
            width={700}
            height={700}
            className="mx-auto w-[240px] md:w-[400px] lg:w-[500px]"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
