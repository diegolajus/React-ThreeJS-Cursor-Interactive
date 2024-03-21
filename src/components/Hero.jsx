// Hero.jsx
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Aims from "./canvas/Aims";
import { useEffect, useState } from "react";
import { BUTTONS_DATA, DIVS_DATA, PROJECTS_DATA } from '../constants/index.js';
import '../components/Button.css'


const Hero = () => {
  const [isStaringMiddle, setIsStaringMiddle] = useState(false);

  useEffect(() => {
    console.log(isStaringMiddle);
  }, [isStaringMiddle]);

  const canvasVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const handleMouseEnter = () => {
    setIsStaringMiddle(true);
  };

  const handleMouseLeave = () => {
    setIsStaringMiddle(false);
  };

  const calculateButtonPosition = (index, totalButtons) => {
    const buttonHeight = 80; // Adjust this value based on your button size
    const y = index * buttonHeight;
    return { x: 0, y };
  };

  return (
    <section className={`relative w-full h-screen mx-auto border border-gray-700 `}>
      <div
        className="sections-container">
        <div className="section1">
          {DIVS_DATA.map((button, index) => {
            const { x, y } = calculateButtonPosition(index, DIVS_DATA.length);
            return (
              <button
                className="button"
                key={button.id}
                onClick={() => alert(`${button.label} clicked`)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {button.label}
              </button>
            );
          })}
        </div>


        <div className="section2">
          {PROJECTS_DATA.map((button, index) => {
            const { x, y } = calculateButtonPosition(index, PROJECTS_DATA.length);
            return (
              <button
                className="button"
                key={button.id}
                onClick={() => alert(`${button.label} clicked`)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {button.label}
              </button>
            );
          })}
        </div>

        <div className="section3">
          {BUTTONS_DATA.map((button, index) => {
            const { x, y } = calculateButtonPosition(index, PROJECTS_DATA.length);
            return (
              <button
                key={button.id}
                className="button"
                onClick={() => alert(`${button.label} clicked`)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {button.label}
              </button>
            );
          })}
        </div>

      </div>

      <motion.div variants={canvasVariants} initial="hidden" animate="visible">
        <Canvas style={{ position: "absolute" }} camera={{ position: [0, 0, 6] }}>
          <directionalLight position={[0, 0, 1]} />
          <Aims isStaringMiddle={isStaringMiddle} position={[0, 0, 0]} />
        </Canvas>
      </motion.div>
    </section>
  );
};

export default Hero;


