import * as React from 'react';
import { Button, View, StyleSheet, TouchableHighlight, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import { Permissions } from 'expo';
import registerNNPushToken from 'native-notify';

function SignupScreen({ navigation }) {
  registerNNPushToken(6506, 'qUhButoBbZV2fnpqcWzVXaqM')
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
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('CsignUp')}>
                    <Text style={styles.buttonText}>See Your Local Rep Profile!</Text>
                </TouchableHighlight>
      </View>

      
  );
  }
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      width: "90%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
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

//   const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#455a64",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });

  export default SignupScreen;