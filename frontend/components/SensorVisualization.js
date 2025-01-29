import React from 'react';
import { useFrame } from '@react-three/fiber/native';

export default function SensorVisualization({ sensorData }) {
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = sensorData.y * 2; // Rotate based on accelerometer
      meshRef.current.rotation.y = sensorData.x * 2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}