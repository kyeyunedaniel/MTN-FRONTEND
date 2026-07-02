import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PopularBooks from '../PopularBooks';
import Profile from '../Profile';
import ContinueReading from '../ContinueReading';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ContinueReading" component={ContinueReading} />
      <Tab.Screen name="PopularBooks" component={PopularBooks} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}