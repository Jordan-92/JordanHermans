"use client";

import { EXPERIENCES } from "../constants";
import Image from "next/image";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="experience">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:items-center lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <Image
                src={experience.image}
                width={160}
                height={160}
                alt={experience.title}
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
                  {experience.title}
                </span>{" - "}
                <span
                  className="text-sm text-sky-100"
                  dangerouslySetInnerHTML={{ __html: experience.company }}
                />
              </h6>
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
              <p
                className="mb-4 text-neutral-400"
                dangerouslySetInnerHTML={{ __html: experience.description }}
              />
              <div className="mt-4">
                {Object.entries(experience.technologies).map(([tech, url], index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-500 hover:underline hover:text-sky-400"
                  >
                    {tech}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;