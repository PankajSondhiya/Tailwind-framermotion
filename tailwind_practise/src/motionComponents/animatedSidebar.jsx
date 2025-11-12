import { Children, useState } from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import { motion } from "motion/react";
import { BiLeftArrowCircle } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const AnimatedSideBar = () => {
  const [open, setOpen] = useState(true);
  const sideBarVariants = {
    open: {
      width: "15rem",
    },
    closed: {
      width: "3.5rem",
    },
  };
  const ChildVariant = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };
  const parentVariant = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
    closed: { transition: { staggerChildren: 0.07, staggerDirection: -1 } },
  };
  return (
    <>
      <div className="h-screen w-full bg-amber-50">
        <motion.div
          className="flex h-full w-full flex-col"
          initial={false}
          exit={"closed"}
          animate={open ? "open" : "closed"}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {" "}
          <motion.div
            className="h-full border-b-[1px] border-neutral-500 border-r-neutral-400 bg-neutral-200 py-3"
            variants={sideBarVariants}
          >
            <motion.div
              className="flex w-full cursor-pointer justify-end border-b-[1px] border-neutral-400 px-2 pb-3"
              onClick={() => setOpen(!open)}
            >
              <BiLeftArrowCircle fontSize={25} className="shadow-lg" />
            </motion.div>
            <motion.div
              className="mt-10 flex flex-col items-start justify-center gap-2 px-3 text-2xl text-neutral-600"
              variants={parentVariant}
            >
              {" "}
              <motion.div variants={ChildVariant} className="flex items-center">
                <IoHomeOutline fontSize={25} />
                <motion.span className="ml-2 text-[20px] text-neutral-500">
                  Home
                </motion.span>
              </motion.div>
              <motion.div variants={ChildVariant} className="flex items-center">
                <IoAnalytics fontSize={25} />
                <motion.span className="ml-2 text-[20px] text-neutral-500">
                  Analytics
                </motion.span>
              </motion.div>
              <motion.div variants={ChildVariant} className="flex items-center">
                <AiOutlineUserSwitch fontSize={25} />
                <motion.span className="ml-2 text-[20px] text-neutral-500">
                  Users
                </motion.span>
              </motion.div>
              <motion.div variants={ChildVariant} className="flex items-center">
                <IoSettingsOutline fontSize={25} />
                <motion.span className="ml-2 text-[20px] text-neutral-500">
                  Setting
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="flex h-full flex-1 bg-neutral-200"></div>
        </motion.div>
      </div>
    </>
  );
};

export default AnimatedSideBar;
