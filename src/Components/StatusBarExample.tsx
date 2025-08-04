import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const StatusBarExample = () => {
  return (
    <View style={styles.Container}>
      <StatusBar
      barStyle={"light-content"}
      backgroundColor="rgba(0, 0, 0, 0.2)"
      translucent={true} // This makes the status bar transparent
      hidden={false} 
      />
      <Text style={styles.Text}>StatusBar</Text>
    </View>
  );
};

export default StatusBarExample;

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d36a8ff" 
  },
  Text:{
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  }
});
