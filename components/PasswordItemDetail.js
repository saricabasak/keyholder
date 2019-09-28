import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Content, Form, Item, Label, Input, Button, Icon } from 'native-base';
import PasswordHeader from './PasswordHeader';

class PasswordItemDetail extends Component {
    render() {
        return (
          <Content>
              <Form>
                  <Item floatingLabel>
                      <Label>Name</Label>
                      <Input value = {this.props.navigation.getParam('name', '')} />
                  </Item>
                  <Item floatingLabel>
                      <Label>Username</Label>
                      <Input value = {this.props.navigation.getParam('username', '')} />
                  </Item>
                  <Item floatingLabel>
                      <Label>Password</Label>
                      <Input value = {this.props.navigation.getParam('password', '')} />
                  </Item>
                  <Button rounded onPress={() => {this.props.navigation.navigate('HomePage')}}>
                      <Icon name='save' />
                  </Button>
              </Form>
          </Content>
        );
    }
}
export default withNavigation(PasswordItemDetail);
