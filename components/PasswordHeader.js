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
  /*
  <Button
                transparent
                onPress={() => {
                  NavigationService.goBack();
                }}
              >
                <Icon name='arrow-back' />
              </Button>*/

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Portunus</Title>
            <Subtitle>You Shall Not Pass!</Subtitle>
          </Body>
          <Right />
        </Header>
        {this.props.children}
      </Container>
    );
  }
}
