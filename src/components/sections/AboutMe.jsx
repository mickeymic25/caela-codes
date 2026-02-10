import { motion } from "motion/react";
import { skillLogo } from "../data/data";

function AboutMe() {
  return (
    <section
      id="about"
      className=" bg-orange-100 md:max-w-screen lg:max-2xl:h-screen"
    >
      <div className="container mx-auto flex flex-col items-center gap-4 p-4">
        <h1 className="py-3">About Me</h1>

        <div className="flex flex-col md:flex-row md:gap-4 lg:justify-center ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                bounce: 0.5,
              },
            }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center text-base sm:text-lg md:text-xl md:w-3/5 p-9   bg-[#FFE0BB]  space-y-8 rounded-tr-[5rem] rounded-bl-[5rem] text-left md:p-10"
          >
            <p className="">
              I enjoy turning ideas into responsive, user-focused websites, from
              designing flows to coding layouts. I’ve contributed to real
              projects from charity sites to collaborative front-end apps in
              agile, remote teams. With a background in administration and
              project-focused roles, I bring strong communication, organization
              and teamwork to every project. I’m passionate about helping out,
              learning and building clean, accessible digital experiences that
              make an impact.
            </p>

            <p>
              If you would like further information on my experience, take a
              look at{" "}
              <a
                href="/2026_ Micaela_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-700 underline transition-colors font-semibold"
              >
                my CV
              </a>{" "}
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                bounce: 0.5,
              },
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mt-6 "
          >
            <h2 className="font-semibold">Skills and Technologies </h2>
            <div className="bg-transparent rounded-4xl shadow-2xl shadow-orange-200  p-5  grid grid-cols-3 grid-rows-3 gap-3 overflow-hidden">
              {skillLogo.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center p-1 md:p-3"
                  >
                    <img
                      src={skill.image}
                      alt={skill.alt}
                      className="h-10  md:h-20"
                    />
                    <h3>{skill.title}</h3>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
