import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OnPress = () => {
  const Onpress = (name: string) => {
    console.log('Pressed');
    console.warn('Pressed' + name);
  };
  return (
    <View>
      <Text>OnPress function</Text>
      {/* <Button title="OnPress" onPress={Onpress} /> */}
      <Button title="OnPress" onPress={() => Onpress('Rehan')} />
    </View>
  );
};

export default OnPress;

const styles = StyleSheet.create({});
