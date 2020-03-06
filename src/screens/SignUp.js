import React from 'react';
import { StyleSheet, ScrollView, View,Text, Button, TextInput} from 'react-native';

export default function SignUp() {
  return (
    <ScrollView>
      <View style={styles.login}>
        <View style={styles.header}>
          <Text style={styles.label}>Enter your email and pasword to sign up!</Text>
        </View>
        <TextInput style={styles.email}
          autoCompleteType='email'
          placeholder="enter your email"
        >
        </TextInput>
        <TextInput style={styles.password}
          autoCompleteType='password'
          placeholder="enter your password"
          secureTextEntry={true}
          >
        </TextInput>
        <View style={styles.body}>

        </View>
        <Button title = "sign up">
        </Button>
      </View>
    </ScrollView>
  )
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
    height: 44

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
