import { motion } from "motion/react";
import { SVG } from "./svgAnimation";

const SVGlines = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-neutral-900">
      <motion.div
        className="relative inset-0 flex size-[200px] items-center justify-center overflow-hidden rounded-2xl border-0 bg-neutral-400 p-[4px] shadow-2xl"
        whileHover="animate"
      >
        <div className="z-20 flex h-full w-full items-center justify-center rounded-2xl bg-neutral-500">
          <SVG />
        </div>
        <div className="absolute inset-0 h-full w-full scale-[1.5] animate-spin bg-conic from-transparent via-red-600 via-20% to-transparent to-10% [animation-duration:2s]"></div>
        <div className="absolute inset-0 h-full w-full scale-[1.5] animate-spin bg-conic-180 from-transparent via-yellow-600 via-20% to-transparent to-10% [animation-duration:2s]"></div>
      </motion.div>{" "}
    </div>
  );
};

export default SVGlines;
