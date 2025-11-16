import { useState } from "react";
import { motion } from "motion/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-screen w-full bg-neutral-900">
      <motion.div className="flex h-full w-full items-center justify-center bg-neutral-900 bg-[linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)] mask-radial-from-50% bg-size-[80px_80px]">
        <motion.div className="group relative min-h-100 max-w-200 overflow-hidden rounded-xl bg-neutral-700 p-3 shadow-sm inset-shadow-sm inset-shadow-neutral-700 sm:h-100">
          <div className="absolute -top-15 right-0 h-30 w-100 origin-right -rotate-z-15 bg-linear-to-b from-transparent via-neutral-500 via-30% to-transparent mask-l-from-5% mask-radial-from-50% opacity-0 blur-xs duration-600 group-hover:opacity-100 group-hover:transition group-hover:ease-in"></div>
          <motion.div className="grid h-full w-full rounded-lg border-neutral-400 bg-radial-[var(--color-neutral-400)_1%,transparent_1%] bg-size-[10px_10px] text-neutral-100 sm:grid-cols-2">
            <Img activeIndex={activeIndex} />{" "}
            <TextContent
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonial;

export const arrayTestimonial = [
  {
    id: 1,
    title: "Aarav Sharma",
    description:
      "Using this service has been a game-changer for me. The interface is clean, fast, and incredibly easy to navigate. I was able to complete my tasks much quicker than expected. The support team was also extremely helpful and guided me throughout the entire process.",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    title: "Priya Mehta",
    description:
      "I absolutely love the attention to detail and the smooth workflow. Everything feels intuitive, and the overall experience is simply outstanding. I’ve recommended this to many friends because it genuinely adds value to my daily routine.",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    title: "Rohan Patel",
    description:
      "This platform exceeded my expectations. The features are well built, and everything works flawlessly. What impressed me most was the consistency—every update brings something new without breaking the experience. Highly satisfied!",
    src: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 4,
    title: "Sneha Nair",
    description:
      "A beautifully designed experience with thoughtful features. The performance is top-notch, and the customer support is always responsive. I’ve been using it for months, and it has never failed me once. Truly reliable.",
    src: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    title: "Kabir Verma",
    description:
      "One of the best platforms I’ve used in a long time. The UI feels modern, the performance is smooth, and the entire experience feels well-crafted. It has helped me stay productive and organized every single day.",
    src: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

export const Img = ({ activeIndex }) => {
  const randomRotate = () => Math.floor(Math.random() * 21) - 10;

  return (
    <motion.div className="relative col-span-1 flex h-[250px] items-center justify-center sm:h-full">
      {arrayTestimonial?.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <motion.div
            key={item.id}
            className="absolute flex h-full w-full items-center justify-center p-9"
          >
            <motion.img
              initial={{
                opacity: 1,
                rotate: randomRotate(),
                translateY: 10,
                zIndex: 0,
                scale: 0.9,
                y: 0,
              }}
              animate={{
                rotate: isActive ? 0 : randomRotate(),
                opacity: isActive ? 1 : 0.8,
                zIndex: isActive ? 10 : 0,
                scale: isActive ? 1 : 0.9,
                y: isActive ? [0, -30, 0] : 0,
              }}
              exit={{
                rotate: randomRotate(),
                scale: 0.9,
              }}
              transition={{ duration: 0.4 }}
              src={item.src}
              className="inline-block aspect-square h-[250px] origin-bottom rounded-lg object-cover sm:h-full sm:w-full"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export const TextContent = ({ activeIndex, setActiveIndex }) => {
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % arrayTestimonial.length);
  };
  const handleprev = () => {
    setActiveIndex(
      (previndex) =>
        (previndex - 1 + arrayTestimonial.length) % arrayTestimonial.length,
    );
  };

  return (
    <motion.div className="col-span-1 flex h-full w-full flex-col items-start justify-around py-10">
      {" "}
      <motion.h2
        className="mb-3 w-full px-3 text-left text-2xl text-neutral-100"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={arrayTestimonial[activeIndex].src}
      >
        {arrayTestimonial[activeIndex]?.title}
      </motion.h2>
      <motion.p className="mb-3 h-[50%] px-3 text-justify text-sm text-neutral-300">
        {arrayTestimonial[activeIndex]?.description
          .split(" ")
          .map((word, index) => (
            <motion.span
              key={index + word}
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ delay: index * 0.02 }}
            >
              {word}{" "}
            </motion.span>
          ))}
      </motion.p>
      <motion.div className="justify mt-4 ml-4 flex w-auto gap-5 text-neutral-500">
        <button
          onClick={handleprev}
          className="tra transition-scale cursor-pointer rounded-full bg-neutral-700 duration-200 hover:scale-110"
        >
          <IconArrowLeft
            stroke={2}
            className="transition-all duration-300 ease-in-out hover:text-neutral-200"
          />
        </button>
        <button
          onClick={handleNext}
          className="transition-scale cursor-pointer rounded-full bg-neutral-700 duration-200 hover:scale-110"
        >
          {" "}
          <IconArrowRight
            stroke={2}
            className="transition-all duration-300 ease-in-out hover:text-neutral-200"
          />
        </button>
      </motion.div>
    </motion.div>
  );
};
