import React, {
  Component
} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Navigator from './src/LoginStack';

const Stack =  createStackNavigator();

function App() {
    return (
      <Navigator />
    );
}
export default App;
