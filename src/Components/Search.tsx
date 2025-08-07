import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const Search = () => {
  const [Query, setQuery] = useState('');
  const data = [
    { id: 1, name: 'Rehan' },
    { id: 2, name: 'Farzeen' },
    { id: 3, name: 'Abdullah' },
    { id: 4, name: 'Ali' },
    { id: 5, name: 'Tariq' },
    { id: 6, name: 'Hassan' },
  ];
  const FilteredData = data.filter(contant =>
    contant.name.toLowerCase().includes(Query.toLowerCase()),
  );
  const RenderItem = ({ item }: any) => (
    <View style={styles.Item}>
      <Text style={styles.ItemText}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.Container}>
      <Text style={styles.Heading}>Search</Text>
      <TextInput
        value={Query}
        placeholder="Search Name"
        onChangeText={setQuery}
        style={styles.Search}
      />
      {FilteredData.length === 0 ? (
        <Text style={styles.Text}>No result Found</Text>
      ) : (
        <FlatList
          data={FilteredData}
          keyExtractor={item => item.id.toString()}
          renderItem={RenderItem}
          contentContainerStyle={styles.ListContainer}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Container: {
    flex: 1,
    backgroundColor: '#e9e9e9ff',
    padding: 20,
  },
  Search: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    color: 'black',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  ListContainer: {
    // paddingBottom:20,
  },
  Item: {
    padding: 20,
    borderBottomColor: '#989898ff',
    borderBottomWidth: 1,
  },
  ItemText: {
    fontSize: 17,
    fontWeight: '600',
  },
  Text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
