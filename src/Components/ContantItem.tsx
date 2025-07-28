import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ContantItem = ({ name, email, phone }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>Phone: {phone}</Text>
    </View>
  );
};

export default ContantItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 8,
    backgroundColor: '#efefefff',
    borderRadius: 5,
    shadowColor: '#000',
    borderBottomColor: '#ccc',
    borderBottomWidth: 3,
    height: 100,
  },

  text: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Arial',
    fontWeight: '700',
    color: '#333',
  },
});
