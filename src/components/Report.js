import * as React from 'react';
import { useState } from 'react';
import { View, Text, Dimensions, Image, FlatList, Button, StyleSheet, StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import * as Progress from 'react-native-progress';
import Card from "react-native-card-component";
import Ionicons from '@expo/vector-icons/Ionicons';

import BillService from '../services/BillService'; 

function ReportScreen({ route, navigation }) {
  // const userObj = route.params;  
  // const stats = BillService.getStats(userObj); 
  
  return (
    <View >
        <Card style={{alignItems: 'center'}}>
            <Card.Content style={{alignItems: 'center'}}>
            <Card.Title
            text={"Bill: CB 120374"}
            />
            <Text styles={styles.baseText}>
                <Ionicons name="md-checkmark-circle" size={15} color="green" /> 
                You voted to Approve this bill
            </Text>
            <Text></Text>
            <Card.Row>
                    <Text>
                    This ordinance adds protections against discrimination based on an individual's actual, potential, perceived, or alleged pregnancy outcomes in Seattle Municipal Code.
                    The ordinance responds to the U.S. Supreme Court's decision in Dobbs v. Jackson Women's Health Organization, which overruled the constitutional right to an abortion established by Roe v. Wade and Planned Parenthood of Southeastern Pa. v. Casey.
                    The ordinance acknowledges the Reproductive Privacy Act of Washington and the disproportionate impact that restricting and/or denying access to abortion services will have on poor communities and BIPOC communities.
                    The ordinance recognizes the fundamental right to bodily autonomy, including for transgender and gender diverse communities who face increased barriers and stigma when accessing abortion services, and commits to a city that does not subject its residents, workers, and visitors to discriminatory treatment.
                    </Text>
            </Card.Row>

        </Card.Content>
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    padding: 2
  },
  innerText: {
    fontWeight: 'bold',
  },
});

export default ReportScreen; 
