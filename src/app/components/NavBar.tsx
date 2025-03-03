"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { NAV_LINKS } from "../constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-end py-10">
      <ul className="hidden h-full gap-12 lg:flex mr-8">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            scroll={false}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-sky-500 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              const targetSection = document.querySelector(link.href);
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className=" flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/jordan-hermans/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Jordan-92">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
