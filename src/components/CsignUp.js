import * as React from 'react';
import { Button, View, Text, Image, SafeAreaView, ScrollView,StatusBar, StyleSheet, TouchableHighlight} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ClicksignupScreen({ navigation }) {
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView style = {styles.scrollView}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
        <Image source={require('./CouncilPics/KshamaSawant.jpeg')} style={{width: 400, height: 400}}/>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text style={styles.Text}>Name: Kshama Sawant</Text>
          <Text style={styles.Text}>Party: Socialist Alternative</Text>
          <Text style={styles.Text}>District: 3</Text>
          <Text></Text>
          <Text></Text>
        </View>
        <Image source={require('./CouncilPics/TeresaMosqueda.jpeg')} style={{width: 400, height: 400}}/>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={styles.Text}>Name: Teresa Mosqueda</Text>
          <Text style={styles.Text}>Party: Democrat</Text>
          <Text style={styles.Text}>District: At-large</Text>
          <Text></Text>
          <Text></Text>
        </View>
        <Image source={require('./CouncilPics/SaraNelson.jpeg')} style={{width: 400, height: 400}}/>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={styles.Text}>Name: Sara Nelson</Text>
          <Text style={styles.Text}>Party: Democrat</Text>
          <Text style={styles.Text}>District: At-large</Text>
          <Text></Text>
          <Text></Text>
        </View>
        <TouchableHighlight onPress={() => navigation.navigate('Profile')} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>See Your Stats!</Text>
        </View>
      </TouchableHighlight>
    </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  Text: {
    fontSize: 20,
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


export default ClicksignupScreen;




// In this example, we added a View element with a borderBottomWidth style of 2 and a borderColor style of 'black'. This creates a rectangle outline at the top of the screen with a black border. You can adjust the styles to match your desired look and feel.





