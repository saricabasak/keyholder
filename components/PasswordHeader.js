import React, { Component } from "react";
import NavigationService from "../navigation/NavigationService.js";
import { Container, Header, Body, Title,  Right, Content } from "native-base";

export default class PasswordHeader extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>{this.props.headerTitle}</Title>
          </Body>
          <Right />
        </Header>
        <Content>{this.props.children}</Content>
      </Container>
    );
  }
}
