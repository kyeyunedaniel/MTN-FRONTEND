
import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Allstyles from './MainStyles'; 
import {TextInput} from 'react-native';

const LoginPage = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/537dce5c36112086ba3e08cdf441beb1 1.png')}
      resizeMode="cover"
      style={Allstyles.background}>
      <View style={Allstyles.overlay}>
        <Text style={Allstyles.title}>Meet the Minds{'\n'}Behind the Words</Text>

        <View style={Allstyles.loginForm}>
           <TextInput
            placeholder="User name"
            placeholderTextColor="#444"
            style={Allstyles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#444"
            secureTextEntry
            style={Allstyles.input}
          />


          <TouchableOpacity
            style={Allstyles.button}
            onPress={() => navigation.navigate('MainTabs')}>
            <Text style={Allstyles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginPage;