import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import First from './src/Components/First';
import OnPress from './src/Components/OnPress';

const App = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
        }}
      >
        React Native
      </Text>
      <OnPress/>
      <First />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
