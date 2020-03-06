import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, TextInput} from 'react-native';

export default class SignUp extends Component {

  state = {
    email: '', password: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  signUp = async () => {
    const { email, password } = this.state;
    console.log('email: ', email);
    console.log('password: ', password)
    

  }

  render() {

  return (
    <ScrollView>
      <View style={styles.login}>
        <View style={styles.header}>
          <Text style={styles.label}>Enter your email and pasword to sign up!</Text>
        </View>
        <TextInput style={styles.email}
          autoCompleteType='email'
          placeholder="enter your email"
          onChangeText={val => this.onChangeText('email', val)}
        >
        </TextInput>
        <TextInput style={styles.password}
          autoCompleteType='password'
          placeholder="enter your password"
          secureTextEntry={true}
          onChangeText={val => this.onChangeText('password', val)}
          >
        </TextInput>
        <View style={styles.body}>
        </View>
        <Button title = "sign up"
        onPress={this.signUp}
        >
        </Button>
      </View>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({

  label: {
    textAlign: 'center'
  },

  header: {
    height: 150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },

  body: {
    height: 44
  },

  login: {
    justifyContent: 'center',
    alignItems: 'stretch',
    flex: 1
  },

  email: {
    textAlign: 'center',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 4,
    height: 44,

  },

  password: {
    textAlign: 'center',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 4,
    height: 44,

  }

});
