import React from 'react';
import { useFrame } from '@react-three/fiber/native';

export default function SensorVisualization({ sensorData }) {
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = sensorData.x;
      meshRef.current.rotation.y = sensorData.y;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}