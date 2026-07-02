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

const BookContent = ({navigation, route}) => {
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
      <ScrollView
        style={Allstyles.screenContent}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={Allstyles.inputSearch}>
          <Text style={Allstyles.buttonText}>...</Text>
        </TouchableOpacity>

        <View style={Allstyles.bookContentCard}>
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

            <Text style={Allstyles.detailsText}>
              Add to Favorite books ★
            </Text>
          </View>
        </View>

        <View style={Allstyles.bookContentDescription}>
          <Text style={Allstyles.bookContentParagraph}>
            Harry Potter and the Philosopher's Stone is the first book in J.K.
            Rowling's fantasy series. It follows 11-year-old Harry Potter, who
            discovers he's a wizard and attends Hogwarts School of Witchcraft
            and Wizardry. There, he makes friends, learns magic, and uncovers
            the mystery of the Philosopher's Stone while facing the dark wizard
            Voldemort for the first time.
          </Text>
        </View>

        <View style={Allstyles.ratingCard}>
          <Text style={Allstyles.ratingText}>Fantasy: ★★★★★</Text>
          <Text style={Allstyles.ratingText}>Adventure: ★★★★☆</Text>
          <Text style={Allstyles.ratingText}>Friendship: ★★★★★</Text>
        </View>
      </ScrollView>


    </ImageBackground>
  );
};

export default BookContent;