import React, { Component } from "react";
import { connect } from "react-redux";
import { CardItem, Item, Icon, Input, Textarea } from "native-base";
import { password, colors } from "../../themes/ThemeService"

class InputItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : "",
      validationValue : !this.props.required,
      borderColor : colors.validInputBorder
    }
  }

  getValue(){
    return this.state.inputValue;
  }

  setValue(value){
    this.setState({
        inputValue: value,
        validationValue:true,
        borderColor : colors.validInputBorder
      })
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
      },this.runValidation)
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

  onInputBlur = () => {
    this.runValidation();
  };

  componentWillReceiveProps (newProps) {
    if( newProps.inputValue !== this.props.inputValue ){
      this.setValue(newProps.inputValue);
    }
  }

  render() {
    return (
      <Item style={{borderColor : this.state.borderColor}}>
        <Icon
          name={this.props.iconName}
          style={password.inputIconStyle}
        />
        <Input
          autoCorrect={false}
          multiline={this.props.multiline}
          placeholder={this.props.placeholder}
          value={this.state.inputValue}
          onChangeText={this.onInputChange.bind(this)}
          onBlur={this.onInputBlur}
          placeholderTextColor={colors.placeholderTextColor}
          style={this.props.multiline ? password.multilineInputStyle : password.inputStyle}
        />
      </Item>
    )
  }
}

export default connect(null, null, null, {forwardRef: true})(InputItem);
