import React, { Component } from "react";
import { Image } from 'react-native';
import { Header, Left, Body, Title,  Right } from "native-base";
import logo from '../../assets/transparentLogo.png';

export default class KeyHolderHeader extends Component {
  render() {
    return (
        <Header style={{backgroundColor:"#1D1D1B"}}>
          <Left>
            <Image
              style={{width: 50, height: 50}}
              source={logo}
            />
          </Left>
          <Body>
            <Title style={{color:"#D96236", fontWeight:"bold"}}>
              {this.props.headerTitle}
            </Title>
          </Body>
          <Right />
        </Header>
    );
  }
}
