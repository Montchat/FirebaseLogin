import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Loading from '../screens/Loading';

const screens = {
  Loading: {
    screen: Loading
  },
  Home: {
    screen: Home
  },

  Login: {
    screen: Login
  },

  SignUp: {
    screen: SignUp
  }

}

const LoginStack = createStackNavigator(screens);
export default createAppContainer(LoginStack);
