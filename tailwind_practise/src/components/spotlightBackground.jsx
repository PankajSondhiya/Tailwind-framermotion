import "../App.css";
const BeamBackground = () => {
  return (
    <div className="bg-black h-screen">
      <div
        className="h-screen relative
      bg-[linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)] bg-size-[50px_50px] bg-black flex items-center justify-center mask-radial-from-50% "
      >
        <h1 className="text-center text-7xl tracking-wide text-neutral-300 font-bold">
          Tailwind <br />
          <span className="text-6xl bg-linear-to-b from-neutral-300 to-neutral-700 text-transparent bg-clip-text">
            This is the new trend
          </span>
        </h1>
      </div>
      <div
        className="absolute -top-0   mask-r-from-50% -left-10 w-[1000px] h-55 rotate-z-35 mask-radial-from-50% blur-2xl  bg-linear-to-t from-transparent via-neutral-400 to-transparent opacity-50
    "
      ></div>
    </div>
  );
};

export default BeamBackground;
