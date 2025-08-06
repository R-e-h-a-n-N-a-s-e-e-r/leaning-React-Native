import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const DELETE_API = () => {
  const [ID, setID] = useState('');
  const HandleDelete = async () => {
    try {
      const res = await axios.delete(`http://10.0.2.2:3000/Users/${ID}`);
      Alert.alert('Success', 'Data deleted Successfully');
      setID('');
    } catch (error: any) {
      Alert.alert('Error', error);
    }
  };
  return (
    <View>
      <Text style={styles.Heading}>DELETE_API</Text>
      <TextInput
        placeholder="Enter ID"
        value={ID}
        onChangeText={value => setID(value)}
      />
      <Button title="DELETE" onPress={HandleDelete} />
    </View>
  );
};

export default DELETE_API;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
