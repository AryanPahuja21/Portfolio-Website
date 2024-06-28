import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-full text-center text-white bg-gray-700 border-b border-gray-600">
        <p>
          This is a new version of my portfolio website, which is still under
          progress. Visit the older version{" "}
          <span>
            <Link
              href="https://aryan-pahuja-version1.vercel.app"
              className="text-sky-300 font-semibold underline hover:no-underline"
            >
              here
            </Link>
          </span>
        </p>
      </div>
      <div className="flex">
        <aside>
          <Navbar />
        </aside>
        <main className="w-full mx-auto">
          <h1 className="text-4xl font-bold text-center mt-10">
            Welcome to my portfolio!
          </h1>
          <p className="text-center mt-5">
            This is the portfolio website of Aryan Pahuja.
          </p>
        </main>
      </div>
    </div>
  );
}
