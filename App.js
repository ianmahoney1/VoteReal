import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/Home';
import SignupScreen from './src/components/Signup';
import LoginScreen from './src/components/Login';
import ProfileScreen from './src/components/Profile'


const Stack = createNativeStackNavigator();


export default class App extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

//const styles = StyleSheet.create({
//  container: {
//    paddingTop: 60,
//    alignItems: 'center',
//  },
//  button: {
//    marginBottom: 30,
//    width: 260,
//   alignItems: 'center',
//    backgroundColor: '#2196F3',
//  },
//  buttonText: {
//    textAlign: 'center',
//    padding: 20,
//    color: 'black',
//  },
//});


      // {/* <Button
      //     onPress={onPressLearnMore}
      //     title="Learn More"
      //     color="#841584"
      //     accessibilityLabel="Learn more about this purple button"
      //   />
      //   <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
      //     <View style={styles.button}>
      //       <Text style={styles.buttonText}>Sign Up</Text>
      //     </View>
      //   </TouchableHighlight>
      //   <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
      //     <View style={styles.button}>
      //       <Text style={styles.buttonText}>Log In</Text>
      //     </View>
      //   </TouchableHighlight> */}
      // // </NavigationContainer>