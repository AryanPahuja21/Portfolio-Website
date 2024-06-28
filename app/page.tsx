import Navbar from "@/components/Navbar/Navbar";
import HomePage from "@/app/_components/Home/Home";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-full text-center text-white bg-gray-700 border-b border-gray-600">
        <p>
          This is a new version of my portfolio website, currently under
          development. Visit the older version{" "}
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
        <main className="w-full">
          <HomePage />
        </main>
      </div>
    </div>
  );
}
