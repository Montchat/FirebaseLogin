import React, { Component } from 'react';
import { StyleSheet, View, Text, Container } from 'react-native';

class Button extends Component {
  render() {
    return (
      <View style={styles.button}>
      <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 44,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    margin: 8,
    borderRadius: 10,
  }

});

export default Button;
