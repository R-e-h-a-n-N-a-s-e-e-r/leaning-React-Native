import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlatListScreen = () => {
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
  const RenderItem = ({ item }: any) => (
    <View style={styles.Title}>
      <Text>{item.title}</Text>
    </View>
  );
  return (
    <View>
        {/* FlatList only works with array of objects or array of strings */}
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
    Title:{
        borderWidth: 1,
        borderColor:"#ccc",
        padding: 10,
        fontWeight: 'bold',
        marginVertical: 10,
    }
});
