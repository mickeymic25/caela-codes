import { motion } from "motion/react";
import headshot from "../../assets/headshot.png";

function HeroBanner() {
  const heroBannerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.9 },
    },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, duration: 0.8 },
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse sm:max-w-screen min-h-screen">
      <div className="flex justify-center items-center lg:w-1/2 pt-12 md:pt-3">
        <img
          src={headshot}
          className="h-64 md:h-80 lg:h-[80vh] w-auto object-contain"
        />
      </div>
      <motion.div
        variants={heroBannerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col justify-center text-left m-4 md:mt-12 lg:mt-0 lg:w-1/2"
      >
        <motion.h1
          variants={fadeInLeft}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
        >
          Hi, my name is Micaela
        </motion.h1>

        <motion.p
          variants={fadeInLeft}
          className="text-xl sm:text-2xl md:text-3xl font-medium mb-4"
        >
          Aspiring Front-end Developer
        </motion.p>

        <motion.p
          variants={fadeInLeft}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-left max-w-prose my-6 md:my-8 bg-white "
        >
          Creating responsive, clean web experiences with JavaScript, React,
          Next.js, and WordPress.
        </motion.p>

        <motion.p
          variants={fadeInLeft}
          className="italic text-sm text-gray-600 pb-2 bg-white "
        >
          Click to multiply the particles — drag to move!
        </motion.p>
      </motion.div>
    </div>
  );
}

export default HeroBanner;
