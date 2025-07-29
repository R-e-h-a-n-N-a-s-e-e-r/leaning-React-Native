import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SecondClassComponent } from './SecondClassComponent';

export class ClassComponent extends Component {
  render(): React.ReactNode {
    const Age = 25;
    return (
      <View>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            margin: 10,
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          This is a Class Component
        </Text>
        <SecondClassComponent Age={Age} />
      </View>
    );
  }
}