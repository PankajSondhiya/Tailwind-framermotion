import { easeIn, easeInOut, easeOut, motion } from "motion/react";
import { products } from "../assets/imges";
import { useState } from "react";

const LayoutAnimation = () => {
  const [productsList, setPrductsList] = useState(products);
  const [active, setActive] = useState(null);

  function handleSort(sortType) {
    const sorted = [...productsList];

    switch (sortType) {
      case "id":
        sorted.sort((a, b) => a.id - b.id);
        break;

      case "title":
        sorted.sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
        );
        break;

      default:
        break;
    }

    setPrductsList(sorted);
  }

  return (
    <motion.div className="relative min-h-screen w-full bg-black py-40">
      <motion.div className="mx-auto flex h-auto max-w-7xl flex-col justify-start gap-3 rounded-2xl bg-neutral-900 px-10 py-20">
        <motion.div className="top-10 left-15 mb-10 flex items-center justify-start gap-3 rounded-lg">
          <h1 className="px-2 text-lg font-bold text-neutral-500">Sort by</h1>
          <button
            className="cursor-pointer rounded-lg bg-neutral-600 px-2 py-1 text-white"
            onClick={() => handleSort("id")}
          >
            Id
          </button>

          <button
            className="cursor-pointer rounded-lg bg-neutral-600 px-2 py-1 text-white"
            onClick={() => handleSort("title")}
          >
            Name
          </button>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-5 rounded-lg"
          layout
        >
          {productsList.map((item) => (
            <motion.div
              className="group h-96 w-70 cursor-pointer flex-col items-center justify-center rounded-lg bg-neutral-900 p-3"
              key={item.id}
              layout
              layoutId={`card-${item.id}`}
              transition={{ duration: 0.8, ease: easeOut }}
              onClick={() => setActive(item)}
            >
              <motion.div className="h-[70%] w-full overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  className="inline-block h-full w-full rounded-xl transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </motion.div>

              <motion.h2 className="mt-2 text-lg text-neutral-300">
                {item.title}
              </motion.h2>

              <motion.p className="text-justify text-sm text-neutral-500">
                {" "}
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {active && (
        <div
          className="fixed inset-0 flex h-screen w-full items-center justify-center bg-neutral-600/30 backdrop-blur-lg"
          onClick={() => setActive(null)}
        >
          {" "}
          <motion.div
            className="group h-[500px] w-[300px] cursor-pointer flex-col items-center justify-center rounded-lg bg-neutral-900 p-3"
            key={active.id}
            layout
            layoutId={`card-${active.id}`}
          >
            <motion.div className="h-[70%] w-full overflow-hidden rounded-xl">
              <img
                src={active.image}
                className="inline-block h-full w-full rounded-xl transition-all duration-300 ease-in-out group-hover:scale-110"
              />
            </motion.div>

            <motion.h2 className="mt-2 text-lg text-neutral-300">
              {active.title}
            </motion.h2>

            <motion.p className="text-justify text-sm text-neutral-500">
              {active.description.split(" ").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    y: -10,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: easeInOut,
                    delay: index * 0.09,
                  }}
                >
                  {char + " "}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default LayoutAnimation;
