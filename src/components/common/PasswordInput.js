import React, { Component } from "react";
import { connect } from "react-redux";
import { password, colors } from "../../themes/ThemeService";
import { Button, Icon, Input, Item } from "native-base";

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : "",
      validationValue : !this.props.required,
      borderColor : colors.validInputBorder,
      secureText: true
    };
  }

  getValue(){
    return this.state.inputValue;
  }

  setValue(value){
    this.setState({
      inputValue: value
    });
  }

  setValueWithValidation(value){
    this.setState({
      inputValue: value
    },this.runValidation);
  }

  getValidation(){
    if(this.state.inputValue == null || this.state.inputValue == "" ){
      return false;
    }else{
      return true;
    }
  }

  onInputChange(value) {
    this.setState({
        inputValue: value
      },
      this.runValidation
    );
  }

  onInputBlur = () => {
    this.runValidation();
  }

  toggleShowKey = () => {
    this.setState({
      secureText: !this.state.secureText
    });
  }

  runValidation(){
    if(this.props.required && this.state.inputValue == ""){
      this.setState({
        borderColor: colors.invalidInputBorder,
        validationValue: false
      });
    }else{
      this.setState({
        borderColor: colors.validInputBorder,
        validationValue: true
      });
    }
  }

  componentWillReceiveProps (newProps) {
    if( newProps.inputValue !== this.props.inputValue ){
      this.setValue(newProps.inputValue);
    }
  }

  render() {
    return (
      <Item  style={{borderColor : this.state.borderColor}}>
        <Icon
          name={this.props.iconName}
          style={password.inputIconStyle}
        />
        <Input
          autoCorrect={false}
          placeholder={this.props.placeholder}
          value={this.state.inputValue}
          onChangeText={this.onInputChange.bind(this)}
          onBlur={this.onInputBlur}
          secureTextEntry={this.state.secureText}
          placeholderTextColor={colors.placeholderTextColor}
          style={password.inputStyle}
        />
        <Button
          transparent={true}
          onPress={this.toggleShowKey}
        >
          <Icon
            name={this.state.secureText ? "ios-eye" : "ios-eye-off"}
            style={password.secureTextIconStyle}
          />
        </Button>
      </Item>
    );
  }
}

export default connect(null, null, null, {forwardRef: true})(PasswordInput);
