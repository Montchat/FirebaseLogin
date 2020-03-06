import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Loading from '../screens/Loading';
import Main from '../screens/Main';

const screens = {
  Loading: {
    screen: Loading,
    navigationOptions: () => ({
        title: 'Loading',
    })
  },

  Home: {
    screen: Home
  },

  Login: {
    screen: Login
  },

  SignUp: {
    screen: SignUp
  },

  Main: {
    screen: Main
  }

}

const LoginStack = createStackNavigator(screens);
export default createAppContainer(LoginStack);
