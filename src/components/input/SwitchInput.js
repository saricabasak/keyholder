import React, { Component } from "react";
import { connect } from "react-redux";
import { ListItem, Left, Text, Right, Switch } from "native-base";
import { password, colors } from "../../themes/ThemeService"

class SwitchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: true
    }
  }

  getValue(){
    return this.state.switchValue;
  }

  setValue(value){
    this.setState({
        switchValue: value
      })
  }

  onSwitchChange(value) {
    this.setState({
        switchValue: value
      })
  }

  render() {
    return (
      <ListItem style={password.generatorItemStyle}>
        <Left>
          <Text style={password.generatorTextStyle}>
            {this.props.name}
          </Text>
        </Left>
        <Right>
          <Switch
            value={this.state.switchValue}
            onValueChange={this.onSwitchChange.bind(this)}
            trackColor={{
              true: colors.switchTrueColor,
              false: colors.switchFalseColor
            }}
          />
        </Right>
      </ListItem>
    )
  }
}

export default connect(null, null, null, {forwardRef: true})(SwitchInput);
