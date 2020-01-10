import React, { Component } from "react";
import { ListItem, List, Text, Icon } from "native-base";
import PasswordItemSwipeRow from './PasswordItemSwipeRow';
import { home } from "../../themes/ThemeService";
import { translate } from "../../language/TranslateService";

class CategorizedSubList extends Component {
  constructor(props) {
    super(props);
  }

  renderItems = data => {
    var returnObject = data.map(element => {
      return (
          <PasswordItemSwipeRow
            key = {element.id}
            passworditem = {element}
            _key = {element.id}
            rightButtonOnPress = {this.props.deletePasswordItemDetail}
          />
      );
    });
    return returnObject;
  };

  render() {
    return (
      <List>
        <ListItem
          key = {this.props.categoryName}
          itemDivider
          style={home.categoryItemStyle}>
          <Icon
            name={translate(this.props.categoryName)}
            style={home.categoryIconStyle}/>
          <Text
            style={home.categoryTextStyle}>
            {this.props.categoryName}
          </Text>
        </ListItem>
        {this.renderItems(this.props.data)}
      </List>
    );
  }
}

export default CategorizedSubList;
