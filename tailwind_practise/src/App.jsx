import "./App.css";

import BeamBackground from "./components/spotlightBackground";
import SkewedBackground from "./components/skewedBackground";
import BackgroundBoxes from "./components/backgroundBoxes";
import Form from "./components/form";
import SvgAnimation from "./components/svgAnimation";
import SVGlines from "./components/svgLines";
import DottedBackground from "./components/dottedBackground";
import Grid, { Card } from "./components/grid";
import AnimatedButton from "./motionComponents/animatedButton";
import AnimatedCard from "./motionComponents/animatedCard";
import AnimatedSideBar from "./motionComponents/animatedSidebar";
import Parallax from "./motionComponents/parallax";
import Lamp from "./components/lamp";
import SkewedPattern from "./components/skewed";
import MotionDashboard from "./components/motion.dashboard";
import TextAnimation from "./motionComponents/textAnimation";
import AnimationSequenceButton from "./motionComponents/animationSequence";
import Testimonial from "./motionComponents/TestimonialComponents";
// import MovingCursor from "./motionComponents/followCursor";
import MaskEffect from "./motionComponents/maskEffect";
import Navbar from "./motionComponents/navbar";
import CardScrollParallax from "./motionComponents/cardScrollParallax";
import { LayoutGroup } from "motion/react";
import LayoutAnimation from "./motionComponents/layout";

function App() {
  return (
    <div className="h-screen min-h-screen w-[100%]">
      {/* <SkewedBackground />
      <BackgroundBoxes />

      <SvgAnimation />
      {/* <SVGlines /> */}
      {/* <DottedBackground /> */}
      {/* <Grid /> */}
      {/* <AnimatedButton /> */}

      {/* <AnimatedSideBar /> */}
      {/* <Parallax /> */}
      {/* <Form /> */}
      {/* <Lamp /> */}
      {/* <SkewedPattern /> */}
      {/* <MotionDashboard /> */}
      {/* <Parallax /> */}

      {/* <TextAnimation /> */}
      {/* <Testimonial /> */}
      {/* <MovingCursor /> */}
      {/* <MaskEffect /> */}
      {/* <Navbar /> */}
      {/* <CardScrollParallax /> */}
      <LayoutAnimation />
    </div>
  );
}

export default App;
