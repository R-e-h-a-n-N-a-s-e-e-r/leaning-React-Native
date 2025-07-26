import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import First from './src/Components/First';
import OnPress from './src/Components/OnPress';
import UseState from './src/Components/UseState';
import Props from './src/Components/Props';

const App = () => {
  return (
    <View>
      {/* <UseState/> */}
      <Props/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
