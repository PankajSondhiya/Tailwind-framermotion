import { useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { LayoutGroup, motion } from "framer-motion";
import { CgPlayButtonO } from "react-icons/cg";
import { div } from "motion/react-client";

const Navbar = () => {
  const items = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];
  const playlist = [
    {
      id: 1,
      title: "Midnight Drive",
      artist: "Nova Waves",
      description:
        "A chill synthwave track perfect for late-night drives under neon lights.",
      duration: "3:42",
      poster:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2022/03/15/audio_4f10d7.mp3?filename=midnight-drive-1234.mp3",
      cta: {
        label: "Play Now",
        href: "https://open.spotify.com/track/example1",
      },
    },
    {
      id: 2,
      title: "Golden Horizon",
      artist: "Luna Fields",
      description:
        "An uplifting indie pop song that captures the warmth of a summer morning.",
      duration: "4:05",
      poster:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=800&auto=format&fit=crop",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2022/03/16/audio_3c1b89.mp3?filename=golden-horizon-5678.mp3",
      cta: {
        label: "Play Song",
        href: "https://open.spotify.com/track/example2",
      },
    },
    {
      id: 3,
      title: "Electric Pulse",
      artist: "DJ Vector",
      description:
        "A high-energy EDM banger with electrifying drops and pulsating beats.",
      duration: "2:58",
      poster:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2022/03/14/audio_7e5b76.mp3?filename=electric-pulse-9012.mp3",
      cta: {
        label: "Listen Now",
        href: "https://open.spotify.com/track/example3",
      },
    },
    {
      id: 4,
      title: "Fading Memories",
      artist: "Ava Sol",
      description:
        "A soft acoustic ballad reflecting on love, loss, and the passage of time.",
      duration: "3:33",
      poster:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2022/02/17/audio_1e8c3f.mp3?filename=fading-memories-3456.mp3",
      cta: {
        label: "Play Track",
        href: "https://open.spotify.com/track/example4",
      },
    },
    {
      id: 5,
      title: "City Lights",
      artist: "Echo District",
      description:
        "A smooth lo-fi hip-hop track inspired by urban nights and quiet thoughts.",
      duration: "3:21",
      poster:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2022/01/15/audio_6a5c31.mp3?filename=city-lights-7890.mp3",
      cta: {
        label: "Play Now",
        href: "https://open.spotify.com/track/example5",
      },
    },
  ];

  const [hovered, setHovered] = useState(null);
  const [currentcard, setCurrrentCard] = useState(null);

  return (
    <div className="h-screen w-full bg-neutral-200 pt-3">
      <div className="mx-auto mt-3 flex h-auto max-w-4xl items-center justify-between rounded-4xl bg-neutral-400/20 px-10 py-1 shadow-lg">
        <div className="flex items-start justify-center gap-2 rounded-full">
          <GrTechnology fontSize={20} />
        </div>
        <div className="relative flex items-center justify-between">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative cursor-pointer rounded-2xl px-2 py-1 text-[14px] font-semibold text-neutral-800"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === index && (
                <motion.div
                  layoutId="underline"
                  className="absolute inset-0 z-0 h-full w-full rounded-lg bg-neutral-700"
                />
              )}
              <motion.span
                className="relative z-10 group-hover:text-neutral-100"
                inital={false}
                animate={{
                  color:
                    hovered === index
                      ? "var(--color-neutral-300)"
                      : "var(--color-neutral-800)",
                }}
                transition={{ duration: 0.3 }}
              >
                {item.name}
              </motion.span>
            </a>
          ))}
        </div>
      </div>

      <div className="relative mt-10 flex items-center justify-center bg-neutral-200 p-5">
        <LayoutGroup>
          <motion.div className="grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {playlist.map((track) => (
              <motion.div
                layoutId={`trackCard-${track.id}`}
                onClick={() => setCurrrentCard(track)}
                key={track.id}
                className="rounded-lg bg-neutral-100 p-1 shadow-lg"
              >
                <img
                  src={track.poster}
                  className="rounded-sm mask-b-from-50%"
                />
                <motion.div className="flex items-center justify-between">
                  <h3 className="mt-2 inline-block text-sm text-neutral-800">
                    {track.title}
                  </h3>
                  <button className="cursor-pointer">
                    <CgPlayButtonO
                      fontSize={20}
                      className="transition-all duration-300 hover:scale-110"
                    />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {currentcard && (
            <motion.div
              className="absolute inset-x-0 z-20 mx-auto flex h-auto w-80 flex-col items-center rounded-lg bg-neutral-200 p-1 shadow-lg"
              layoutId={`trackCard-${currentcard.id}`}
            >
              <motion.img
                src={currentcard.poster}
                className="aspect-square h-40 w-full rounded-lg object-cover"
              />
              <h4 className="mt-3 w-full px-1 text-[15px] font-semibold text-neutral-700">
                {currentcard.title}
              </h4>
              <motion.p
                className="mt-1 p-1 text-[10px] text-neutral-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: "0.3" }}
              >
                {currentcard.description}
              </motion.p>
            </motion.div>
          )}
        </LayoutGroup>
        {currentcard && (
          <div
            className="fixed inset-0 z-10 h-screen w-full bg-neutral-500/50 backdrop-blur-sm"
            onClick={() => setCurrrentCard(null)}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
