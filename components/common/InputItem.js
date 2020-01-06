import React, { Component } from "react";
import { connect } from "react-redux";
import { CardItem, Item, Icon, Input } from "native-base";

class InputItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : "",
      borderColor: "#32322D"
    }
  }

  getValue(){
    return this.state.inputValue;
  }

  onInputChange(value) {
    console.log("onInputChange" + this.state.inputValue);
    this.setState(
      prevState => ({
        inputValue: value
      }),
      this.runValidation
    );
  }

  runValidation(){
    console.log("validation" + this.props.required);
    if(this.props.required && this.state.inputValue == ""){
      this.setState({
        borderColor: "red"
      });
    }else{
      this.setState({
        borderColor: "#32322D"
      });
    }
  }

  onInputBlur = () => {
    this.runValidation();
  };

  render() {
    return (
      <CardItem style={{backgroundColor:"#4B4B46"}}>
        <Item style={{borderColor : this.state.borderColor}}>
          <Icon name={this.props.iconName} style={{color:"#FFB61E"}}/>
          <Input
            placeholder={this.props.placeholder}
            value={this.state.inputValue}
            onChangeText={this.onInputChange.bind(this)}
            onBlur={this.onInputBlur}
            placeholderTextColor="#A58132"
            style={{color:"#FFB61E"}}
          />
        </Item>
      </CardItem>
    )
  }
}

export default connect(null, null, null, {forwardRef: true})(InputItem);
