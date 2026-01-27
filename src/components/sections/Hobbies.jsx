import { motion } from "motion/react";
import { hobbyPhoto } from "../data/data";

function Hobbies() {
  return (
    <section
      id="hobbies"
      className="flex flex-col bg-orange-100 md:max-w-screen lg:max-xl:h-screen gap-4 p-4"
    >
      <div className="container mx-auto flex flex-col justify-center items-center flex-grow">
        <h1 className="py-3">My Hobbies </h1>
        <p className="pb-2">
          Outside of coding, I’m a curious creator who loves to make, explore,
          and learn. Whether it’s arts and crafts, photography, or diving into a
          good book, I’m always finding new ways to stay inspired.
        </p>

        <p className="md:hidden">
          Click and hold on the image to find out more about he image!
        </p>
      </div>

      <div className="columns-1 md:columns-5 gap-4 object-cover overflow-hidden p-6 bg-white rounded-2xl">
        {hobbyPhoto.map((hobby, index) => {
          return (
            <motion.div
              key={index}
              className="relative group p-1 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <img
                src={hobby.image}
                alt={hobby.alt}
                className="w-full object-cover rounded-2xl"
              />
              {/*Overlay*/}
              <motion.div
                className="absolute inset-0 bg-black/70 opacity-0  flex items-center justify-center p-1 md:p-4 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                whileTap={{ opacity: 1, scale: 1 }}
                whileFocus={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-base text-white text-center">
                  {hobby.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Hobbies;
