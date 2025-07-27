import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Style from '../Style/Style';
const Styling = () => {
  return (
    <View>
      {/* Inline Styling has more priority than Internal Styling, which has more priority than External Styling. */}
      {/* 1st : Inline Styling
      2nd : Internal Styling
      3rd : External Styling */}
      <Text
        style={{
          color: 'blue',
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
          fontWeight: 'bold',
          backgroundColor: 'lightgray',
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'black',
          shadowColor: '#000',
        }}
      >
        Inline Styling
      </Text>
      <Text style={styles.Text}>Internal Styling</Text>
      <Text style={Style.Text}>External Styling</Text>
    </View>
  );
};

export default Styling;

const styles = StyleSheet.create({
  Text: {
    color: 'green',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
  },
});
