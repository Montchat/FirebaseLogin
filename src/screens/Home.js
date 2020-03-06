import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function Home({ navigation }) {

const login = () => {
  navigation.push('Login');

}

const signup = () => {
  navigation.push('SignUp');

}

    return (
      <View style = {styles.view}>
        <Text>welcome to firebase login</Text>
        <Button
          style={styles.button}
          title = 'login'
          onPress={login}
        />
        <Button
          style={styles.button}
          title = 'signup'
          onPress={signup}
        />
      </View>
    );
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
  },

  view: {
    flex: 1,
    backgroundColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
