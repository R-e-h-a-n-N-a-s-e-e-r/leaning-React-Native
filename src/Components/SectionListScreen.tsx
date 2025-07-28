import { SectionList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SectionListScreen = () => {
  // SectionList displays items grouped into sections, each with its own header and list.
  // It is useful for displaying large datasets in a structured way, allowing users to navigate through sections easily.
  const listItems = [
    {
      title: 'Fruits',
      data: [
        {
          name: 'Apple',
          key: '1',
        },
        {
          name: 'Banana',
          key: '2',
        },
        {
          name: 'Orange',
          key: '3',
        },
      ],
    },
    {
      title: 'Vegetables',
      data: [
        {
          name: 'Carrot',
          key: '4',
        },
        {
          name: 'Broccoli',
          key: '5',
        },
        {
          name: 'Spinach',
          key: '6',
        },
      ],
    },
  ];
  const renderItem = ({ item }: any) => (
    <View
      style={{
        padding: 10,
        backgroundColor: '#e0e0e0',
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
      }}
    >
      <Text>{item.name}</Text>
    </View>
  );
  const renderSectionHeader = ({ section }: any) => (
    <View style={{ padding: 10, backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
    </View>
  );
  return (
    <View>
      <SectionList
        sections={listItems}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({});
