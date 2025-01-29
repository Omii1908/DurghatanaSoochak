export const sendSensorData = async (data) => {
    try {
      const response = await fetch('http://<YOUR_BACKEND_IP>:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accelerometer: [data.accelerometer.x, data.accelerometer.y, data.accelerometer.z],
          gyroscope: [data.gyroscope.x, data.gyroscope.y, data.gyroscope.z],
          latitude: data.latitude,
          longitude: data.longitude,
        }),
      });
      const result = await response.json();
      return result.is_accident;
    } catch (error) {
      console.error('API Error:', error);
      return false;
    }
  };