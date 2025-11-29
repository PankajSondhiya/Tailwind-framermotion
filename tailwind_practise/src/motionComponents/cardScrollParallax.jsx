import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { SiClarifai } from "react-icons/si";

const CardScrollParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <motion.div
        className="mt-[50vh] mb-[100vh] min-h-screen w-[100%]"
        ref={container}
      >
        {images &&
          images.map((item, index) => {
            const targetScale = 1 - (images.length - index) * 0.05;
            return (
              <CardItems
                item={item}
                index={index}
                target={targetScale}
                range={[index * 0.25, 1]}
                progress={scrollYProgress}
              />
            );
          })}
      </motion.div>
    </>
  );
};

export default CardScrollParallax;

export const CardItems = ({ item, index, target, range, progress }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const scaleImg = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, target]);
  return (
    <motion.div
      className="sticky top-0 mx-auto flex h-[100vh] max-w-4xl items-center justify-center rounded-xl"
      key={index}
      ref={ref}
      style={{
        top: `calc(-10% + ${index * 30}px)`,
        scale,
      }}
    >
      <motion.div className="flex h-[300px] w-3xl items-center justify-center gap-2 divide-x divide-neutral-700 rounded-xl bg-neutral-900 p-4">
        <motion.div className="h-full w-[50%] overflow-hidden">
          <motion.img
            src={item?.src}
            className="h-full w-full rounded-xl object-cover"
            style={{
              scale: scaleImg,
            }}
          />
        </motion.div>
        <motion.div className="h-full w-[50%] p-3">
          <h1 className="text-bold mb-3 text-left text-2xl text-white">
            {item.title}
          </h1>{" "}
          <p className="text-left text-neutral-500"> {item?.desc}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const images = [
  {
    id: 1,
    src: "https://picsum.photos/id/1015/600/900",
    title: "Misty Mountain",
    desc: "Fog drifting through a rugged mountain valley at dawn, soft light and deep atmosphere.",
  },
  {
    id: 2,
    src: "https://picsum.photos/id/1016/900/600",
    title: "Coastal Sunset",
    desc: "Warm sunset over a rocky coastline with waves breaking and golden reflections on wet stones.",
  },
  {
    id: 3,
    src: "https://picsum.photos/id/1027/600/800",
    title: "Forest Path",
    desc: "A quiet woodland trail lined with tall trees and dappled sunlight — calm and inviting.",
  },
  {
    id: 4,
    src: "https://picsum.photos/id/1035/800/600",
    title: "City Evening",
    desc: "Urban street glimmering with evening lights; a cinematic, moody cityscape.",
  },
  {
    id: 5,
    src: "https://picsum.photos/id/1043/600/600",
    title: "Patterned Tiles",
    desc: "Geometric floor tiles photographed from above, highlighting textures and repeating patterns.",
  },
  {
    id: 6,
    src: "https://picsum.photos/id/1056/700/900",
    title: "Desert Dunes",
    desc: "Sweeping sand dunes under a wide sky, showing elegant curves and warm tones.",
  },
];

export const shuttleColorCodes = [
  "#D5FF00", // Neon Yellow
  "#FF6600", // Orange
  "#4FC3F7", // Blue
  "#32FF6A", // Neon Green
  "#FF4DB8", // Pink
  "#FF2E2E", // Fluorescent Red
];
