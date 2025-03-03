"use client";

import { EDUCATION } from "../constants";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="education">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:items-center lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <Image
                src={education.image}
                width={160}
                height={160}
                alt={education.company}
                className="mb-6 rounded"
              ></Image>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-2xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text tracking-tight text-transparent">
                  {education.company}
                </span>{" - "}
                <span
                  className="text-sm text-sky-100"
                  dangerouslySetInnerHTML={{ __html: education.description }}
                />
              </h6>
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
              <ul className="mb-2 list-disc list-inside text-neutral-400">
                {education.certifications.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div className="text-sm text-neutral-400">
                {"I have worked on various projects, some of which are showcased below in the "}
                <Link
                  href="#projects"
                  scroll={false}
                  key="projects"
                  className="text-sky-300 hover:text-sky-500 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetSection = document.querySelector("#projects");
                    if (targetSection) {
                      targetSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {"Projects"}
                </Link>
                {" section."}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
