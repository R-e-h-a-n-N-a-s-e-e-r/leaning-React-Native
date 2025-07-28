import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Grid = () => {
    // In Grid data is 2 dementional (Rows and Columns) array while in FlatList data is 1 dementional array.
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },
  ];
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.Heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.Container}>
        {data.map(item => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.Text}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  Heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: '800',
    color: '#333',
    
  },
  Container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    height: 100,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dfdfdfff',
    borderRadius: 20,
    shadowColor: '#000',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  Text:{
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',

  }
});
