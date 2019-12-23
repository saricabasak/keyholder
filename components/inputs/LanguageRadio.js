import React, { Component } from "react";
import { ListItem, Left, Right, Radio, Text } from "native-base";

class LanguageRadio extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ListItem onPress={this.props.itemOnPressed}>
        <Left>
          <Text>{this.props.leftText}</Text>
        </Left>
        <Right>
          <Radio selected={this.props.radioSelectedFlag} />
        </Right>
      </ListItem>
    );
  }
}

export default LanguageRadio;
