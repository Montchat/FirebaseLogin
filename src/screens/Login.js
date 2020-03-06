import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, Container } from 'react-native';

export default function Login() {
  return(
    <View style={styles.login}>
      <Text>Login</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  login: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }

});
