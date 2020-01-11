import React, { Component } from "react";
import { ListItem, Left, Right, Radio, Text } from "native-base";
import { colors, settings } from "../../themes/ThemeService";

class LanguageRadio extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ListItem
        onPress={this.props.itemOnPressed}
        style={settings.itemRowStyle}
      >
        <Left>
          <Text style={settings.itemTextStyle}>{this.props.leftText}</Text>
        </Left>
        <Right>
          <Radio
            selectedColor={colors.selectedColor}
            selected={this.props.radioSelectedFlag} />
        </Right>
      </ListItem>
    );
  }
}

export default LanguageRadio;
