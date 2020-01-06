import React, { Component } from "react";
import { Button, Icon, Input, Item } from "native-base";

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validInput: true,
      secureText: true
    };
  }
  
  componentWillReceiveProps (newProps) {
    if( newProps.inputValue !== this.props.inputValue ){
      console.log("componentWillReceiveProps -> newProps.inputValue = " + newProps.inputValue + " this.props.inputValue = " + this.props.inputValue )
      this.setInputValidation(newProps.inputValue);
    }
  }

  toggleShowKey = () => {
    this.setState({
      secureText: !this.state.secureText
    });
  }

  setInputValidation = (val) => {
    console.log("val -> " + val)
    if (val == "") {
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
    this.setInputValidation(this.props.inputValue);
  };

  onChange = (value) => {
    //this.setInputValidation();
    this.props.inputOnChangeText(value);
  }

  render() {
    return (
      <Item error={!this.state.validInput} itemStyle={this.props.itemStyle} style={this.state.validInput ? this.props.style : null}>
        <Input
          placeholder={this.props.inputPlaceholder}
          placeholderTextColor="black"
          value={this.props.inputValue}
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
            style={{ color: "#FFB61E" }}
          />
        </Button>
      </Item>
    );
  }
}

export default PasswordInput;
