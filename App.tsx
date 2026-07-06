import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/components/Navigator/navigator';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;