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

const FavoriteBook = ({navigation}) => {
  const books = [
    {
      id: 1,
      title: 'The Fault in Our Stars',
      image: require('../assets/537dce5c36112086ba3e08cdf441beb1 1.png'),
    },
    {
      id: 2,
      title: "Harry Potter the Sorcerer's Stone",
      image: require('../assets/81q77Q39nEL.png'),
    },
    {
      id: 3,
      title: 'One of Us Is Lying',
      image: require('../assets/Rectangle 33 (1).png'),
    },
    {
      id: 4,
      title: 'The Girl on the Train',
      image: require('../assets/Rectangle 32 (1).png'),
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

        <Text style={Allstyles.sectionTitle}>Favorite books</Text>

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

export default FavoriteBook;