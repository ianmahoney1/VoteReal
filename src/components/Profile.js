import * as React from 'react';
import { useState, useRef } from 'react';
import { Button, View, Text, Dimensions, Image, FlatList, StyleSheet } from 'react-native';
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

function ProfileScreen({ route, navigation }) {
  const [images, setImages] = useState([
    { id: '1', image: IMAGES.image5 },
    { id: '2', image: IMAGES.image7 },
    { id: '3', image: IMAGES.image9 },
  ]);
  const userObj = route.params;  
  const stats = BillService.getStats(userObj); 
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Carousel
        layout='default'
        data={images}
        sliderWidth={width}
        itemWidth={width}
        renderItem={({ item, index }) => (
          <View key={index} style={{alignItems: 'center'}}>
          <Image
            style={{ width: '100%', height: '75%' }}
            resizeMode='contain'
            source={item.image}
          />
          <Text styles={styles.title}>Kshama Sawant</Text>
          <Progress.Bar progress={stats.summary[index].match_percent} height={10} width={300} color={'#2ecc71'} unfilledColor={'#f64747'}/>
          <Text></Text>
          <FlatList
            data={[
              {key: "You agree with your representative " + Number(stats.summary[index].match_percent * 100).toFixed(1) + "% of the time"},
              {key: "Agreed on " + stats.summary[index].agree + " issues"},
              {key: "Disagreed on " + stats.summary[index].disagree + " issues"},
            ]}
            renderItem={({item}) => <Text >{item.key}</Text>}
          ></FlatList>
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
});

export default ProfileScreen; 