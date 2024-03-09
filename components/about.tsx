"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
//   const { ref } = useSectionInView("About");

  return (
    <motion.section
    //   ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        
I am Aryan Pahuja, a passionate professional dedicated to   {" "}
        <span className="font-medium">software development.</span>Currently, I am in my second year at{" "}
        <span className="font-medium">Maharaja Surajmal Institute of Technology.</span>{" "}
        <span className="italic">My journey in this field is marked by a series of achievements, including participation in</span> <span className="underline">10+ Hackathons</span> and securing victories in {" "}
        <span className="font-medium">
          2 Hackathons
        </span>
        , showcasing my innovative approach and problem-solving skills.
      </p>

      <p>
        I am committed to staying updated with the latest <span className="italic">technologies and trends,{" "}</span>
        driven by my passion for continuous learning and growth in the ever-evolving field of software development.
      </p>
    </motion.section>
  );
}