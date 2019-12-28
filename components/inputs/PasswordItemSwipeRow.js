import React, { Component } from "react";
import {
  Button,
  Icon,
  Input,
  Item,
  View,
  Text,
  ListItem,
  Right
} from "native-base";
import { SwipeRow } from "react-native-swipe-list-view";
import { StyleSheet, Dimensions } from "react-native";

import PasswordItemRow from "../PasswordItemRow";

class PasswordItemSwipeRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //console.log("PasswordItemSwipeRow render started");
    //console.log("PasswordItemSwipeRow this.props.key : " + this.props._key);
    return (
      <SwipeRow
        leftOpenValue={0}
        rightOpenValue={-50}
        disableRightSwipe
        closeOnRowOpen={true}
        closeOnRowPress={true}
        closeOnScroll={true}
        closeOnRowBeginSwipe={true}
      >
        <View>
          <Button
            style={{
              justifyContent: "flex-end",
              flexDirection: "row",
              alignItems: "center"
            }}
            danger
            onPress={() => {
              this.props.rightButtonOnPress(this.props.passworditem);
            }}
          >
            <Icon name="trash" />
          </Button>
        </View>

        <View style={{ backgroundColor: "#4B4B46" }}>
          <PasswordItemRow
            key={this.props.passworditem.id}
            passworditem={this.props.passworditem}
          />
        </View>
      </SwipeRow>
    );
  }
}
export default PasswordItemSwipeRow;
