import { Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PlatformExample = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.WelcomeText}>
        {Platform.OS === 'ios' ? 'Welcome IOS User' : 'Welcome Android User'}
      </Text>
      <Text style={styles.Text}>
        {Platform.select({
          ios: 'You are using an IOS device',
          android: 'You are using an Android device',
        })}
      </Text>
    </View>
  );
};

export default PlatformExample;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.select({
      ios: '#ffffff',
      android: '#0006bbff',
    }),
  },
  WelcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Platform.OS === 'ios' ? 'green' : 'white',
  },
  Text: {
    fontSize: 20,
    fontWeight: '700',
  },
});
