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

const ReadingCompleted = ({navigation}) => {
  const books = [
    {
      id: 1,
      title: 'Zero to One',
      image: require('../assets/Rectangle 30 (1).png'),
    },
    {
      id: 2,
      title: "Harry Potter the Sorcerer's Stone",
      image: require('../assets/81q77Q39nEL.png'),
    },
    {
      id: 3,
      title: 'Atomic Habits',
      image: require('../assets/Rectangle 33 (2).png'),
    },
    {
      id: 4,
      title: 'Then she was done',
      image: require('../assets/Rectangle 32 (2).png'),
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

        <Text style={Allstyles.sectionTitle}>Reading Completed</Text>

        <View style={Allstyles.bookGrid}>
          {books.map(item => (
            <TouchableOpacity key={item.id} style={Allstyles.gridBookCard}>
              <Image source={item.image} style={Allstyles.gridBookImage} />
              <Text style={Allstyles.gridBookTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

    </ImageBackground>
  );
};

export default ReadingCompleted;