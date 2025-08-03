import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ButtonwithStyle = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.Title}>Button with Style</Text>

      {/* Simple Button */}
      <Text style={styles.Description}>
        We cannot do custom styling in this button, it is a simple Button.
      </Text>
      <Button title="Simple Button" color="red" />

      {/* TouchableOpacity Button (fully customizable) */}

      <Text style={styles.Description}>
        We can style this button using TouchableOpacity. On click, it becomes
        transparent.
      </Text>

      <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
        <Text style={styles.ButtonText}>Touchable Opacity</Text>
      </TouchableOpacity>

      {/* TouchableHighlight Button (highlight effect on press) */}

      <Text style={styles.Description}>
        We can style this button using TouchableHighlight. On click, it becomes
        highlighted. It won't work without OnPress function.
      </Text>

      <TouchableHighlight
        style={styles.Button}
        onPress={() => {}}
        underlayColor="#3c006aff"
      >
        <Text style={styles.ButtonText}>Touchable Highlight</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ButtonwithStyle;

const styles = StyleSheet.create({
  Title: {
    fontSize: 40,
    color: 'blue',
    textAlign: 'center',
    marginVertical: 20,
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  Description: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  Button: {
    borderRadius: 20,
    backgroundColor: '#4E31AA',
    padding: 20,
    marginTop: 20,
    elevation: 5, // Android shadow effect
  },
  ButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
