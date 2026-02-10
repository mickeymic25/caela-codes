import { motion } from "framer-motion";
import Button from "./Button";

function Cards({ image, title, description, button, tools }) {
  return (
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
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true }}
      className="project-cards flex sm:flex-row md:flex-col border w-full h-full sm:max-w-sm md:max-w-md lg:max-w-lg  bg-white border-gray-50 rounded-4xl shadow-lg  shadow-[#FFBB5C]"
    >
      <div className="project-content flex flex-col flex-grow p-6">
        <img
          src={image}
          className="object-cover rounded-xl w-full h-[200px] md:h-[218px] lg:h-[250px] bg-orange-100"
        />
        <h2 className=" font-bold mt-2 mb-2">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-row gap-2 pt-0.5">
          {tools?.length > 0 &&
            tools.map((tool, i) => {
              return (
                <div key={i}>
                  <img src={tool.icon} alt={tool.alt} className="size-5" />
                </div>
              );
            })}
        </div>

        <div className="flex flex-row  gap-4 py-2 mt-auto">
          {button?.length > 0 &&
            button.map((btn, i) => {
              const Icon = btn.icon;
              return (
                <Button
                  key={i}
                  href={btn.link}
                  onClick={() => {
                    window.location.href = btn.link;
                  }}
                >
                  <Icon className="inline-block size-4 lg:size-6" />
                </Button>
              );
            })}
        </div>
      </div>
    </motion.div>
  );
}
export default Cards;
