import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]"
      >
        I’m Genius Developer, a senior software engineer with over 9 years of
        experience in software engineering, web and mobile development.
        <br />
        I’m highly organized, self-motivated, and proficient with both frontend
        & backend technologies.
        <br />
        I’m seeking to use my hard won technical and programming skills
        alongside proven project management to improve quality, cost and time
        metrics for web & mobile application development.
        <br />
        I am a great communicator, enjoy collaborating within teams where I
        bring my creativity in problem solving, drive and efficiency to the
        table. I believe in being a self-starter, thinking critically and taking
        accountability for my work and responsibilities while inspiring the same
        in people around me.
        <br />
        <br />
        The great philosopher Plato once said, “The beginning is the most
        important part of the work.”
        <br />
        Please feel free to message me and start your project with me.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
