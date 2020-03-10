import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default class About extends Component {

  render() {
    return (
      <View styles={styles.container}>
        <Text>About Screen</Text>
      </View>

    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
