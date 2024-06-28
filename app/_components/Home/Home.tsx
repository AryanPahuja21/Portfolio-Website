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
          <h1 className="text-5xl md:text-7xl font-bold py-2 text-center bg-gradient-to-l from-slate-700 to-slate-500 bg-clip-text text-transparent">
            I'm Aryan Pahuja
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
      <section className="mt-14 grid grid-cols-2 items-center">
        <div>
          <Image
            src="/heroImage.png"
            alt="Aryan Pahuja"
            width={700}
            height={700}
            className=""
          />
        </div>
        <div className="mx-auto">
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
