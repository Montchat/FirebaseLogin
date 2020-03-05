import React, {
  Component
} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <View style = {styles.view}>
          <Text>welcome to firebase login</Text>
          <Button
            style={styles.button}
            title = 'login'
            onPress={this._login}
          />
          <Button
            style={styles.button}
            title = 'signup'
            onPress={this._signUp}
          />
        </View>
      </NavigationContainer>
    );
  }

};


const styles = StyleSheet.create({
  button: {
    height: 44,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    margin: 8,
    borderRadius: 10,
  },

  view: {
    flex: 1,
    backgroundColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
