import "../App.css";
const BackgroundBoxes = () => {
  const rows = Math.ceil(1500 / 30);
  const cols = Math.ceil(1500 / 30);

  const colors = [
    "hover:bg-red-400",
    "hover:bg-voilet-400",
    "hover:bg-pink-400",
    "hover:bg-blue-400",
    "hover:bg-green-400",
    "hover:bg-white",
    "hover:bg-yellow-400",
  ];

  const cells = Array.from(
    { length: rows * cols },
    (_, i) => colors[i % colors.length]
  );
  console.log(cells);

  return (
    <>
      <div className="h-screen w-screen bg-black flex justify-center items-center overflow-clip">
        <div className="h-[300px] w-[50%] bg-neutral-900 relative flex justify-center items-center  overflow-clip  ">
          <div className="flex relative ">
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] grid rotate-z-45 rotate-x-65 "
              style={{
                gridTemplateColumns: `repeat(${Math.ceil(1500 / 30)}, 30px)`,
              }}
            >
              {cells.map((hoverclass, i) => (
                <div
                  key={i}
                  className={`w-[30px] h-[30px] border-[1px] border-neutral-700 transition-all duration-75 ease-in-out ${hoverclass}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundBoxes;
