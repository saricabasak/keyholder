import React, { Component } from "react";
import { connect } from "react-redux";
import { CardItem, Item, Icon, Input } from "native-base";

class InputItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : "",
      validationValue : !this.props.required,
      borderColor : "#4B4B46"
    }
  }

  getValue(){
    return this.state.inputValue;
  }

  setValue(value){
    this.setState(
      prevState => ({
        inputValue: value
      })
    );
  }

  getValidation(){
    return this.state.validationValue;
  }

  onInputChange(value) {
    this.setState(
      prevState => ({
        inputValue: value
      }),
      this.runValidation
    );
  }

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
          <Icon name={this.props.iconName} style={{width:"5%", color:"#FFB61E"}}/>
          <Input
            autoCorrect={false}
            placeholder={this.props.placeholder}
            value={this.state.inputValue}
            onChangeText={this.onInputChange.bind(this)}
            onBlur={this.onInputBlur}
            placeholderTextColor="#A58132"
            style={{paddingLeft: "5%", color:"#FFB61E"}}
          />
        </Item>
    )
  }
}

export default connect(null, null, null, {forwardRef: true})(InputItem);
