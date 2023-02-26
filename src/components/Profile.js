import * as React from 'react';
import { useState } from 'react';
import { View, Text, Dimensions, Image, FlatList, Button, StyleSheet, StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import * as Progress from 'react-native-progress';
import Card from "react-native-card-component";
import Ionicons from '@expo/vector-icons/Ionicons';


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
    <View >
       <Carousel
        layout='default'
        data={images}
        sliderWidth={width}
        itemWidth={width}
        renderItem={({ item, index }) => (  
          <Card style={{alignItems: 'center'}}>
            <Card.Thumbnail
                source={item.image}
                style={{ height: 400, width: "100%" }}
                align={'center'}
                // stretch
                // imageProps={{resizeMode: 'contain'}}
            />
            <Card.Content style={{alignItems: 'center'}}>
                <Card.Title
                text={stats.summary[index].council_member}
                />
                <Card.Row>
                  <Progress.Bar progress={stats.summary[index].match_percent} height={10} width={350} color={'#2ecc71'} unfilledColor={'#f64747'}/>
                </Card.Row>
                <Text style={styles.baseText} >
                  {Number(stats.summary[index].match_percent * 100).toFixed(1) > 60 && <Ionicons name="md-checkmark-circle" size={20} color="green" />}
                  {Number(stats.summary[index].match_percent * 100).toFixed(1) < 40 && <Ionicons name="alert-circle" size={20} color="red" />}
                  {Number(stats.summary[index].match_percent * 100).toFixed(1) >= 40 && Number(stats.summary[index].match_percent * 100).toFixed(1) <= 60 && <Ionicons name="alert-circle" size={20} color="orange" />}
                  You agree {Number(stats.summary[index].match_percent * 100).toFixed(1)}% of the time
                 </Text>
                 <Text style={styles.baseText}>
                 <Ionicons name="md-checkmark-circle" size={20} color="green" />
                  Agreed on {stats.summary[index].agree} issue(s)                 
                 </Text>
                 <Text style={styles.baseText}>
                 <Ionicons name="alert-circle" size={20} color="red" />
                  Disagreed on {stats.summary[index].disagree} issue(s)
                 </Text>
            </Card.Content>
          </Card>
        //   <View key={index} style={{alignItems: 'center'}}>
        //     <Image
        //       style={{ width: '100%', height: '75%' }}
        //       resizeMode='contain'
        //       source={item.image}
        //     />
        //     <Text>Kshama Sawant</Text>
        //     
        //     <Text></Text>
            
        // </View>
        )}
      />
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

export default ProfileScreen; 
