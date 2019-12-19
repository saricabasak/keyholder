import React, { Component } from "react";
import NavigationService from "../navigation/NavigationService.js";
import {
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Subtitle,
  Right
} from "native-base";
import { Container, View } from "native-base";

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
        {this.props.children}
      </Container>
    );
  }
}
