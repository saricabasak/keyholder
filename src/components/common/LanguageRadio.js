import React, { Component } from "react";
import { ListItem, Left, Right, Radio, Text } from "native-base";

class LanguageRadio extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ListItem onPress={this.props.itemOnPressed} style={{borderColor : "#32322D" }}>
        <Left>
          <Text>{this.props.leftText}</Text>
        </Left>
        <Right>
          <Radio
            selectedColor={"#FFB61E"}
            selected={this.props.radioSelectedFlag} />
        </Right>
      </ListItem>
    );
  }
}

export default LanguageRadio;
