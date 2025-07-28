import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import First from './src/Components/First';
import OnPress from './src/Components/OnPress';
import UseState from './src/Components/UseState';
import Props from './src/Components/Props';
import InputText from './src/Components/InputText';
import Styling from './src/Components/Styling';
import FlatListScreen from './src/Components/FlatListScreen';

const App = () => {
  return (
    <View>
      {/* <UseState/> */}
      {/* <Props> */}
      {/* <InputText/> */}
      {/* <Styling /> */}
      <FlatListScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
