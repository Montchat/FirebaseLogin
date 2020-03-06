import React, {
  Component
} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

function Login() {
  return (
    <Login />
  );
}

const Stack =  createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name = "Welcome" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default App;
