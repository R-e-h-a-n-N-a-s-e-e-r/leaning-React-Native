import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const About = (props:any) => {
  // props is an object containing all the data
  // const {username,Age}=props.route.params
  const {username}=props.route.params
  return (
    <View>
      <Text>Welcome {username}</Text>
      <Button title="Go Back" onPress={()=>props.navigation.goBack()}/>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
