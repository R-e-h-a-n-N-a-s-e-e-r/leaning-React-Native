import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = ({ navigation }: any) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
