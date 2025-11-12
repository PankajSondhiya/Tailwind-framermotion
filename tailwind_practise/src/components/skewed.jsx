import { useEffect } from "react";
import "../App.css";
import { easeInOut, motion } from "motion/react";
const SkewedPattern = () => {
  const handleThemeChange = () => {
    console.log("clicked");
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", currentTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <motion.div className="h-full w-full">
      <motion.div class="h-screen w-full bg-black bg-[repeating-linear-gradient(135deg,var(--color-neutral-900)_0px_1px,transparent_1px_10px)]"></motion.div>
      <motion.div className="group flex h-screen w-full items-center justify-center bg-black bg-[radial-gradient(var(--color-neutral-400)_1%,transparent_1%)] bg-size-[10px_10px] perspective-[1000px] transform-3d">
        <motion.button
          className="relative h-[40px] w-auto translate-z-34 rounded-lg bg-neutral-900 px-2 text-2xl font-bold"
          whileHover={{
            rotateX: 40,
            boxShadow: "0 30px 40px 1px var(--color-cyan-500)",
            translateZ: 60,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          Aceternity
          <motion.span className="absolute inset-x-0 bottom-0 mx-auto h-[1px] w-[95%] bg-linear-to-r from-transparent via-cyan-600 to-transparent"></motion.span>
        </motion.button>
      </motion.div>
      <div className="h-screen w-full bg-black"></div>
      {/* <div className="dark:bg-background flex h-screen w-full items-center justify-center bg-[radail-gradient(var(--color-neutral-400)_1%,transparent_1%)] bg-size-[20px_20px]">
        <div className="relative inset-0 flex h-[50px] w-[100px] items-center justify-center overflow-hidden border-0 bg-transparent p-1 shadow-2xl">
          <div className="absolute z-10 flex h-full w-full scale-[2.2] animate-spin items-center justify-center bg-neutral-600 bg-conic from-transparent via-green-500 via-10% to-transparent to-10% [animation-duration:2s]"></div>
          <div className="inset-0 z-40 h-full w-full bg-neutral-400 dark:bg-neutral-700"></div>
        </div>
        <div className="dark:text-foreground text-neutral-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
          vero mollitia facere obcaecati laboriosam iste sint voluptatibus
          accusamus iure esse ab saepe facilis perferendis corporis dolorem,
          dolorum alias quidem? Voluptates, veniam repudiandae consequuntur non
          vitae nulla molestiae omnis nesciunt consequatur quos sapiente, harum
          iure commodi, libero dolorum, veniam incidunt.
        </div>
        <button
          className="dark:text-text absolute right-2 bottom-2 flex h-[30px] w-[50px] cursor-pointer items-center justify-center rounded-xl bg-neutral-600 text-center text-sm font-bold tracking-normal text-neutral-950 active:scale-95"
          onClick={() => handleThemeChange()}
        >
          Light
        </button>
      </div> */}
    </motion.div>
  );
};

export default SkewedPattern;
