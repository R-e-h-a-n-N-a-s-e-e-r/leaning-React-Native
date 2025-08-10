import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const Login = ({ navigation }: any) => {
  const [username, setusername] = useState('');

  return (
    <View>
      {/* <Button
        title="Press"
        onPress={() =>
          navigation.navigate('About', { username: 'Rehan', Age: '18' })
        }
      /> */}
      <TextInput placeholder="Enter Username" onChangeText={setusername} />
      <Button
        title="Press"
        onPress={
          () => navigation.navigate('About', { username }) // if the name of the key and data is same that we can also write the name only eg. username:username is same as username
        }
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
