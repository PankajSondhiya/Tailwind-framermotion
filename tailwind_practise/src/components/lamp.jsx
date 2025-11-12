const Lamp = () => {
  return (
    <>
      <div className="justi flex min-h-[100vh] w-full flex-col items-center justify-center bg-black">
        {/* <h1 className="relative z-10 text-center text-9xl font-bold tracking-wide text-neutral-200 after:absolute after:inset-x-0 after:-bottom-1 after:-z-10 after:h-1 after:w-full after:bg-linear-to-r after:from-transparent after:from-10% after:via-red-600 after:to-transparent after:to-90% after:content-['']">
          {" "}
          Aceternity
        </h1> */}
        <div className="h-2 w-[400px] rounded-xl bg-cyan-500 shadow-[0_0_50px_50px_var(--color-cyan-500)]"></div>
      </div>
    </>
  );
};

export default Lamp;
