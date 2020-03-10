import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/screens/Main';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Loading from './src/screens/Loading';

const AuthContext = React.createContext();

const MainStack = createStackNavigator({
  Main: Main

});

const LoginStack = createStackNavigator({
  Home: Home,
  Login: Login,
  SignUp: SignUp

});

export default createAppContainer(
  createSwitchNavigator( {
    Loading: Loading,
    Main: MainStack,
    Login: LoginStack
  }, {
    initialRouteName: "Loading"
  })
);
