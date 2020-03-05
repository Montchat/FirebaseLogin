import React, { Component } from 'react';
import { StyleSheet, View, Text, Container } from 'react-native';

class Button extends Component {
  render() {
    return (
      <View>
      <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default Button;
