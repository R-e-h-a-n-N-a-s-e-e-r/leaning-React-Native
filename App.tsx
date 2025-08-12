import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Navigation/Home';
import Login from './src/Navigation/Login';
import Settings from './src/Navigation/Settings';
const App = () => {
  const Top = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Top.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
          tabBarIndicatorStyle: {
            borderBottomColor: 'white',
          },
          tabBarLabelStyle: {
            fontSize: 18,
            fontWeight:'700'
          },
      
        }}
      >
        <Top.Screen name="Home" component={Home} />
        <Top.Screen name="Login" component={Login} />
        <Top.Screen name="Settings" component={Settings} />
      </Top.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
