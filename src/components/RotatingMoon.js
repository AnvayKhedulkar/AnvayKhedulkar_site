import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function RotatingMoon({ scrollY }) {
  const moonRef = useRef();

  // Rotate the moon based on scroll
  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y = scrollY / 500; // Adjust for rotation speed
    }
  });

  return (
    <>

      {/* Moon mesh */}
      <mesh ref={moonRef} position={[0, 1.7, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#FFFFFF" /> {/* Base color for the moon */}

        {/* Adding craters around the moon */}
        {/* Front-facing craters */}
        <mesh position={[0.3, 0.2, 0.9]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#b0b0b0" />
        </mesh>
        <mesh position={[-0.5, 0.4, 0.8]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#a0a0a0" />
        </mesh>
        <mesh position={[-0.3, -0.2, 0.95]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#c0c0c0" />
        </mesh>

        {/* Left side craters */}
        <mesh position={[-0.9, 0.2, 0.4]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#b0b0b0" />
        </mesh>
        <mesh position={[-0.7, -0.5, 0.5]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#a0a0a0" />
        </mesh>

        {/* Right side craters */}
        <mesh position={[0.9, -0.2, 0.4]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#b0b0b0" />
        </mesh>
        <mesh position={[0.6, 0.4, -0.5]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#a0a0a0" />
        </mesh>


        {/* Back-facing craters */}
        <mesh position={[0.5, 0.1, -0.9]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#b0b0b0" />
        </mesh>
        <mesh position={[-0.4, 0.3, -0.8]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#a0a0a0" />
        </mesh>
        <mesh position={[-0.2, -0.2, -0.95]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#c0c0c0" />
        </mesh>
        <mesh position={[-0.9, 0.0, -0.5]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#b0b0b0" />
        </mesh>
        <mesh position={[0.7, -0.5, -0.6]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#a0a0a0" />
        </mesh>
      </mesh>

      {/* Lighting for better shading */}
      <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <ambientLight intensity={0.3} />
    </>
  );
}
