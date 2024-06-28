import Image from "next/image";
import TypingAnimation from "@/components/magicui/typing-animation";
import SparklesText from "@/components/magicui/sparkles-text";

const HomePage = () => {
  return (
    <main className="w-full h-screen bg-slate-100 grid grid-cols-2">
      <div className="flex justify-center">
        <div className="mt-40">
          <SparklesText
            text="Welcome to my portfolio!"
            className="text-3xl mb-10 text-center font-bold text-black"
          />
          <TypingAnimation
            className="text-7xl font-bold py-2 text-center bg-gradient-to-tl from-slate-700 to-indigo-500 bg-clip-text text-transparent"
            text="I'm Aryan Pahuja"
          />
        </div>
        <Image
          src="/heroImage.png"
          alt="Aryan Pahuja"
          width={700}
          height={700}
          className="absolute bottom-0 left-10"
        />
      </div>
      <section>
        <h1 className="text-3xl font-bold text-black">About Me</h1>
      </section>
    </main>
  );
};

export default HomePage;
