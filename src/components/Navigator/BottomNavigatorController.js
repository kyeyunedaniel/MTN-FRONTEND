import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PopularBooks from '../PopularBooks';
import Profile from '../Profile';
import ContinueReading from '../ContinueReading';
import Allstyles from '../MainStyles';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ContinueReading" component={ContinueReading} options={{ tabBarIcon: () => <Text style={Allstyles.navIcon}>⌂</Text> }} />
      <Tab.Screen name="PopularBooks" component={PopularBooks} options={{ tabBarIcon: () => <Text style={Allstyles.navIcon}>▤</Text> }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: () => <Text style={Allstyles.navIcon}>●</Text> }} />
    </Tab.Navigator>
  );
}