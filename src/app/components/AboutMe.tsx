"use client"

import { ABOUT_ME, HOBBIES, LANGUAGES, SKILLS } from "../constants";
import { motion } from "framer-motion";
import HobbyCard from "./HobbyCard";
import { GoArrowRight } from "react-icons/go";

const AboutMe = () => {
    return (
        <div className="border-b border-neutral-900 pb-4" id="aboutme">
            <div className="mb-12 flex flex-wrap lg:flex-nowrap lg:items-start lg:justify-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-2/3 px-4"
                >
                    <h1 className="my-9 text-center text-4xl">
                        About Me
                    </h1>
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2">{ABOUT_ME}</p>
                    </div>
                    <h2 className="my-5 text-3xl">Hobbies</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {HOBBIES.map((hobby, index) => (
                            <HobbyCard
                                key={index}
                                title={hobby.title}
                                image={hobby.image}
                                description={hobby.description}
                                skills={hobby.skills}
                            />
                        ))}
                    </div>
                    <h2 className="my-5 text-3xl">Languages</h2>
                    <div className="flex flex-col gap-4">
                        {LANGUAGES.map((category, index) => (
                            <div key={index} className="flex justify-between items-start w-full">
                                <h3 className="font-bold text-lg pl-8 w-1/6">{category.title}</h3>
                                <span className="font-semibold text-lg w-1/4">{category.level}</span>
                                <div className="w-1/2 flex gap-4 flex-wrap">
                                    {category.languageStays && Object.keys(category.languageStays).length > 0 && (
                                        <>
                                            <span className="font-medium">Language stays:</span>
                                            {Object.entries(category.languageStays).map(([location, duration], i) => (
                                                <div key={`${index}-${i}`} className="flex gap-2 text-sm">
                                                    <span className="font-medium flex items-center">
                                                        {location} <GoArrowRight /> {duration}
                                                    </span>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <div className="lg:block border-l border-neutral-900 mx-2 self-stretch"></div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/3 px-4 lg:mt-20"
                >
                    <h2 className="my-5 text-3xl">
                        Technical skills
                    </h2>
                    <div className="flex flex-col gap-4">
                        {SKILLS.map((category, index) => (
                            <div key={index} className="flex justify-between items-start">
                                <h3 className="font-bold text-lg w-2/5">{category.title}</h3>
                                <ul className="w-3/5">
                                    {Object.entries(category.skills).map(([skill, rating], i) => (
                                        <li key={i} className="flex justify-between py-1 text-sm">
                                            <span>{skill}</span>
                                            <span>{rating}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMe;