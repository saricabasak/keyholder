import React, { Component } from "react";
import { connect } from "react-redux";
import { ListItem, Left, Text, Right, Button, Icon } from "native-base";
import { password, colors } from "../../themes/ThemeService";
import { translate } from "../../language/TranslateService";

class LengthInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lengthValue : 8
    }
  }

  getValue(){
    return this.state.lengthValue;
  }

  setValue(value){
    this.setState(
      prevState => ({
        lengthValue: value
      })
    );
  }

  lengthDecrement = () => {
    let value = this.state.lengthValue - 1;
    this.setState(
      prevState => ({
        lengthValue: value
      })
    );
  }

  lengthIncrement = () => {
    let value = this.state.lengthValue + 1;
    this.setState(
      prevState => ({
        lengthValue: value
      })
    );
  }

  render() {
    return (
      <ListItem style={password.generatorItemStyle}>
        <Left>
          <Text style={password.generatorTextStyle}>
            {translate("password.length")}
          </Text>
        </Left>
        <Right style={{height:20, flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
          <Button transparent
          onPress={this.lengthDecrement}>
            <Icon name="remove"/>
          </Button>
          <Text style={password.generatorTextStyle}>
            {this.state.lengthValue}
          </Text>
          <Button transparent
          onPress={this.lengthIncrement}>
            <Icon name="add"/>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default connect(null, null, null, {forwardRef: true})(LengthInput);
