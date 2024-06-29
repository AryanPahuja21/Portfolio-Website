import Navbar from "@/components/Navbar/Navbar";
import HomePage from "@/app/_components/Home/Home";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <div className="lg:flex">
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
