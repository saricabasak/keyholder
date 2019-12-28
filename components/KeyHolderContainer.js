import React, {Component} from 'react';
import { Image, Text } from 'react-native';
import { Container } from "native-base";
import logo from '../assets/transparentLogo.png';

export default class KeyHolderContainer extends Component {
  render() {
    return (
      <Container
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#32322D"

        }}
      >
        <Image
          source={logo}
          style={{
            width: "40%",
            height: "40%",
            alignSelf: "center"
          }}
          resizeMode="center"
        />
        <Text
          style={{
            color: "#FFB61E",
            fontSize:20,
            fontWeight: "bold",
            alignSelf: "center"
          }}
        >
          Welcome to Key Holder!
        </Text>

        {this.props.children}

      </Container>
    );
  }
}
