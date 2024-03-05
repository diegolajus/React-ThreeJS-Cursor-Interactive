import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { motion, useAnimation } from 'framer-motion';

export default function Aims({ isStaringMiddle }) {
  const skull = useGLTF('./lowpoly_skull/scene.gltf');
  const ref = useRef();
  const targetPosition = useRef([0, 0, 0]);
  const controlsAnimation = useAnimation();

  useEffect(() => {
    controlsAnimation.start({
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    });
  }, [controlsAnimation]);

  useFrame(({ mouse, viewport }) => {
    if (isStaringMiddle) {
      // If isStaringMiddle is true, smoothly look at (0, 0, 0)
      targetPosition.current = [0, 0, 0];
    } else {
      // Otherwise, use mouse-based functionality
      const x = -(mouse.x * viewport.width) /10;
      const y = -(mouse.y * viewport.height) /10;
      targetPosition.current = [x, y, 5];
    }

    // Use linear interpolation to smooth the transition for rotation (Chat GPT helped a lot here)
    ref.current.rotation.x += (targetPosition.current[1] - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (-targetPosition.current[0] - ref.current.rotation.y) * 0.05;
  });

  return (
    <motion.mesh ref={ref} initial={{ scale: 0, opacity: 0 }} animate={controlsAnimation}>
      <primitive object={skull.scene} scale={1.5} rotation={[0, 0, 0]} />
    </motion.mesh>
  );
}
