import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Main from './src/screens/Main';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Loading from './src/screens/Loading';
import Navigator from './src/routes/Drawer'
import About from './src/screens/About';

const AuthContext = React.createContext();

const MainStack = createDrawerNavigator({
  Main: Main,
  About: About

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
