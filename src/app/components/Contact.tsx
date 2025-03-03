"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        <p>{CONTACT.email}</p>
        <div className="my-6 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/jordan-hermans/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Jordan-92">
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
