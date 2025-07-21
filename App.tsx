import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import First from './src/Components/First';

const App = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
        }}
      >
        My first React app using Android Studio
      </Text>
      <Button title="Press Here!" />
      <First />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
