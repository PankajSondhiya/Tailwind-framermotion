import { animate } from "motion";
import { motion } from "motion/react";

export const SVG = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-neutral-500"
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
        className="fill-transparent stroke-neutral-600"
        variants={{
          animate: { x: [0, -4, 4, 0] },
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path
        d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
        className="fill-transparent stroke-neutral-600"
        variants={{
          animate: { rotate: [0, -7, 7, 0] },
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

// export const SquareSVG = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       direction="ltr"
//       width="195.20001220703125"
//       height="168.00001525878906"
//       viewBox="502.4000244140625 188.1999969482422 195.20001220703125 168.00001525878906"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       dataColorMode="light"
//       stroke="currentColor"
//       className="text-green-600 fill-white"

//       //   className="tl-container tl-theme__force-sRGB tl-theme__light"
//       //   style="background-color: rgb(249, 250, 251);"
//     >
//       <defs />
//       <g transform="matrix(1, 0, 0, 1, 534.4, 220.2)" opacity="1">
//         <path
//           strokeWidth="3.5"
//           d="M 7.7253 0.8229 L 124.2477 -0.1883 Q 131.2477 -0.1883 131.2477 6.8117 L 131.7555 97.4059 Q 131.7555 104.4059 124.7555 104.4059 L 6.9953 103.1629 Q -0.0047 103.1629 -0.0047 96.1629 L 0.7253 7.8229 Q 0.7253 0.8229 7.7253 0.8229 M 7.0025 0.8982 L 124.4175 -0.4537 Q 131.4175 -0.4537 131.4175 6.5463 L 131.1315 96.4184 Q 131.1315 103.4184 124.1315 103.4184 L 7.5559 104.4735 Q 0.5559 104.4735 0.5559 97.4735 L 0.0025 7.8982 Q 0.0025 0.8982 7.0025 0.8982"
//           fill="transparent"
//           stroke="currentColor"
//           //   stroke="blue"

//           // crrent-color is a keyword thaat we have to use to manupulate SCG
//         />
//       </g>
//     </svg>
//   );
// };

const SvgAnimation = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-amber-100">
      <motion.div
        className="flex size-64 items-center justify-center rounded-2xl border-0 bg-neutral-200 shadow-2xl"
        whileHover="animate"
      >
        <SVG />{" "}
      </motion.div>{" "}
    </div>
  );
};

export default SvgAnimation;
