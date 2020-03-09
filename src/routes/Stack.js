import React, { Component } from 'react';
import { NavigationActions, StackNavigator } from '@react-navigation';
import Home from '../src/screens/Home';
import Login from '../src/screens/Login';
import SignUp from '../src/screens/SignUp';
import Main from '../src/screens/Main';
import Loading from '../src/screens/Loading';


const WeLoggedIn = StackNavigator({
  Home: {
    screen: Home

  }

});

export const NavigationStack = StackNavigator({
  Loading: {
    screen: Loading
  },
  SignUp: {
    screen: SignUp
  },
  Login: {
    screen: Login
  },
  Main: {
    screen: Main
  }
});

const INITIAL_STATE = NavigationStack.router.getStateForAction(NavigationActions.init())
