import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const ShowChild = () => {
  useEffect(() => {
    // To use the useEffect hook for the unmounting phase, we use a return function inside the useEffect hook. This function will be called when the component is about to unmount.
     
    // In simple words inside function is used to do something when the component is unmounted.
    return () => {
      console.log('Child Component Unmounted');
    };
  });
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
          color: 'blue',
        }}
      >
        Child Component
      </Text>
    </View>
  );
};

export default ShowChild;

const styles = StyleSheet.create({});
