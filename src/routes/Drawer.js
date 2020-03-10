import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import About from '../screens/About';

const RootDrawerNavigator = createDrawerNavigator({
  About: {
    screen: About
  }

});

export default createAppContainer(RootDrawerNavigator);
