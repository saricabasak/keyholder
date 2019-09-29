import React, { Component } from 'react';
import { Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Form, Item, Icon, Label, Input, Button } from 'native-base';

class PasswordItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.getParam('name', ''),
      username: this.props.navigation.getParam('username', ''),
      password: this.props.navigation.getParam('password', '')
    };
  }
  onNameChange(value: string) {
    this.setState({
      name: value
    });
  }
  onUsernameChange(value: string) {
    this.setState({
      username: value
    });
  }
  onPasswordChange(value: string) {
    this.setState({
      password: value
    });
  }

  render() {
        return (
              <Form>
                  <Item>
                      <Icon name='ios-bookmark' />
                      <Label>Name</Label>
                      <Input
                        value = {this.state.name}
                        onChangeText = {this.onNameChange.bind(this)}
                      />
                  </Item>
                  <Item inlineLabel>
                      <Icon name='person' />
                      <Label>Username</Label>
                      <Input
                        value = {this.state.username}
                        onChangeText = {this.onUsernameChange.bind(this)}
                      />
                  </Item>
                  <Item inlineLabel>
                      <Icon name='key' />
                      <Label>Password</Label>
                      <Input
                        maxLength = {20}
                        value = {this.state.password}
                        onChangeText = {this.onPasswordChange.bind(this)}
                      />
                      <Button
                        transparent
                        onPress={() => Alert.alert('I don\'t want to bring a password into this world!')}
                      >
                        <Icon name='ios-create'/>
                      </Button>
                  </Item>
              </Form>
        );
    }
}
export default withNavigation(PasswordItemDetail);
