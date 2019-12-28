import React, {Component} from 'react';
import { ImageBackground, View } from 'react-native';
import { Container } from "native-base";
import logo from '../assets/transparentLogo.png';

export default class PageContainer extends Component {
  render() {
    return (
      <Container
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#32322D"
        }}
      >

        {this.props.children}

      </Container>
    );
  }
}
