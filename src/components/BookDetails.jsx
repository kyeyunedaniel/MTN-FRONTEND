import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import Allstyles from './MainStyles';

const BookDetails = ({navigation, route}) => {
  const book = route?.params?.book;

  const selectedBook = book || {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    genre: 'Fantasy, Adventure, Friendship',
    coverPicAsset: require('../assets/81q77Q39nEL.png'),
  };

  return (
    <ImageBackground
      source={require('../assets/537dce5c36112086ba3e08cdf441beb1 1.png')}
      resizeMode="cover"
      style={Allstyles.background}>
      <View style={Allstyles.screenContent}>
        <TouchableOpacity style={Allstyles.inputSearch}>
          <Text style={Allstyles.buttonText}>...</Text>
        </TouchableOpacity>

        <View style={Allstyles.detailsCard}>
          <Image
            source={selectedBook.coverPicAsset}
            style={Allstyles.detailsCover}
          />

          <View style={Allstyles.detailsTextBox}>
            <Text style={Allstyles.detailsText}>
              📚 Title: {selectedBook.title}
            </Text>

            <Text style={Allstyles.detailsText}>
              ✍ Author: {selectedBook.author}
            </Text>

            <Text style={Allstyles.detailsText}>
              📜 Genre: {selectedBook.genre || 'Fantasy, Adventure, Friendship'}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={Allstyles.largeActionButton}
          onPress={() =>
            navigation.navigate('BookContent', {
              book: selectedBook,
            })
          }>
          <Text style={Allstyles.largeActionText}>READ Online</Text>

          <View style={Allstyles.arrowBox}>
            <Text style={Allstyles.arrowText}>→</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={Allstyles.largeActionButton}>
          <View>
            <Text style={Allstyles.largeActionText}>READ Offline</Text>
            <Text style={Allstyles.smallActionSubText}>Download book</Text>
          </View>

          <View style={Allstyles.arrowBox}>
            <Text style={Allstyles.arrowText}>→</Text>
          </View>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
};

export default BookDetails;