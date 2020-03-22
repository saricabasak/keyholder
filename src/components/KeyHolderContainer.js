import React, {Component} from 'react';
import { Image, Text } from 'react-native';
import { Container } from "native-base";
import logo from '../../assets/transparentLogo.png';
import { container } from "../themes/ThemeService";
import { translate } from "../language/TranslateService";

export default class KeyHolderContainer extends Component {
  render() {
    let renderLogo;
    let renderText;
    if (this.props.isLogin) {
      renderLogo = (
        <Image
          source={logo}
          style={container.logoStyle}
          resizeMode="contain"
        />
      );
      renderText = (
        <Text style={container.titleStyle}>
          {translate("KeyHolderWelcome")}
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
