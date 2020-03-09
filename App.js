import React { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from firebase;
import Main from './src/screens/Main';
import Home from './src/screens/Home';
import Login from '.src/screens/Login';

const AuthContext = React.createContext();

const MainStack = createStackNavigator({
  Main: Main

});

export default class App extends React.Component {
  state = {loggedIn: null}
  componentDidMount() {
    firebase.initialzeApp();

    firebase.auth().onAuthStateChange((user)) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    }
  }
};

export default createAppContainer(
  createSwitchNavigator( {
    Loading: "Loading",
    Home: "Home",
    Login: "Login"
  }, {
    initialRoutingName: "Loading"
  })
);
