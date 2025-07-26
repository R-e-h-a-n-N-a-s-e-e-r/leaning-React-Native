import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const UseState = () => {
  const [name, setName] = useState('John Doe');
  const changeName = () => {
    setName('Henry');
}
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: 'blue',
          textAlign: 'center',
          marginTop: 20,
        }}
      >
        Name : {name}
      </Text>
      {/* <Button title="Press" onPress={() => setName('Henry')} /> not a recommended way */}
      <Button title='Press' onPress={()=>changeName()}/>
    </View>
  );
};

export default UseState;

const styles = StyleSheet.create({});
