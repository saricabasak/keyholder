import React, { Component } from "react";
import { Image } from 'react-native';
import { Header, Left, Body, Title,  Right } from "native-base";
import logo from '../../assets/transparentLogo.png';
import { header } from "../themes/ThemeService";
import { translate } from "../language/TranslateService";

export default class KeyHolderHeader extends Component {
  render() {
    return (
        <Header style={header.headerStyle}>
          <Left>
            <Image
              style={header.logoStyle}
              source={logo}
            />
          </Left>
          <Body>
            <Title style={header.titleStyle}>
              {translate("KeyHolderHeader")}
            </Title>
          </Body>
          <Right />
        </Header>
    );
  }
}
