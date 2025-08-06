import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PUT_API = () => {
  const [FormData, setFormData] = useState({
    id: '',
    first_name: '',
    email: '',
  });
  const HandleInput = (field: any, value: any) => {
    setFormData({ ...FormData, [field]: value });
  };
  const HandleUpdate = async () => {
    try {
      const res = await axios.put(`http://10.0.2.2:3000/Users/${FormData.id}`, {
        first_name: FormData.first_name,
        email: FormData.email,
      });
      Alert.alert('Updation complete');
      setFormData({
        id: '',
        first_name: '',
        email: '',
      });
    } catch (error: any) {
      Alert.alert('Error', error);
    }
  };
  return (
    <View>
      <Text style={styles.Heading}>PUT_API</Text>
      <TextInput
        placeholder="ID"
        onChangeText={value => HandleInput('id', value)}
        value={FormData.id}
      />
      <TextInput
        value={FormData.first_name}
        placeholder="name"
        onChangeText={value => HandleInput('first_name', value)}
      />
      <TextInput
        value={FormData.email}
        placeholder="email"
        onChangeText={value => HandleInput('email', value)}
      />
      <Button title="Update" onPress={HandleUpdate} />
    </View>
  );
};

export default PUT_API;

const styles = StyleSheet.create({
  Heading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
