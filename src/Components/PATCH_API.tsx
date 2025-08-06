import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PATCH_API = () => {
    // PATCH Method is used when there is need to update a specific field in the data. 
    // PUT can't be used for the same purpose because the data will be lost in the other fields if they are not entered 
  const [FormData, setFormData] = useState({
    id: '',
    first_name: '',
    email: '',
  });
  const HandleInput = (field: any, value: any) => {
    setFormData({ ...FormData, [field]: value });
  };
  const handleUpdate = async () => {
    try {
      const res = await axios.patch(`http://10.0.2.2:3000/Users/${FormData.id}`, {
        ...(FormData.first_name && { first_name: FormData.first_name }),
        ...(FormData.email && { email: FormData.email }),
      });
      Alert.alert('Success');
      setFormData({
        id: '',
        first_name: '',
        email: '',
      });
    } catch (error: any) {
      Alert.alert('Error ', error);
    }
  };
  return (
    <View>
      <Text style={styles.Heading}>PATCH_API</Text>
      <TextInput
        placeholder="Enter Id"
        onChangeText={value => HandleInput('id', value)}
        value={FormData.id}
      />
      <TextInput
        placeholder="Enter Name"
        onChangeText={value => HandleInput('first_name', value)}
        value={FormData.first_name}
      />
      <TextInput
        placeholder="Enter email"
        onChangeText={value => HandleInput('email', value)}
        value={FormData.email}
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default PATCH_API;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
