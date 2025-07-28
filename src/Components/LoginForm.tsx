import {
    
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const LoginForm = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const handleLogin = () => {
    console.log(`Email: ${Email}, Password: ${Password}`);
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.Heading}>Login</Text>
      <TextInput
        value={Email}
        placeholder="Email"
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor={'gray'}
        autoCapitalize="none"
        style={styles.Input}
      />
      <TextInput
        value={Password}
        placeholder="Password"
        onChangeText={setPassword}
        style={styles.Input}
        placeholderTextColor={'gray'}
        secureTextEntry
      />
      <TouchableOpacity style={styles.Button} onPress={handleLogin}>
        <Text style={styles.ButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f0f0f0ff',
    height: '100%',
  },
  Heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
    color: '#333',
  },
  Button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  ButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  Input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 20,
    padding: 10,
  },
});
