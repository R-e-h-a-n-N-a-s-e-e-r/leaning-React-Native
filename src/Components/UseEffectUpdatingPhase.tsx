import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffectUpdatingPhase = () => {
  const [Count, setCount] = useState(1);
  const [Score, setScore] = useState(5);
  //   We can use multiple useEffect hooks in a single component.

  //   useEffect(() => {
  //     console.log('UseEffectUpdatingPhase Component Updated');
  //   }, [Count]);
  //

  // By passing Count as a dependency, this effect will only run whenever Count changes.
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
          color: 'blue',
        }}
      >
        UseEffectUpdatingPhase
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
          color: 'blue',
        }}
      >
        Count: {Count}
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
          color: 'blue',
        }}
      >
        Score: {Score}
      </Text>
      <Button
        title="Increment Count"
        onPress={() => {
          setCount(Count + 1);
        }}
      />
      <Button
        title="Increment Score"
        onPress={() => {
          setScore(Score + 1);
        }}
      />
      <ChildComponent Score={Score} Count={Count} />
    </View>
  );
};

export default UseEffectUpdatingPhase;

const ChildComponent = ({ Score, Count }: any) => {
  useEffect(() => {
    console.log('ChildComponent Updated');
    // This effect will run whenever Score changes.
  }, [Score]);
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
          color: 'blue',
        }}
      >
        Score : {Score}
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
          color: 'blue',
        }}
      >
        Score : {Count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
