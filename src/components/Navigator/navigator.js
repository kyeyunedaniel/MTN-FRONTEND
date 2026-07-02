import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartingPage from '../StartingPage';
import LoginPage from '../LoginPage';
import SignUp from '../SignUp';
import PopularBooks from '../PopularBooks';
import Profile from '../Profile';
import ContinueReading from '../ContinueReading';
import BookContent from '../BookContent';
import BookDetails from '../BookDetails';
import FavoriteBook from '../FavoriteBook';
import ReadingCompleted from '../ReadingCompleted';
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="PopularBooks"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: 70,
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },

        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#7d828c',

        tabBarIcon: ({color, focused}) => {
          let iconName;

          if (route.name === 'ContinueReading') {
            iconName = focused ? 'book' : 'book-outline';
          }

          if (route.name === 'PopularBooks') {
            iconName = focused ? 'home' : 'home-outline';
          }

          if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return (
            <Icon
              name={iconName}
              size={focused ? 34 : 31}
              color={color}
            />
          );
        },
      })}>
      <Tab.Screen name="PopularBooks" component={PopularBooks} />
      <Tab.Screen name="ContinueReading" component={ContinueReading} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <>
    <Stack.Navigator
      initialRouteName="Starting"
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen name="Starting" component={StartingPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MainTabs" component={MainTabs} />

      <Stack.Screen name="BookDetails" component={BookDetails} />
      <Stack.Screen name="BookContent" component={BookContent} />
      <Stack.Screen name="FavoriteBook" component={FavoriteBook} />
      <Stack.Screen name="ReadingCompleted" component={ReadingCompleted} />
    </Stack.Navigator>
    </>
  );
}