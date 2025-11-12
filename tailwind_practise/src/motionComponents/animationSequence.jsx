import { motion, useAnimate } from "motion/react";
import { RiLoader3Line } from "react-icons/ri";

const AnimationSequenceButton = () => {
  const [scope, animate] = useAnimate();

  const animateSequence = async () => {
    const sequence = [
      [".loader", { opacity: [0, 1], display: "block" }, { duration: 0.2 }],

      [".loader", { rotate: 4 * 360 }, { duration: 2 }],

      [".loader", { opacity: [1, 0] }, { duration: 0.2 }],

      [".text", { opacity: 0, display: "none" }, { duration: 0.2 }],

      [
        "button",
        { width: "3.75rem", borderRadius: "1000px" },
        { duration: 0.5 },
      ],

      ["button", { scale: [1, 0.8, 1.2, 1] }, { duration: 0.5 }],

      [".check", { opacity: [0, 1] }, { duration: 0.1 }],

      [".check path", { pathLength: 1 }, { duration: 0.4, at: "-.2" }],
    ];

    await animate(sequence);
  };

  return (
    <motion.div
      ref={scope}
      className="flex h-screen w-screen items-center justify-center bg-neutral-900"
    >
      <motion.button
        className="relative flex h-[60px] cursor-pointer items-center justify-center rounded-xl bg-green-500 px-3 py-1 text-center text-lg"
        style={{ width: "30rem" }}
        onClick={animateSequence}
      >
        <motion.div className="loader opacity-0">
          <RiLoader3Line />
        </motion.div>

        <motion.div className="check absolute opacity-0">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-neutral-200)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-check"
          >
            <motion.path d="M5 12l5 5l10 -10" initial={{ pathLength: 0 }} />
          </motion.svg>
        </motion.div>

        <motion.span className="text">Pay $100</motion.span>
      </motion.button>
    </motion.div>
  );
};

export default AnimationSequenceButton;
