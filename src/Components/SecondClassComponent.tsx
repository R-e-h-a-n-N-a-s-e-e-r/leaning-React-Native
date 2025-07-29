import { Button, Text, View } from "react-native";
import React, { Component } from "react";

type State = {
  Name: string;
};

interface Props {
  Age: number;
}

export class SecondClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      Name: 'John',
    };
  }
  UpdateName = () => {
    this.setState({
      Name: 'Doe',
    });
  };
  render(): React.ReactNode {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            margin: 10,
            fontWeight: "bold",
            color: "#555",
          }}
        >
          Name : {this.state.Name} , Age: {this.props.Age}
        </Text>
        <Button title="Press" onPress={this.UpdateName} />
      </View>
    );
  }
}