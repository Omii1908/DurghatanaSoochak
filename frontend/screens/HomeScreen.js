import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accelerometer, Gyroscope } from 'expo-sensors';
import { Canvas } from '@react-three/fiber/native';
import SensorVisualization from '../components/SensorVisualization';
import * as Location from 'expo-location';
import { sendSensorData } from '../services/api';

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
    if (location) {
      sendSensorData({
        accelerometer: accData,
        gyroscope: gyroData,
        latitude: location.latitude,
        longitude: location.longitude,
      }).then((isAccident) => {
        if (isAccident) {
          navigation.navigate('Accident', { location });
        }
      });
    }
  }, [accData, location]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accelerometer: {JSON.stringify(accData)}</Text>
      <Text style={styles.text}>Gyroscope: {JSON.stringify(gyroData)}</Text>
      <Text style={styles.text}>
        GPS: {location ? `${location.latitude}, ${location.longitude}` : 'Loading...'}
      </Text>
      <Canvas style={styles.canvas}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SensorVisualization sensorData={accData} />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f0f0' },
  text: { fontSize: 16, marginBottom: 10 },
  canvas: { height: 300, width: '100%', marginTop: 20 },
});