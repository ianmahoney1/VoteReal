import * as React from 'react';
import {useState} from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image, TouchableHighlight, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserService from '../services/UserService';

function LoginScreen({ navigation }) {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./logo.png')} style={{width: 400, height: 200}} />
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text>Username:</Text>
            <TextInput
                style={styles.input}    
                onChangeText={newText => setUser(newText)}
                defaultValue={user}
                autoCapitalize={"none"}
                autoCorrect={false}
            />
            <Text></Text>
            <Text></Text>
            <Text>Password:</Text>
            <TextInput
                style={styles.input}    
                onChangeText={newText => setPass(newText)}
                defaultValue={pass}
                autoCorrect={false}
                secureTextEntry={true}
                autoCapitalize={"none"}
            />
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <TouchableHighlight onPress={() => {
                let userObj = UserService.getUser(user, pass)
                if (userObj != null) { 
                    navigation.navigate('Profile', userObj) 
                } else {
                    Alert.alert("Invalid username and/or password")
                }}} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
      borderColor: "gray",
      width: "90%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
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
export default LoginScreen; 