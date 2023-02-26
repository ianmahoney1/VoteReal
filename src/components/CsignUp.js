import * as React from 'react';
import { useState, useRef } from 'react';
import { Button, View, Text, Dimensions, Image, FlatList, StyleSheet, TouchableHighlight} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import * as Progress from 'react-native-progress';

const IMAGES = {
  image1: require('../components/CouncilPics/AlexPedersen.jpeg'),
  image2: require('../components/CouncilPics/AndrewLewis.jpeg'),
  image3: require('../components/CouncilPics/DanStrauss.jpeg'),
  image4: require('../components/CouncilPics/DeboraJuarez.jpeg'),
  image5: require('../components/CouncilPics/KshamaSawant.jpeg'),
  image6: require('../components/CouncilPics/LisaHerbold.jpeg'),
  image7: require('../components/CouncilPics/SaraNelson.jpeg'),
  image8: require('../components/CouncilPics/TammyMorales.jpeg'),
  image9: require('../components/CouncilPics/TeresaMosqueda.jpeg')
};

import BillService from '../services/BillService'; 

const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

function ClicksignupScreen({ navigation }) {
  const [images, setImages] = useState([
    { id: '1', image: IMAGES.image5 },
    { id: '2', image: IMAGES.image7 },
    { id: '3', image: IMAGES.image9 },
  ]);
  
  const hardcodedpeople = 
  [
    {
      "name": "Kshama Sawant",
      "party": "Socialist Alternative",
      "district": "3"
    },
    {
      "name": "Sara Nelson",
      "party": "Democrat",
      "district": "At-large"
    },
    {
      "name": "Teresa Mosqueda",
      "party": "Democrat",
      "district": "At-large"
    }
  ]

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Carousel
        layout='default'
        data={images}
        sliderWidth={width}
        itemWidth={width}
        renderItem={({ item, index }) => (
          <View key={index} style={{alignItems: 'center'}}>
            <Text style={styles.Text} >Swipe to See All of your Council Members!</Text>
          <Image
            style={{ width: '100%', height: '65%' }}
            resizeMode='contain'
            source={item.image}
          />
          <Text></Text>
          <FlatList
            data={[
              {key: "Name: " + hardcodedpeople[index].name},
              {key: "Party: " + hardcodedpeople[index].party},
              {key: "District: " + hardcodedpeople[index].district},
            ]}
            renderItem={({item}) => <Text >{item.key}</Text>}
          ></FlatList>
          <TouchableHighlight onPress={() => navigation.navigate('Profile')} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>See Your Stats!</Text>
        </View>
      </TouchableHighlight>
        </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  Text:{
    marginTop:30,
    fontSize:20
  },
  FlatList: {
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





