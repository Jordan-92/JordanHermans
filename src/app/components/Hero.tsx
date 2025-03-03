"use client";

import { FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/ProfilePicture.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3 lg:px-8">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Jordan Hermans
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-200 via-slate-500 to-blue-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Student in industrial engineering sciences,<br />
              computer science orientation
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-5 font-light tracking-tighter"
            >
              I am seeking for a 6-week internship from August 4 to September 19, 2025<br />
              combined with a final thesis from September 22 to December 19, 2025.
            </motion.p>
            <div className="my-2 text-2xl">
              Get in Touch
            </div>
            <p>{CONTACT.email}</p>
            <div className="flex items-center justify-center gap-4 text-xl">
              <a href="https://www.linkedin.com/in/jordan-hermans/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <Image
                className="rounded-full my-8"
                src={profilePic}
                alt="Jordan Hermans"
                width={400}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
