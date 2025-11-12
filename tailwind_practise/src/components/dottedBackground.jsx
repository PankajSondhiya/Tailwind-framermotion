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
    <div className="bg-neutral-300  h-screen w-screen bg-radial-[var(--color-neutral-400)_1px,transparent_1px] bg-size-[20px_20px] flex justify-center items-center dark:bg-neutral-900">
      <div className=" min-h-100 h-110 w-70 shadow-xl  shadow-neutral-600 bg-neutral-300 dark:bg-neutral-800">
        {" "}
        <div className="h-1/2 w-full flex items-center justify-center px-10 gap-4  mask-radial-from-10% ">
          <div className="flex items-center justify-between gap-3 animate-marquee">
            <GrReactjs fontSize={50} color="var(--color-neutral-500)" />
            <TbBrandNextjs fontSize={50} color="var(--color-neutral-500)" />
            <RiTailwindCssFill fontSize={50} color="var(--color-neutral-500)" />
            <FaCss3 fontSize={50} color="var(--color-neutral-500)" />
          </div>
        </div>
        <div className="h-1/2 w-full">
          <h1 className="text-xl text-neutral-400 ml-3">
            Tailwind animate example
          </h1>
          <p className="text-sm text-neutral-500 ml-3 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            sequi magnam quo quia tempora error, neque incidunt consequatur
            alias vitae enim minus commodi porro rem deserunt ut similique.
            Totam, maxime?
          </p>
          <button
            className="bg-black text-neutral-400 px-4 py-3 rounded-lg ml-3 mt-3 hover:bg-neutral-600 hover:text-black duration-200 cursor-pointer active:scale-98 bold"
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
