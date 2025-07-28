import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { UserData } from './UserData';
import ContantItem from '../../Components/ContantItem';
const ContantListScreen = () => {
  const RenderItem = ({ item }: any) => (
    <ContantItem name={item.name} email={item.email} phone={item.phone} />
  );
  return (
    <View>
      <FlatList
        data={UserData}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Text style={styles.heading}>
            User List
          </Text>
        }
      />
    </View>
  );
};

export default ContantListScreen;

const styles = StyleSheet.create({
    heading:{
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        color:'crimson',
    }
});
