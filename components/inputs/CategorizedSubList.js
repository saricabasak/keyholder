import React, { Component } from "react";
import { ListItem, List, Left, Right, Radio, Text } from "native-base";
import PasswordItemSwipeRow from './PasswordItemSwipeRow';

class CategorizedSubList extends Component {
  constructor(props) {
    super(props);
  }

  renderItems = data => {
    console.log("CategorizedSubList renderItems started");
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
    console.log("CategorizedSubList returnObject :  " + returnObject);
    return returnObject;
  };

  render() {
    return (
      <List>
        <ListItem key = {this.props.categoryName} itemDivider>
          <Text>{this.props.categoryName}</Text>
        </ListItem>
        {this.renderItems(this.props.data)}
      </List>
    );
  }
}

export default CategorizedSubList;
