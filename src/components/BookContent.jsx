import { View, Text,ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import Allstyles from '../Allstyles'; 
// import ImageBackground

const BookContent = () => {
  return (
     <ImageBackground
      source={require('./src/assets/537dce5c36112086ba3e08cdf441beb1 1.png')}
      resizeMode="cover"
      style={Allstyles.background}
    >
      <View style={Allstyles.overlay}>
        <Text style={Allstyles.title}>
          Meet the Minds{'\n'}Behind the Words
        </Text>

          <TouchableOpacity style={Allstyles.button}>
            <Text style={Allstyles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default BookContent