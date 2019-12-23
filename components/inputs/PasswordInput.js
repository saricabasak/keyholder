import React, { Component } from "react";
import { Button, Icon, Input,Item } from "native-base";

class PasswordInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Item error={this.props.itemErrorFlag}>
        <Input
          placeholder={this.props.inputPlaceholder}
          value={this.props.inputValue}
          onChangeText={this.props.inputOnChangeText}
          onBlur={this.props.inputOnBlur}
          secureTextEntry={this.props.inputSecureTextEntry}
        />
        <Button
          transparent={this.props.buttonTransparent}
          onPress={this.props.buttonTogglePassword}
        >
          <Icon name={this.props.iconEyeFlag ? "ios-eye" : "ios-eye-off"} />
        </Button>
      </Item>
    );
  }
}

export default PasswordInput;
