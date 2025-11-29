// import { useState } from "react";

// const MovingCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setPosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   return (
//     <div
//       className="relative flex h-screen items-center justify-center bg-neutral-950"
//       onMouseMove={handleMouseMove}
//     >
//       <span
//         className="pointer-events-none absolute size-10 rounded-full bg-red-400 mix-blend-difference duration-300 ease-out"
//         style={{
//           left: position.x - 20 + "px",
//           top: position.y - 20 + "px",
//         }}
//       ></span>
//       {/* Stroke text (always visible) */}
//       {/* <h1
//         className="pointer-events-none absolute text-[170px] leading-none font-bold text-transparent"
//         style={{ WebkitTextStroke: ".3px white" }}
//       >
//         Pankaj
//       </h1> */}

//       {/* Filled text but masked (only visible inside the spotlight) */}
//       <h1
//         className="pointer-events-none absolute text-[170px] leading-none font-bold text-white"
//         style={{
//           WebkitMaskImage: `radial-gradient(250px at ${position.x}px ${position.y}px, white 25%, transparent 65%)`,
//           maskImage: `radial-gradient(250px at ${position.x}px ${position.y}px, white 25%, transparent 65%)`,
//         }}
//       >
//         Pankaj
//       </h1>
//     </div>
//   );
// };

// export default MovingCursor;
