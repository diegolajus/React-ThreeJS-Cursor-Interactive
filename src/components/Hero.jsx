import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Aims from "./canvas/Aims";


const Hero = () => {

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

  return (
    <section className={`relative w-full h-screen mx-auto border border-gray-700 `}>
      <motion.div variants={canvasVariants} initial="hidden" animate="visible">
        <Canvas style={{ position: "absolute" }} camera={{ position: [0, 0, 6] }}>
          <directionalLight position={[0, 0, 1]} />
          <Aims position={[0, 0, 0]} />
        </Canvas>
      </motion.div>
    </section>
  );
};

export default Hero;
