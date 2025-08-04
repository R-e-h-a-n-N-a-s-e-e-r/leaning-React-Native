import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef } from 'react';

// Use Ref is used to access a DOM element directly without re-rendering the component.
// In simple words it is used to access the properties of a component without re-rendering it.


const UseRefHook = () => {
  // Ref is the insatance it means that it has all the properties of the UseRef Hook.
  const Ref = useRef<TextInput>(null);
  const HandleSubmit = () => {
    if (Ref.current) {
      // Ref.current.setNativeProps({
      //   text: 'henry',
      //   style:{
      //     color: 'red',
      //     fontSize: 20,
      //     backgroundColor: '#001581ff',
      //     fontWeight: 'bold',
      //   }
      // });
      Ref.current.focus(); // This will focus the TextInput when the button is pressed.
      
    }
  };
  return (
    <View style={styles.Container}>
      <TextInput
        ref={Ref}
        placeholder="Enter Text"
        placeholderTextColor="purple"
        style={styles.TextInput}
      />
      <TouchableOpacity style={styles.Button} onPress={HandleSubmit}>
        <Text style={styles.ButtonText}>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseRefHook;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e8e8e8ff',
  },
  TextInput: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  Button: {
    width: '100%',
    backgroundColor: '#0077ffff',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
