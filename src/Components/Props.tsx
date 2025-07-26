import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Child from './Child';

const Props = () => {
  const [Count, setCount] = useState<number>(0);
  const [Item, setItem] = useState<number>(0);
  


  return (
    <View>
      <Child Count={Count} Item={Item}/>
      <Button
        title="Counter"
        onPress={() => {
          setCount(Count + 1);
        }}
      />
      <Button
        title="Item Counter"
        onPress={() => {
          setItem(Item + 1);
        }}
      />
    </View>
  );
};

export default Props;

const styles = StyleSheet.create({});
