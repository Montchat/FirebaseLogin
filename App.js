import React, {
  Component
} from 'react';
import { View, Text } from 'react-native';

import Button from './src/components/Button.js';

export default class App extends Component {
  render() {
    return (
        <View style = {{
          flex: 1,
          backgroundColor: 'silver',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>welcome to firebase login</Text>
          <Button name ='login'/>
          <Button name = 'signup'/>
        </View>
    );
  }
}
