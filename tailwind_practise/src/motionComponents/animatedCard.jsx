import { RxCrossCircled } from "react-icons/rx";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const AnimatedCard = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex h-screen w-full items-center justify-center bg-amber-50 dark:bg-neutral-900">
      <AnimatePresence>
        {open && (
          <motion.div
            className="relative min-h-[26rem] w-80 bg-white p-3 shadow-lg"
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          >
            <h1 className="mt-2 text-[20px] font-bold text-neutral-900">
              Aceternity
            </h1>
            <p className="mt-1 text-sm text-neutral-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate, eligendi.lorem30
            </p>

            <RxCrossCircled
              className="absolute top-3 right-3"
              fontSize={20}
              onClick={() => setOpen(!open)}
            />
            <motion.div className="mt-2 rounded-2xl bg-neutral-100">
              <motion.div
                className="grid flex-1 grid-rows-4 divide-neutral-400 rounded-lg border-[1px] border-neutral-400 p-2"
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
                whileHover={{ opacity: 1, filter: "blur(0px)", scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {" "}
                <div className="flex w-full items-center justify-center gap-2">
                  <FaReact fontSize={64} />
                  <div className="flex flex-col">
                    <h1 className="text-[15px] font-bold text-neutral-700">
                      React
                    </h1>
                    <p className="pb-[4px] text-[12px] text-neutral-600">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Enim, dignissimos?
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center gap-2">
                  <RiNextjsLine fontSize={64} />
                  <div className="flex flex-col">
                    <h1 className="text-[15px] font-bold text-neutral-700">
                      Next.js
                    </h1>
                    <p className="text-[12px] text-neutral-600">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Enim, dignissimos?
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center gap-2">
                  <RiTailwindCssFill fontSize={64} />
                  <div className="flex flex-col">
                    <h1 className="text-[15px] font-bold text-neutral-700">
                      Tailwind
                    </h1>
                    <p className="mt-0 text-[12px] text-neutral-600">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Enim, dignissimos?
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <IoAddCircleOutline fontSize={20} /> create new
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedCard;
