import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Main, SignUp } from './src/screens';

const AuthStack = createStackNavigator();

export default class App extends Component {
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name ="Login" component={Login} />
      <AuthStack.Screen name ="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  </NavigationContainer>

}
