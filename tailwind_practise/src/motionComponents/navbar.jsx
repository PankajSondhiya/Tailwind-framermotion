import { useState } from "react";
import { SiPlausibleanalytics } from "react-icons/si";
import { motion } from "motion/react";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  const handleMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1517816428104-797678c7cf0c",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    },
  ];
  const glowingColors = [
    "#ff007f", // Neon Pink
    "#00e5ff", // Electric Cyan
    "#39ff14", // Neon Green
    "#ffea00", // Neon Yellow
    "#ff5f1f", // Neon Orange
    "#7f00ff", // Neon Purple
    "#ff00ff", // Magenta
    "#00ffcc", // Aqua Glow
    "#ff1493", // Deep Pink Glow
    "#00ff6a", // Lime Glow
  ];

  return (
    <>
      <div
        className="relative flex min-h-screen w-full justify-center bg-neutral-800"
        onMouseMove={handleMove}
      >
        <div className="absolute h-[20px] w-[200px] -translate-y-[50%] rounded-full border-2 border-amber-100 bg-amber-50 blur-xl"></div>
        <div className="fixed mt-10 flex h-auto items-center justify-between rounded-full bg-neutral-950/20 px-5 py-1 sm:w-[60%]">
          <div className="">
            <SiPlausibleanalytics fontSize={20} color="white" />
          </div>
          <div className="flex items-center justify-between">
            {navItems &&
              navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="relative flex items-center justify-center px-4 text-white transition-all duration-300 ease-out"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <motion.span
                    className="relative z-20"
                    animate={{
                      color: hovered === index ? "black" : "white",
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    {item.name}
                  </motion.span>
                  {hovered === index && (
                    <motion.div
                      className="absolute z-0 h-full w-full rounded-full bg-neutral-100"
                      layoutId="hover"
                    ></motion.div>
                  )}
                </a>
              ))}
          </div>
        </div>

        <div className="mx-auto mt-40 max-w-4xl columns-1 gap-4 space-y-4 rounded-xl p-1 sm:columns-2 lg:columns-3">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl p-2"
              style={{
                border: `.5px solid ${glowingColors[index % glowingColors.length]}`,
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                scale: [1, 1.02, 1], // <-- nudge
              }}
              transition={{
                duration: 2,

                repeatType: "reverse",
                delay: index * 0.2,
              }}
            >
              <motion.img
                src={img.src}
                className={`w-full rounded-lg border-[1px] object-cover transition-all duration-300 ease-in-out hover:scale-115`}
                alt=""
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
