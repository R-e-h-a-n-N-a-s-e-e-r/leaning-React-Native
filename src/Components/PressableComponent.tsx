import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PressableComponent = () => {
  // It is used when we want to handle touch events like press, long press, etc.
  //    Pressable is a core(built-in, fundamental part of React Native) component that can detect various types of touch interactions.
  const HandleOnPress = () => {
    console.log('Button Pressed');
  };
  const HandleOnPressIn = () => {
    console.log('Button Pressed In');
  };
  const HandleOnPressOut = () => {
    console.log('Button Pressed Out');
  };
  const HandleOnLongPress = () => {
    console.log('Button Long Pressed');
  };
  return (
    <>
      <Text style={styles.Heading}>PressableComponent</Text>
      <View style={styles.container}>
        <Pressable
          style={styles.Button}
          onPress={HandleOnPress}
          onPressIn={HandleOnPressIn}
          onPressOut={HandleOnPressOut}
          onLongPress={HandleOnLongPress} // Default is 500ms
          delayLongPress={1000}
        >
          <Text style={styles.ButtonText}>Press Me</Text>
        </Pressable>
      </View>
    </>
  );
};

export default PressableComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  Button: {
    backgroundColor: '#edededff',
    padding: 30,
    borderRadius: 10,
  },
  ButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
  },
});
