import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function AccidentScreen({ route }) {
  const { location } = route.params;

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      mapType="hybrid"
    >
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        title="Accident Detected"
        pinColor="red"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: { flex: 1 },
});