import * as React from 'react';
import {useState} from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image, TouchableHighlight, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InstaStory from 'react-native-insta-story';


function BillSummaryStory({ navigation }) {

      // States
    const [hasViewedSummary, sethasViewedSummary] = React.useState(0);
    const [userVote, setUserVote] = React.useState(0);

    // Bill Data
    const data = [
        {
            user_id: 1,
            user_image:"https://blobcontainerdatasets.blob.core.windows.net/hackathon-summaries/story1.jpg",
            user_name: "CB 120231",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://blobcontainerdatasets.blob.core.windows.net/hackathon-summaries/story1.jpg",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://blobcontainerdatasets.blob.core.windows.net/hackathon-summaries/story2a.jpg",
                },
                {
                    story_id: 3,
                    story_image: "https://blobcontainerdatasets.blob.core.windows.net/hackathon-summaries/story3.jpg",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 4,
                    story_image: "https://blobcontainerdatasets.blob.core.windows.net/hackathon-summaries/story4.jpg",
                }]
        }];
    
    
    
    
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 5}}>

        <TouchableHighlight activeOpacity={0.6}
            onPress={() => sethasViewedSummary("True")} underlayColor="white">
            <InstaStory data={data}
                duration={10}
                onStart={item => console.log(item)}
                onClose={item => console.log('close: ', item)}
                customSwipeUpComponent={<View><Text>Swipe</Text></View>}
                style={{height: 100}}/>
        </TouchableHighlight>
        
        <TouchableHighlight onPress={() => {
            if(hasViewedSummary != "True"){
                alert("Please View Bill Summary Before Voting!")
            }
                }} underlayColor="white">

                <TouchableHighlight onPress={() => {
                    if (hasViewedSummary != "True"){
                        setUserVote(0)
                        navigation.navigate("Signup") // SWITCH TO REPORT
                    }
                }} underlayColor="white">
                    <View style={styles.no_button}>
                    <Text style={styles.buttonText}>Deny</Text>
                    </View>
                </TouchableHighlight>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
            if(hasViewedSummary != "True"){
                alert("Please View Bill Summary Before Voting!")
            } 
                }} underlayColor="white">
                <TouchableHighlight onPress={() => {
                    
                    if (hasViewedSummary != "True"){
                        setUserVote(1)
                        navigation.navigate("Signup") // SWITCH TO REPORT
                    }
                    
                    }} underlayColor="white">
                    <View style={styles.yes_button}>
                        <Text style={styles.buttonText}>Approve</Text>
                    </View>
                </TouchableHighlight>
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
    no_button:{
      marginBottom: 30,
      width: 260,
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: '#BE1600',
    },
    yes_button:{
      marginBottom: 30,
      width: 260,
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: '#3d8c40',
    }
  });


export default BillSummaryStory;