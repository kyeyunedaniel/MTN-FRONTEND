import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Allstyles from './MainStyles';

const Profile = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/537dce5c36112086ba3e08cdf441beb1 1.png')}
      resizeMode="cover"
      style={Allstyles.background}>
      <View style={Allstyles.screenContent}>
        <TouchableOpacity style={Allstyles.inputSearch}>
          <Text style={Allstyles.buttonText}>...</Text>
        </TouchableOpacity>

        <View style={Allstyles.profilePanel}>
          <View style={Allstyles.profileHeader}>
            <Text style={Allstyles.profileName}>
              User Name- {'\n'}Prabhanshu
            </Text>

            <View style={Allstyles.profileAvatar}>
              <Text style={Allstyles.profileAvatarText}>●</Text>
            </View>
          </View>

          <TouchableOpacity
            style={Allstyles.profileMenuButton}
            onPress={() => navigation.navigate('ContinueReading')}>
            <Text style={Allstyles.profileMenuText}>Continue Reading</Text>

            <View style={Allstyles.arrowBox}>
              <Text style={Allstyles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={Allstyles.profileMenuButton}
            onPress={() => navigation.navigate('ReadingCompleted')}>
            <Text style={Allstyles.profileMenuText}>Reading Completed</Text>

            <View style={Allstyles.arrowBox}>
              <Text style={Allstyles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={Allstyles.profileMenuButton}
            onPress={() => navigation.navigate('FavoriteBook')}>
            <Text style={Allstyles.profileMenuText}>Favorite books</Text>

            <View style={Allstyles.arrowBox}>
              <Text style={Allstyles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={Allstyles.profileMenuButton}>
            <Text style={Allstyles.profileMenuText}>Re-set Password</Text>

            <View style={Allstyles.arrowBox}>
              <Text style={Allstyles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>
  );
};

export default Profile;