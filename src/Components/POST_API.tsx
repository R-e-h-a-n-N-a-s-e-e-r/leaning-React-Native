import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const POST_API = () => {
  const [FormData, setFormData] = useState({
    id: '',
    first_name: '',
    email: '',
  });
  const handleInput = (field: any, value: any) => {
    setFormData({ ...FormData, [field]: value });
  };

  const HandleSubmit = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/Users', FormData);
      Alert.alert('Success!, Data submitted successfully');
      setFormData({ id: '', first_name: '', email: '' });
    } catch (error: any) {
      Alert.alert('Error', error);
    }
  };
  return (
    <View>
      <Text style={styles.Heading}>POST_API</Text>
      <TextInput
        placeholder="Enter ID"
        value={FormData.id}
        onChangeText={value => handleInput('id', value)}
      />
      <TextInput
        placeholder="Enter first_name"
        value={FormData.first_name}
        onChangeText={value => handleInput('first_name', value)}
      />
      <TextInput
        placeholder="Enter email"
        value={FormData.email}
        onChangeText={value => handleInput('email', value)}
      />
      <Button title="Submit" onPress={HandleSubmit} />
    </View>
  );
};

export default POST_API;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    textAlign: 'center',
  },
});
