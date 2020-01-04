import React, { Component } from "react";
import { Button, Icon, Input, Item } from "native-base";

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      validInput: true,
      secureText: true
    };
  }

  toggleShowKey() {
    this.setState({
      secureText: !this.state.secureText
    });
  }

  setInputValidation = () => {
    if (this.state.inputValue == "") {
      this.setState({
        validInput: false
      });
    } else {
      this.setState({
        validInput: true
      });
    }
  };

  onBlur = () => {
    this.setInputValidation();
  };

  onChange = (value) => {
    this.setState({
      inputValue: value
    }, this.setInputValidation)
    this.props.inputOnChangeText(value);
  }

  render() {
    return (
      <Item error={!this.state.validInput} itemStyle={this.props.itemStyle} style={this.state.validInput ? this.props.style : null}>
        <Input
          placeholder={this.props.inputPlaceholder}
          placeholderTextColor="black"
          value={this.state.inputValue}
          onChangeText={this.onChange}
          onBlur={this.onBlur}
          secureTextEntry={this.state.secureText}
        />
        <Button
          transparent={this.props.buttonTransparent}
          onPress={this.toggleShowKey}
        >
          <Icon
            name={this.state.secureText ? "ios-eye" : "ios-eye-off"}
            style={{ color: "#21638C" }}
          />
        </Button>
      </Item>
    );
  }
}

export default PasswordInput;
