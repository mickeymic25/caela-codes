import { motion } from "framer-motion";
import Button from "../common/Button";

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
    <div className="flex flex-col lg:flex-row-reverse sm:max-w-screen h-screen">
      <div className="flex justify-center items-center lg:w-1/2 p-0">
        <img
          src="/src/assets/headshot-test-1.png"
          className="h-[300px] md:h-full w-auto
          
          "
        />
      </div>
      <motion.div
        variants={heroBannerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-left m-4  md:mt-20 lg:w-1/2  lg:mt-72"
      >
        <motion.h1 variants={fadeInLeft} className="text-2xl md:text-4xl mb-3">
          Hi, my name is Micaela
        </motion.h1>
        <motion.p
          variants={fadeInLeft}
          className="text-base text-justify text-balance hyphens-auto sm:text-lg md:text-xl lg:text-2xl bg-white"
        >
          I build creative and responsive websites with JavaScript, React and
          Next.js. Passionate about creating clean, user-friendly interfaces
          that look great and work seamlessly across all devices, I’m committed
          to continuous learning and collaboration to deliver engaging,
          impactful web experiences. Explore my projects below, I’d love to hear
          your feedback!
        </motion.p>
        <motion.div className="my-1.5 md:my-2.5" variants={fadeInLeft}>
          <Button>View CV</Button>
        </motion.div>

        <motion.p
          variants={fadeInLeft}
          className="italic text-sm text-gray-600 pb-2 bg-white"
        >
          Click to multiply the particles — drag to move!
        </motion.p>
      </motion.div>
    </div>
  );
}

export default HeroBanner;
