import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Navigation/Home';
import About from './src/Navigation/About';
import Login from './src/Navigation/Login';
import MyHeader from './src/Navigation/MyHeader';

const App = () => {
  const Stack = createNativeStackNavigator();
  const ButtonRight = () => (
    <Button title="Right" onPress={() => Alert.alert('Right')} />
  );
  const ButtonLeft = () => (
    <Button title="Left" onPress={() => Alert.alert('Left')} />
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // this styling will apply on all the screens
          headerStyle: styles.Header,
          headerTitleStyle: styles.HeaderTitle,
          headerTintColor: 'white',
          contentStyle: styles.Screens,
        }}
      >
        <Stack.Screen
          name="Header"
          component={MyHeader}
          options={{
            title: '',
            headerLeft: ButtonLeft,
            headerRight:ButtonRight
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{
          //   title: 'Login Form',
          //   headerTintColor: 'blue',
          //   headerTitleStyle: {
          //     fontSize: 25,
          //     fontWeight: 'bold',
          //     // color:'red'
          //   },
          //   headerStyle: {
          //     backgroundColor: '#000000ff',
          //   },
          // }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#6200EE',
  },
  HeaderTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    // color: '#ffffff',
  },
  Screens: {
    backgroundColor: '#00e5ffff',
  },
});
