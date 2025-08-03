import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UseEffectUnMountingPhase from './src/Components/UseEffectUnMountingPhase';
// import UseEffectUpdatingPhase from './src/Components/UseEffectUpdatingPhase';
// import UseEffect from './src/Components/UseEffectHook';
// import { ClassComponent } from './src/Components/ClassComponent';
// import Grid from './src/Components/Grid';
// import First from './src/Components/First';
// import UseState from './src/Components/UseState';
// import Props from './src/Components/Props';
// import InputText from './src/Components/InputText';
// import Styling from './src/Components/Styling';
// import FlatListScreen from './src/Components/FlatListScreen';
// import SectionListScreen from './src/Components/SectionListScreen';
// import LoginForm from './src/Components/LoginForm';
// import ContantListScreen from './src/Screens/Contant/ContantListScreen';

const App = () => {
  return (
    <View style={{ flex: 1, padding: 5 }}>
      {/* <First />
      <UseState />
      <Props />
      <InputText />
      <Styling />
      <FlatListScreen />
      <SectionListScreen /> */}
      {/* <Grid /> */}
      {/* <ClassComponent /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectUpdatingPhase/> */}
      <UseEffectUnMountingPhase/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

