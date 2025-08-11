import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Navigation/Home';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './src/Navigation/Settings';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};
const Tab = createBottomTabNavigator();
const getBarIcon = (focused: any, size: any, color: any, Route_name: any) => {
  let icon;
  if (Route_name === 'Home') {
    icon = focused ? 'home' : 'home-outline';
  } else if (Route_name === 'Profile') {
    icon = focused ? 'person' : 'person-outline';
  } else {
    icon = focused ? 'settings' : 'settings-outline';
  }
  return <Icon name={icon} size={size} color={color} />;
};
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) =>
            getBarIcon(focused, size, color, route.name),
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: '#2e2e2eff',
          tabBarLabelStyle: {
            fontWeight: 700,
            fontSize: 13,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
