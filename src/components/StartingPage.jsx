import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Allstyles from './MainStyles'; // Import the styles from MainStyles.js

const StartingPage = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/537dce5c36112086ba3e08cdf441beb1 1.png')}
      resizeMode="cover"
      style={Allstyles.background}>
      <View style={Allstyles.overlay}>
        <Text style={Allstyles.title}>Meet the Minds{'\n'}Behind the Words</Text>

        <View style={Allstyles.loginForm1}>
        <TouchableOpacity
          style={Allstyles.button}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={Allstyles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>

          <TouchableOpacity
          style={Allstyles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={Allstyles.buttonText}>LOG IN </Text>
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StartingPage;