import * as React from 'react';
import { Button, View, StyleSheet, TouchableHighlight, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import HomeScreen from './Home';

function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Stack = createNativeStackNavigator();
     return (
      <View style={styles.container}>
        <Text>Name:</Text>
          <TextInput
              style={styles.input}
              placeholder="Enter Your First and Last Name"
              value={name}
              onChangeText={(text) => setName(text)}
              onSubmitEditing={() => console.log(`Your Name is ${name}`)}
          />

        <Text>Address:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Voting Address"
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                    onSubmitEditing={() => console.log(`Your Address is ${address}`)}
                />
        <Text>Username:</Text>
            <TextInput
                style={styles.input}
                placeholder="Choose a Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
                onSubmitEditing={() => console.log(`Your Address is ${username}`)}
            />
        <Text>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Choose a Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={() => console.log(`Your Address is ${password}`)}
                />
        <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
      </View>

      
  );
  }
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: "#455a64",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
      margin: 50,
      marginBottom: 30,
      width: 260,
      height: 50,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'black',
    },
  });

//   const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#455a64",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });

  export default SignupScreen;