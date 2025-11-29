import { useState } from "react";
import { motion } from "motion/react";

const MaskEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const size = hovered ? 300 : 10;
  const numericSize = parseInt(size);

  return (
    <div
      className="relative min-h-screen w-full bg-neutral-950"
      onMouseMove={handleMove}
    >
      <motion.div
        className="absolute inset-0 flex h-screen w-full items-center justify-center"
        style={{
          WebkitMaskImage: "url(../../src/assets/mask.svg)",
          WebkitMaskRepeat: "no-repeat",
          background: "var(--color-orange-400)",
          color: "var(--color-neutral-800)",
          WebkitMaskOrigin: "border",
        }}
        animate={{
          WebkitMaskSize: `${numericSize}px`,
          WebkitMaskPosition: `${position.x - numericSize / 2}px ${
            position.y - numericSize / 2
          }px`,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <p
          className="max-w-xl py-5 text-center text-3xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          A visual designer — with skills that haven't been replaced by A.I
          (yet) — making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className="flex h-screen w-full items-center justify-center">
        <p className="max-w-xl py-5 text-center text-3xl text-white">
          I'm a{" "}
          <span className="text-center text-amber-500">
            selectively skilled
          </span>{" "}
          product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      </div>
    </div>
  );
};

export default MaskEffect;
