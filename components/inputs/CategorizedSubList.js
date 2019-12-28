import React, { Component } from "react";
import { ListItem, List, Text, Icon } from "native-base";
import PasswordItemSwipeRow from './PasswordItemSwipeRow';
import { translate } from "../../language/TranslateService";

class CategorizedSubList extends Component {
  constructor(props) {
    super(props);
  }

  renderItems = data => {
    //console.log("CategorizedSubList renderItems started");
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
    //console.log("CategorizedSubList returnObject :  " + returnObject);
    return returnObject;
  };

  render() {
    return (
      <List>
        <ListItem
          key = {this.props.categoryName}
          itemDivider
          style={{backgroundColor:"#32322D"}}>
          <Icon
            name={translate(this.props.categoryName)}
            style={{width:"10%", color:"#FFB61E"}}/>
          <Text
            style={{color:"#FFB61E", fontWeight:"bold"}}>
            {this.props.categoryName}
          </Text>
        </ListItem>
        {this.renderItems(this.props.data)}
      </List>
    );
  }
}

export default CategorizedSubList;
