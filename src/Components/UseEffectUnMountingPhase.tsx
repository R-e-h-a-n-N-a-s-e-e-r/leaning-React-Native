import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ShowChild from './ShowChild';

const UseEffectUnMountingPhase = () => {
  const [Show, setShow] = useState(true);

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}
      >
        Parent Component
      </Text>
      {Show ? <ShowChild /> : null}
      <Button title="Toggle" onPress={() => setShow(!Show)} />
    </View>
  );
};

export default UseEffectUnMountingPhase;

const styles = StyleSheet.create({});
