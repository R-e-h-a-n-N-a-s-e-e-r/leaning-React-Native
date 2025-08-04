import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const Loader = () => {
  const [Loading, setLoading] = useState(false);

  return (
    <>
      <Text style={styles.Heading}>Loader</Text>
      <View style={styles.Container}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => setLoading(!Loading)}
        >
          <Text style={styles.ButtonText}>
            {Loading ? 'Hide Loading...' : 'Show Loading'}
          </Text>
        </TouchableOpacity>
        {Loading && (
          <View style={styles.LoadingContainer}>
            <ActivityIndicator size="large" color="00c157ff" />
            <Text style={styles.LoadingText}>Loading...</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Loader;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecececff',
    alignItems: 'center',
  },
  Heading: {
    fontSize: 35,

    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  Button: {
    backgroundColor: '#00c157ff',
    padding: 20,
    borderRadius: 10,
  },
  ButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  LoadingContainer: {
    marginTop: 20,
    width: 120,
    height: 120,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 10,
    justifyContent: 'center',
  },
  LoadingText: {
    color: '#00c157ff',
    fontSize: 16,
    fontWeight: '600',
  },
});
