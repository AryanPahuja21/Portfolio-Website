"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  const screens = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Skills",
      href: "/skills",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="w-full h-[50px] md:h-[70px] lg:h-screen lg:py-7 lg:border-r border-black flex lg:flex-col justify-between">
      <header className="my-auto lg:my-0">
        <div className="w-full">
          <Image
            src="/logo.png"
            alt="AP"
            width={50}
            height={50}
            className="mx-auto w-10 md:w-14"
          />
        </div>
      </header>
      <main>
        <ul className="lg:h-72 p-4 flex lg:flex-col justify-between">
          {screens.map((screen) => (
            <Link href={screen.href} key={screen.href}>
              <li
                className={`p-1 md:p-2 mx-0.5 md:mx-1 lg:mx-0 border text-xs md:text-base border-gray-400 rounded-md text-center ${
                  currentPath === screen.href
                    ? "bg-black text-white font-bold shadow-lg"
                    : "bg-gray-200"
                }`}
              >
                {screen.name}
              </li>
            </Link>
          ))}
        </ul>
      </main>
      <footer className="lg:mx-auto my-auto lg:my-0 w-20">
        <div className="w-full lg:h-20 flex lg:flex-col justify-around items-center">
          <Link href="https://github.com/AryanPahuja21" target="_blank">
            <Image
              src="/social/github.svg"
              alt="Github"
              width={25}
              height={25}
              className="mx-auto w-6 md:w-8"
            />
          </Link>
          <Link href="https://linkedin.com/in/aryanpahuja21" target="_blank">
            <Image
              src="/social/linkedin.svg"
              alt="LinkedIn"
              width={23}
              height={23}
              className="mx-auto w-6 md:w-8"
            />
          </Link>
        </div>
      </footer>
    </nav>
  );
};

export default Navbar;
