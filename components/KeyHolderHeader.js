import React, { Component } from "react";
import { Header, Body, Title,  Right } from "native-base";

export default class KeyHolderHeader extends Component {
  render() {
    return (
        <Header>
          <Body>
            <Title>{this.props.headerTitle}</Title>
          </Body>
          <Right />
        </Header>
    );
  }
}
