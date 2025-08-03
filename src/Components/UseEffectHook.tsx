import { Button, StyleSheet, Text, View } from 'react-native';
import React, { use, useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [Count, setCount] = useState(1);
  useEffect(() => {
    console.log('UseEffect Hook is called');
  }, []); //  this dependency array [] ensures that the Useeffect runs only once when the component mounts.;

  // Without this Array [] the useEffect will run every time when the component re-renders or Button is pressed which is updating the State.Without
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 20,
          color: 'blue',
        }}
      >
        UseEffect
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 20,
          color: 'blue',
        }}
      >
        Count is {Count}
      </Text>
      <Button title="Counter" onPress={() => setCount(Count + 1)} />
    </View>
  );
};

export default UseEffectHook;

const styles = StyleSheet.create({});
