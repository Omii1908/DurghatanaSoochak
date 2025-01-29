import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AccidentScreen from './screens/AccidentScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accident Detection' }} />
        <Stack.Screen name="Accident" component={AccidentScreen} options={{ title: 'Accident Detected!' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}