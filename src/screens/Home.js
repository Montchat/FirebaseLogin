import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Home({ navigation }) {

const login = () => {
  navigation.push('Login');

}

const signup = () => {
  navigation.push('SignUp');

}
    return (
      <View style = {styles.view}>
        <Text style={styles.label}>
        welcome to {'\n\n'}JUUL!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={login}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={signup}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({

  label: {
    textAlign: 'center',
    marginVertical: 32
  },

  button: {
    height: 44,
    backgroundColor: '#1E6738',
    color: 'white',
    width: 150,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',

  },

  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
