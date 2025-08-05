import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AlertExample = () => {
  // Alert Component is used when you have to create a simple confirmation message

  const HandleAlert = () => {
    Alert.alert(
      'Alert Title',
      'Alert Message',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => console.log('Cancel'),
        },
        { text: 'OK', style: 'default', onPress: () => console.log('OK') },
      ],
      { cancelable: false }, // User have to use the button to disappear the Popup
    );
  };
  return (
    <View>
      <Text style={{ fontSize: 25 }}>AlertExample</Text>
      <Button title="Press" onPress={HandleAlert} />
    </View>
  );
};

export default AlertExample;

const styles = StyleSheet.create({});
