import { motion } from "framer-motion";

const Button = ({ children, ...props }) => {
  return (
    <motion.button
      {...props}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      className="
        bg-orange-100 
        rounded-lg 
        border 
        border-transparent 
        px-4 
        py-3 
        text-base 
        cursor-pointer 
        transition 
        duration-100 
        hover:border-[#e9a319] 
        
        active:border-[#e9a319]
        focus:border-[#e9a319]
       "
    >
      {children}
    </motion.button>
  );
};

export default Button;
