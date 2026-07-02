import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image, // 1. Added Image import
} from 'react-native';

import Allstyles from './MainStyles';

const PopularBooks = ({navigation}) => {
  const bookData = [
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'Novel by J. K. Rowling',
      coverPicAsset: require('../assets/537dce5c36112086ba3e08cdf441beb1 1.png'),
      bookDetails: '',
    },
    {
      id: 2,
      title: 'The Fault in Our Stars',
      author: 'Novel by John Green',
      coverPicAsset: require('../assets/537dce5c36112086ba3e08cdf441beb1 1.png'),
      bookDetails: 'random text for book 2',
    },
    {
      id: 3,
      title: 'Then She Was Gone',
      author: 'Novel by Lisa Jewell',
      coverPicAsset: require('../assets/537dce5c36112086ba3e08cdf441beb1 1.png'),
      bookDetails: 'random text for book 3',
    },
    {
      id: 4,
      title: "A Good Girl's Guide to Murder",
      author: 'Novel by Holly Jackson',
      coverPicAsset: require('../assets/537dce5c36112086ba3e08cdf441beb1 1.png'),
      bookDetails: 'random text for book 4',
    },
  ];

  return (
    <ImageBackground
      source={require('../assets/537dce5c36112086ba3e08cdf441beb1 1.png')}
      resizeMode="cover"
      style={Allstyles.background}
    >
      <View style={Allstyles.overlay}>
        <Text style={Allstyles.title}>Popular Books</Text>

        <View style={Allstyles.bookList}>
          <FlatList
            data={bookData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <View style={Allstyles.bookItemContainer}>
                  <TouchableOpacity
                    style={Allstyles.bookItem}
                    onPress={() =>
                      navigation.navigate('BookDetails', {
                        book: item,
                      })
                    }
                  >
                    <View style={Allstyles.bookTextContainer}>
                      <Text style={Allstyles.bookTitle}>{item.title}</Text>
                      <Text style={Allstyles.bookAuthor}>{item.author}</Text>
                    </View>
                      <Image 
                      source={item.coverPicAsset} 
                      style={Allstyles.bookCover} 
                    />
                  </TouchableOpacity>

                </View>
              );
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default PopularBooks;
