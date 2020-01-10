import React, {Component} from 'react';
import { Image, Text } from 'react-native';
import { Container } from "native-base";
import logo from '../../assets/transparentLogo.png';
import { container } from "../themes/ThemeService";

export default class KeyHolderContainer extends Component {
  render() {
    console.log(this.props.isLogin);
    let renderLogo;
    let renderText;
    if (this.props.isLogin) {
      renderLogo = (
        <Image
          source={logo}
          style={container.logoStyle}
          resizeMode="center"
        />
      );
      renderText = (
        <Text style={container.titleStyle}>
          Welcome to Key Holder!
        </Text>
      );
    }

    return (
      <Container style={container.containerStyle}>
        {renderLogo}
        {renderText}
        {this.props.children}
      </Container>
    );
  }
}
