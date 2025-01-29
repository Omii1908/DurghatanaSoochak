import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accelerometer, Gyroscope } from 'expo-sensors';
import { Canvas } from '@react-three/fiber/native';
import SensorVisualization from '../components/SensorVisualization';
import * as Location from 'expo-location';

export default function HomeScreen({ navigation }) {
  const [accData, setAccData] = useState({ x: 0, y: 0, z: 0 });
  const [gyroData, setGyroData] = useState({ x: 0, y: 0, z: 0 });
  const [location, setLocation] = useState(null);

  // Fetch sensor data
  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    Gyroscope.setUpdateInterval(1000);

    const accSubscription = Accelerometer.addListener(setAccData);
    const gyroSubscription = Gyroscope.addListener(setGyroData);

    // Fetch GPS location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();

    return () => {
      accSubscription.remove();
      gyroSubscription.remove();
    };
  }, []);

  // Detect accident
  useEffect(() => {
    const threshold = 2.5; // Adjust based on testing
    if (Math.abs(accData.x) > threshold || Math.abs(accData.y) > threshold || Math.abs(accData.z) > threshold) {
      navigation.navigate('Accident', { location });
    }
  }, [accData]);

  return (
    <View style={styles.container}>
      <Text>Accelerometer: {JSON.stringify(accData)}</Text>
      <Text>Gyroscope: {JSON.stringify(gyroData)}</Text>
      <Canvas style={{ height: 300, width: '100%' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SensorVisualization sensorData={accData} />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});