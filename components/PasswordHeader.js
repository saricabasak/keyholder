import React, { Component } from 'react';
import NavigationService from '../navigation/NavigationService.js';
import { Header, Left, Button, Icon, Body, Title, Subtitle, Right } from 'native-base';

export default class PasswordHeader extends Component {
    render() {
        return (
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => {
                  NavigationService.goBack();
                }}
              >
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Portunus</Title>
              <Subtitle>You Shall Not Pass!</Subtitle>
            </Body>
            <Right/>
          </Header>
        );
    }
}
