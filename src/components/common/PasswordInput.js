import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Input, Item } from "native-base";

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : "",
      validationValue : !this.props.required,
      borderColor : "#4B4B46",
      secureText: true
    };
  }

  getValue(){
    return this.state.inputValue;
  }

  setValue(value){
    this.setState({
      inputValue: value
      }
    );
  }

  setValidationValue(){
    this.setState({borderColor: "#4B4B46",
      validationValue: true
       }
    );
  }

  getValidation(){
    console.log("this.state.validationValue -> " + this.state.validationValue)
    return this.state.validationValue;
  }

  toggleShowKey = () => {
    this.setState({
      secureText: !this.state.secureText
    });
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
  };

  runValidation(){
    if(this.props.required && this.state.inputValue == ""){
      this.setState({
        borderColor: "red",
        validationValue: false
      });
    }else{
      this.setState({
        borderColor: "#4B4B46",
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
          style={{width:"7%", color:"#FFB61E"}}
        />
        <Input
          autoCorrect={false}
          placeholder={this.props.placeholder}
          value={this.state.inputValue}
          onChangeText={this.onInputChange.bind(this)}
          onBlur={this.onInputBlur}
          secureTextEntry={this.state.secureText}
          placeholderTextColor="#A58132"
          style={{paddingLeft: "5%", color:"#FFB61E"}}
        />
        <Button
          transparent={true}
          onPress={this.toggleShowKey}
        >
          <Icon
            name={this.state.secureText ? "ios-eye" : "ios-eye-off"}
            style={{ color: "#16ADF8" }}
          />
        </Button>
      </Item>
    );
  }
}

export default connect(null, null, null, {forwardRef: true})(PasswordInput);
