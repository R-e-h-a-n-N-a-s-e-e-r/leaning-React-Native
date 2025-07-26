import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const InputText = () => {
    const [Name, setName] = useState<string>("");
    
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: 'blue',
          textAlign: 'center',
          marginTop: 20,
        }}
      >
        Username : {Name ? Name : "Please enter your name"}
      </Text>
      
      <TextInput value={Name} onChangeText={(Value)=>setName(Value)} style={{
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        padding: 10,
        fontSize: 18,
      }}/>
      <Button title='Submit' onPress={()=>setName("")}/>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({});
