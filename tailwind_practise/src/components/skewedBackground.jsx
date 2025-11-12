import "../App.css";

const SkewedBackground = () => {
  return (
    <>
      <div className="w-full h-screen bg-black">
        <div className="w-full h-screen bg-black relative overflow-clip mask-radial-from-50% flex justify-center items-center">
          <div className="absolute z-0  bg-black bg-[linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)] bg-size-[40px_40px] rotate-x-15 h-[300vh] rotate-z-45 w-[300vw] "></div>
          <div className="z-10  relative flex justify-center">
            <div className="text-[100px] font-bold  bg-linear-to-b from-neutral-300 to-neutral-800 z-10 bg-clip-text text-transparent">
              Aceternity
            </div>
            <div className="absolute bottom-5 z-10 bg-linear-to-r from-transparent via-indigo-800 to-transparent h-0.5 w-[80%] "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkewedBackground;
