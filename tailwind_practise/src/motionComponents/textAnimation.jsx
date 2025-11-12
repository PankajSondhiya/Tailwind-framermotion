import { motion, stagger, useAnimate } from "motion/react";
import { span } from "motion/react-client";
import { useEffect } from "react";

const TextAnimation = () => {
  const text =
    "We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.";
  const [scope, animate] = useAnimate();
  const animateText = () => {
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)", y: 0 },
      {
        duration: 0.2,

        delay: stagger(0.1),
      },
    );
  };

  useEffect(() => {
    animateText();
  }, []);
  return (
    <motion.div className="flex h-screen w-screen items-center justify-center bg-neutral-950">
      <motion.h3
        className="font-bold-[10px] mx-auto max-w-7xl text-3xl text-neutral-200"
        ref={scope}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            style={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            key={word + index}
            className="inline-block"
          >
            {word} &nbsp;
          </motion.span>
        ))}
      </motion.h3>
    </motion.div>
  );
};

export default TextAnimation;
