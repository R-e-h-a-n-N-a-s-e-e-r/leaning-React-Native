import 'react-native-gesture-handler'; // for swipe to open drawer
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Navigation/Home';
import Login from './src/Navigation/Login';
import About from './src/Navigation/About';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerLabelStyle: {
            fontSize: 20,
            color: '#000000ff',
          },

          drawerActiveBackgroundColor: '#ffffffff',
          drawerStyle: {
            backgroundColor: '#eeeeeeff',
          },
          headerStyle: {
            backgroundColor: '#2b00ffff',
          },
          headerTintColor: '#ffffffff',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
