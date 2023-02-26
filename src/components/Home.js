import * as React from 'react';
import { Button, View, Text, TouchableHighlight, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./logo.png')} style={{width: 400, height: 200}} />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <TouchableHighlight onPress={() => navigation.navigate('Signup')} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Login')} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'black',
  },
});

export default HomeScreen; 