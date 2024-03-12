import HackJunction from '@/public/hackjunction.png'
import CryptoGuru from '@/public/cryptoguru.png'
import CitySync from '@/public/citysync.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "HackJunction",
    description:
      "Revolutionize your hackathon experience with our all-in-one platform tailored specifically for organizers.",
    tags: ["React.js", "Tailwind CSS", "Axios", "Material UI", "Framer Motion"],
    imageUrl: HackJunction
  },
  {
    title: "CryptoGuru",
    description:
      "CryptoGuru solves several problems related to accessing and understanding cryptocurrency information.",
    tags: ["React.js", "Tailwind CSS", "Chakra UI"],
    imageUrl: CryptoGuru
  },
  {
    title: "CitySync",
    description:
      "Explore a dynamic hub of information designed to enhance your urban experience.",
    tags: ["React.js", "Tailwind CSS", "Material UI"],
    imageUrl: CitySync
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Material UI",
  "Chakra UI",
  "Framer Motion",
  "Python",
  "C++",
  "Flutter",
  "Firebase"
] as const;