import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import Allstyles from './MainStyles';

const ContinueReading = ({navigation}) => {
  const books = [
    {
      id: 1,
      title: 'Deep Work',
      image: require('../assets/Rectangle 30.png'),
      progress: '45%',
    },
    {
      id: 2,
      title: 'It Ends With Us',
      image: require('../assets/Rectangle 31.png'),
      progress: '35%',
    },
    {
      id: 3,
      title: "Man's Search for Meaning",
      image: require('../assets/Rectangle 32.png'),
      progress: '70%',
    },
    {
      id: 4,
      title: '1984',
      image: require('../assets/Rectangle 33.png'),
      progress: '55%',
    },
  ];

  return (
    <ImageBackground
      source={require('../assets/537dce5c36112086ba3e08cdf441beb1 1.png')}
      resizeMode="cover"
      style={Allstyles.background}>
      <ScrollView
        style={Allstyles.screenContent}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={Allstyles.inputSearch}>
          <Text style={Allstyles.buttonText}>...</Text>
        </TouchableOpacity>

        <Text style={Allstyles.sectionTitle}>Continue Reading</Text>

        <View style={Allstyles.bookGrid}>
          {books.map(item => (
            <TouchableOpacity key={item.id} style={Allstyles.gridBookCard}>
              <Image source={item.image} style={Allstyles.gridBookImage} />

              <Text style={Allstyles.gridBookTitle}>{item.title}</Text>

              <View style={Allstyles.progressLine}>
                <View
                  style={[
                    Allstyles.progressFill,
                    {
                      width: item.progress,
                    },
                  ]}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

    </ImageBackground>
  );
};

export default ContinueReading;