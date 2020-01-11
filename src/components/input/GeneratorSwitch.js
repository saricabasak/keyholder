import React, { Component } from "react";
import { connect } from "react-redux";
import { Item, Left, Text, Right, Switch } from "native-base";
import { password, colors } from "../../themes/ThemeService"

class GeneratorSwitch extends Component {
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
    this.setState(
      prevState => ({
        switchValue: value
      })
    );
  }

  onSwitchChange(value) {
    this.setState(
      prevState => ({
        switchValue: value
      })
    );
  }

  componentWillReceiveProps (newProps) {
    if( newProps.switchValue !== this.props.switchValue ){
      this.setValue(newProps.switchValue);
    }
  }

  render() {
    return (
      <Item style={password.generatorItemStyle}>
        <Left>
          <Text style={password.generatorTextStyle}>
            {translate("password.digit")}
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
      </Item>
    )
  }
}

export default connect(null, null, null, {forwardRef: true})(InputItem);
