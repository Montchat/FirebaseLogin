import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { Platform } from 'react-native';
import Home from './screens/Home';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
}

export const SignedOut = StackNavigator({

  Home: {
    screen: Home
    navigationOptions: {
      title = "Home",
      headerStyle
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title = "Sign Up",
      headerStyle
    }
  },

  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title = "Sign In"
      headerStyle
    }

  }

});

export const SignedIn = StackNavigator({
  Main: {
    screen: Main
  },

});

export const createRootNavigator = (signedIn = false) => {

  return SwitchNavigator({
    SignedIn: {
      screen: SignedIn,
    },
    SignedOut: {
      scree: SignedOut
    }
  }, {
    initialRouteName: signedIn ? "SignedIn" : "SignedOut"
  }

  });

}
