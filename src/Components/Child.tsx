import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Child = ({ Count,Item }: any) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          textAlign: 'center',
          marginVertical: 10,
        }}
      >
        Child : {Count}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          textAlign: 'center',
          marginVertical: 10,
        }}
      >
        Item : {Item}
      </Text>
    </View>
  );
};

export default Child;

const styles = StyleSheet.create({});
