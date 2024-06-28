import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
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
    <nav className="w-fit h-screen py-7 border-r border-black flex flex-col justify-between">
      <header>
        <div className="w-full">
          <Image
            src="/logo.png"
            alt="AP"
            width={70}
            height={70}
            className="mx-auto"
          />
        </div>
      </header>
      <main>
        <ul className="h-72 p-4 flex flex-col justify-between">
          {screens.map((screen) => (
            <Link href={screen.href} key={screen.href}>
              <li className="p-2 border bg-gray-200 border-gray-400 rounded-md text-center">
                {screen.name}
              </li>
            </Link>
          ))}
        </ul>
      </main>
      <footer>
        <div className="w-full h-20 flex flex-col justify-between">
          <Link href="https://github.com/AryanPahuja21" target="_blank">
            <Image
              src="/social/github.svg"
              alt="Github"
              width={32}
              height={32}
              className="mx-auto"
            />
          </Link>
          <Link href="https://linkedin.com/in/aryanpahuja21" target="_blank">
            <Image
              src="/social/linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={30}
              className="mx-auto"
            />
          </Link>
        </div>
      </footer>
    </nav>
  );
};

export default Navbar;
