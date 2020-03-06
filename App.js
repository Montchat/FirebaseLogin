import React, {
  Component
} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Navigator from './src/routes/LoginStack';

export default class App extends Component {
  render() {
    return (
      <Navigator />

    );
  }
}
