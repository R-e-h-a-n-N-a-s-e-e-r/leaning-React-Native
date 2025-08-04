import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const ModaldialogBox = () => {
  const [ShowDialog, setShowDialog] = useState(false);

  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => setShowDialog(true)}
      >
        <Text style={styles.ButtonText}>Show Dialog</Text>
      </TouchableOpacity>
      <Modal visible={ShowDialog} transparent={true} animationType="fade">
        <View style={styles.ModalContainer}>
          <View style={styles.InnerContainer}>
            <Text style={styles.Heading}> Dialog Box</Text>
            <Text style={styles.Text}>
              This is a Dialog Box. Press the button to close it.
            </Text>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => setShowDialog(false)}
            >
              <Text style={styles.ButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModaldialogBox;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeeeff',
  },
  Button: {
    backgroundColor: '#03dace',
    borderRadius: 10,
    // paddingVertical: 10,
    // paddingHorizontal: 10,
    padding: 10,
  },
  Heading: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
    marginBottom: 5,
  },
  ButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  ModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  InnerContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    width: '80%',
    elevation: 5,
    borderRadius: 20,
    padding: 20,
  },
  Text: {
    fontWeight: '600',
    color: 'black',
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 8,
  },
});
