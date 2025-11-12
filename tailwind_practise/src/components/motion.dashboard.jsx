import { useState } from "react";
import { FaRegArrowAltCircleLeft, FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { motion } from "motion/react";

const MotionDashboard = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);

  const sideBarVariants = {
    open: { width: "12rem" },
    closed: { width: "3rem" },
  };

  const childVariants = {
    open: { opacity: 1, y: 10 },
    closed: { opacity: 0, y: -10 },
  };
  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const menuItems = [
    { icon: <FaHome fontSize={20} />, label: "Home" },
    { icon: <MdDashboard fontSize={20} />, label: "Dashboard" },
    { icon: <RiContactsBook3Fill fontSize={20} />, label: "Contact" },
    { icon: <IoMdSettings fontSize={20} />, label: "Setting" },
  ];

  return (
    <motion.div
      className="flex h-screen w-screen bg-black"
      initial={false}
      animate={sidebarOpen ? "open" : "closed"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        className="h-screen flex-shrink-0 bg-neutral-300"
        variants={sideBarVariants}
      >
        <div className="mt-2 flex justify-end bg-amber-700/50 px-1 py-2 text-xl text-neutral-800">
          <FaRegArrowAltCircleLeft
            onClick={() => setSideBarOpen(!sidebarOpen)}
            className={`${sidebarOpen ? "rotate-0" : "rotate-180"} cursor-pointer transition-transform duration-1000 ease-in-out`}
          />
        </div>

        <motion.div
          className="flex flex-col items-start justify-center gap-5 p-4 text-neutral-800"
          variants={parentVariants}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 text-sm"
              variants={childVariants}
            >
              {item.icon}
              {sidebarOpen && item.label}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="h-screen flex-1 bg-neutral-300 p-4"></div>
    </motion.div>
  );
};

export default MotionDashboard;
