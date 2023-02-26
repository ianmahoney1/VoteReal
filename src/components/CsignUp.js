import * as React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ClicksignupScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      {/* Add the image background */}
      <ImageBackground
        source={require('C:/Users/pskii/Desktop/Hackathon/VoteReal/src/components/CouncilPics/AlexPedersen.jpeg')}
        style={{
          borderWidth: 3,
          borderColor: 'black',
          margin: 40,
          height: '40%',
          width: '80%',
          resizeMode: 'stretch', // or 'contain' or 'cover' depending on your needs
        }}
      >
        {/* Add the text above the image */}
        <View style={{ marginTop: 40, marginRight: 180 }}>
          <Text>First Description</Text>
          <Text style={{ marginTop: 10 }}>Second Description</Text>
          <Text style={{ marginTop: 10 }}>Third Description</Text>
        </View>
      </ImageBackground>
      
      {/* Add the "Profile Page" button */}
      <View style={{ marginTop: 120, marginRight: 230 }}>
        <Button
          title="Profile Page"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

export default ClicksignupScreen;




// In this example, we added a View element with a borderBottomWidth style of 2 and a borderColor style of 'black'. This creates a rectangle outline at the top of the screen with a black border. You can adjust the styles to match your desired look and feel.





