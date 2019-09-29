import React, { Component } from "react";
import { Alert } from "react-native";
import { withNavigation } from "react-navigation";
import { Form, Item, Icon, Label, Input, Button } from "native-base";


class PasswordItemDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Form>
        <Item>
          <Icon name="ios-bookmark" />
          <Label>Name</Label>
          <Input
            value={this.props.passwordItem.name}
            onChangeText={this.props.onNameChange}
          />
        </Item>
        <Item inlineLabel>
          <Icon name="person" />
          <Label>Username</Label>
          <Input
            value={this.props.passwordItem.username}
            onChangeText={this.props.onUsernameChange}
          />
        </Item>
        <Item inlineLabel>
          <Icon name="key" />
          <Label>Password</Label>
          <Input
            maxLength={20}
            value={this.props.passwordItem.password}
            onChangeText={this.props.onPasswordChange}
          />
          <Button
            transparent
            onPress={() => Alert.alert('I don\'t want to bring a password into this world!')}
          >
            <Icon name="ios-create" />
          </Button>
        </Item>
      </Form>
    );
  }
}

export default withNavigation(PasswordItemDetail);
