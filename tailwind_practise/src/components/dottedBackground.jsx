import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
const DottedBackground = () => {
  const handleClick = () => {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", currentTheme);
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-neutral-300 bg-radial-[var(--color-neutral-400)_1px,transparent_1px] bg-size-[20px_20px] dark:bg-neutral-900">
      <div className="h-110 min-h-100 w-70 bg-neutral-300 shadow-xl shadow-neutral-600 dark:bg-neutral-800">
        {" "}
        <div className="flex h-1/2 w-full items-center justify-center gap-4 mask-radial-from-10% px-10">
          <div className="animate-marquee flex items-center justify-between gap-3">
            <GrReactjs fontSize={50} color="var(--color-neutral-500)" />
            <TbBrandNextjs fontSize={50} color="var(--color-neutral-500)" />
            <RiTailwindCssFill fontSize={50} color="var(--color-neutral-500)" />
            <FaCss3 fontSize={50} color="var(--color-neutral-500)" />
          </div>
        </div>
        <div className="h-1/2 w-full">
          <h1 className="ml-3 text-xl text-neutral-400">
            Tailwind animate example
          </h1>
          <p className="ml-3 text-sm text-neutral-500 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            sequi magnam quo quia tempora error, neque incidunt consequatur
            alias vitae enim minus commodi porro rem deserunt ut similique.
            Totam, maxime?
          </p>
          <button
            className="bold mt-3 ml-3 cursor-pointer rounded-lg bg-black px-4 py-3 text-neutral-400 duration-200 hover:bg-neutral-600 hover:text-black active:scale-98"
            onClick={() => handleClick()}
          >
            switch
          </button>
        </div>
      </div>
    </div>
  );
};

export default DottedBackground;
