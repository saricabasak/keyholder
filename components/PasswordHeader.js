import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Subtitle } from 'native-base';

export default class PasswordHeader extends Component {
    render() {
        return (
          <Header>
            <Body>
              <Title>Portunus</Title>
              <Subtitle>You Shall Not Pass!</Subtitle>
            </Body>
          </Header>
        );
    }
}
