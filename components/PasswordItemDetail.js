import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {Container, Content, Form, Item, Label, Input, Button, Icon } from 'native-base';
import PasswordHeader from './PasswordHeader';

class PasswordItemDetail extends Component {
    render() {
        return (
        <Container>
          <PasswordHeader />
          <Content>
              <Form>
                  <Item floatingLabel>
                      <Label>Name</Label>
                      <Input />
                  </Item>
                  <Item floatingLabel>
                      <Label>Username</Label>
                      <Input />
                  </Item>
                  <Item floatingLabel>
                      <Label>Password</Label>
                      <Input />
                  </Item>
                  <Button rounded onPress={() => {this.props.navigation.navigate('HomePage')}}>
                      <Icon name='save' />
                  </Button>
              </Form>
          </Content>
        </Container>
        );
    }
}
export default withNavigation(PasswordItemDetail);
