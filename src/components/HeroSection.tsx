import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { FaMicrochip, FaRobot, FaLaptopCode, FaCloud } from 'react-icons/fa';

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 1000;
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    particlePositions[i3] = (Math.random() - 0.5) * 30;
    particlePositions[i3 + 1] = (Math.random() - 0.5) * 30;
    particlePositions[i3 + 2] = (Math.random() - 0.5) * 30;
  }
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.025) * 0.1;
    }
  });
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#FF5722"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
};

const FloatingIcons = () => {
  const icons = [
    <FaMicrochip size={30} color="#FF5722" />,
    <FaRobot size={30} color="#FF5722" />,
    <FaLaptopCode size={30} color="#FF5722" />,
    <FaCloud size={30} color="#FF5722" />,
  ];
  return (
    <div className="absolute z-10 top-[15%] flex gap-8 animate-spin-slow">
      {icons.map((Icon, i) => (
        <div key={i} className="animate-pulse">{Icon}</div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #121212, #1a1a1a), url("/images/tech-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#FF5722" />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} color="#FF5722" />
          <ParticleField />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-2">
            <span className="text-[#FF5722] drop-shadow-[0_0_15px_#FF5722]">
              GOLDEN{' '}
              <span className="text-white drop-shadow-[0_0_15px_white]">Z</span>{' '}
              VISION
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl font-medium tracking-wide neon-white"
          >
            WORKING FOR GOOD REVOLUTION
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transforming ideas into reality with cutting-edge technology, immersive experiences, and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#services"
              className="px-8 py-3 rounded-md bg-[#FF5722] text-white font-medium hover:bg-[#E64A19] transition-all duration-300 animate-glow"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-md border border-white text-white font-medium hover:bg-white hover:text-[#121212] transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      <FloatingIcons />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-[#FF5722] to-transparent relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FF5722] rounded-full animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
