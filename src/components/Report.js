import * as React from 'react';
import { useState } from 'react';
import { View, Text, Dimensions, Image, FlatList, Button, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import * as Progress from 'react-native-progress';
import Card from "react-native-card-component";
import Ionicons from '@expo/vector-icons/Ionicons';

import BillService from '../services/BillService'; 

function ReportScreen({ route, navigation }) {
  const { vote } = route.params;  
    billVote = {
        name: "CB 120374",
        summary: "This ordinance adds protections against discrimination based on an individual's actual, potential, perceived, or alleged pregnancy outcomes in Seattle Municipal Code. The ordinance responds to the U.S. Supreme Court's decision in Dobbs v. Jackson Women's Health Organization, which overruled the constitutional right to an abortion established by Roe v. Wade and Planned Parenthood of Southeastern Pa. v. Casey. The ordinance acknowledges the Reproductive Privacy Act of Washington and the disproportionate impact that restricting and/or denying access to abortion services will have on poor communities and BIPOC communities. The ordinance recognizes the fundamental right to bodily autonomy, including for transgender and gender diverse communities who face increased barriers and stigma when accessing abortion services, and commits to a city that does not subject its residents, workers, and visitors to discriminatory treatment."
    }
    const user = {
        "name": "Vrishab Kumar",
        "username": "vsk",
        "password": "12345",
        "council_members": ["Kshama Sawant", "Sara Nelson", "Teresa Mosqueda"],
        "votes": [
            {
                "name": "CB 120374",
                "vote": "Approve" 
            }, 
            {
                "name": "CB 120337",
                "vote": "Reject" 
            }
        ],
        "uid": "2"
    }
  // const stats = BillService.getStats(userObj); 
  
  return (
    <View >
        <Card style={{alignItems: 'center'}}>
            <Card.Content style={{alignItems: 'center'}}>
            <Card.Title
            text={billVote.name}
            />
            <Text styles={styles.baseText}>   
                    {vote == "Approve" && <Text styles={styles.baseText}><Ionicons name="md-checkmark-circle" size={15} color="green" /> You voted to Approve this bill</Text>}
                    {vote != "Approve" && <Text styles={styles.baseText}><Ionicons name="alert-circle" size={15} color="red" /> You voted to Reject this bill</Text>}
            </Text>
            <Text></Text>
            <Card.Row>
                    <Text>
                        {billVote.summary}
                    </Text>
            </Card.Row>
        </Card.Content>
        </Card>
        <TouchableHighlight onPress={() => {
            user.votes.push({
                "name": "CB 120231",
                "vote": vote 
            });
            navigation.navigate('Profile', user);
        }} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Are You Represented?</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 30,
        width: "100%",
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#2196F3',
      },
  baseText: {
    fontSize: 20,
    padding: 2
  },
  innerText: {
    fontWeight: 'bold',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'black',
  },
});

export default ReportScreen; 
