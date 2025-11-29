import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import {
  FaLaptopCode,
  FaServer,
  FaChartLine,
  FaRegSmile,
} from "react-icons/fa";

const Parallax = () => {
  const backgroundRef = useRef(null);
  const imageData = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
      alt: "Photo of a keyboard with code displayed on a screen",
      title: "Modern Coding Environment",
      description:
        "A close-up shot of a developer's desk, featuring a backlit keyboard and a monitor showing lines of code.",
      icon: FaLaptopCode,
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
      alt: "Computer servers stacked in a server room",
      title: "Data Center Infrastructure",
      description:
        "Rows of powerful servers storing data in a high-tech facility, representing the backbone of modern computing.",
      icon: FaServer,
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
      alt: "Blue and purple abstract light trails",
      title: "Digital Aurora",
      description:
        "Vibrant, abstract light trails that evoke a sense of the digital world and its endless possibilities.",
      icon: FaChartLine,
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
      alt: "Digital lines representing data flow",
      title: "Seamless Data Flow",
      description:
        "An abstract visual of glowing lines, symbolizing the smooth and continuous movement of information.",
      icon: FaRegSmile,
    },
  ];

  const backgroundFilter = ["#262626", "#3f3f3f", "#525252"];

  const [background, setBackground] = useState();

  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const motionValue = Math.floor(latest * 3);
    setBackground(backgroundFilter[motionValue]);
  });

  return (
    <motion.div
      className="flex min-h-screen w-full items-center justify-center bg-neutral-700 p-10"
      animate={{ background }}
      transition={{ ease: "easeInOut" }}
      ref={backgroundRef}
    >
      <motion.div className="flex max-w-4xl flex-col items-center justify-center gap-40 py-40">
        {imageData &&
          imageData.map(({ src, title, description, id, icon }) => (
            <ParallaxItem
              src={src}
              title={title}
              description={description}
              icon={icon}
              key={id}
            />
          ))}
      </motion.div>
    </motion.div>
  );
};

export default Parallax;

export const ParallaxItem = ({ src, title, description, icon: Icon }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const contentTranslateY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div className="grid grid-cols-2 gap-20" ref={ref}>
      <motion.div
        className="flex flex-col items-start justify-center gap-2"
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale: scale,
        }}
      >
        <Icon className="text-3xl text-white" />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-neutral-500">{description}</p>
      </motion.div>
      <motion.div style={{ y: contentTranslateY, opacity }}>
        <img src={src} className="rounded-xl" />
      </motion.div>
    </motion.div>
  );
};
