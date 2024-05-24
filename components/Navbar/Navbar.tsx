import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-[50px] flex justify-center items-center">
      <h1 className="text-center">
        This is a new version of my portfolio website, which is still under
        progress. Visit the older version{" "}
        <Link
          href="https://aryan-pahuja-version1.vercel.app"
          className="text-blue-700 font-bold hover:underline"
        >
          here
        </Link>
      </h1>
    </div>
  );
};

export default Navbar;
