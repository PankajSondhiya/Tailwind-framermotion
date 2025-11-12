import { motion } from "motion/react";

const AnimatedButton = () => {
  return (
    <motion.div className=" perspective-[1000px] 
     transform-3d min-h-screen w-full bg-neutral-800 bg-radial-[var(--color-neutral-200)_1%,transparent_1%] bg-size-[20px_20px] flex justify-center items-center ">
      <motion.button
        className="bg-neutral-700 relative rounded-2xl text-3xl h-20 w-60 px-4 py-2  font-sans  text-neutral-500 group translate-z-56  drop-shadow-2xl shadow-cyan-400 "
        whileHover={{
          rotateX: 15,
          rotateY: 10,
          boxShadow: "0 0 20px rgba(14, 116, 144, 0.7)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <span className="group-hover:text-cyan-600">Subscribe</span>
        <motion.span className=" absolute opacity-50 bg-linear-to-r  from-transparent via-cyan-600 to-transparent   w-3/4 h-[2px] -bg-conic-210 translate-y-1 bottom-0 inset-x-0 mx-auto  group-hover:opacity-100 transition-all duration-300 "></motion.span>
      </motion.button>
    </motion.div>
  );
};

export default AnimatedButton;
