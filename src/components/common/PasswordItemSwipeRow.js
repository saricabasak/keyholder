import React, { Component } from "react";
import {
  Button,
  Icon,
  Input,
  Item,
  View,
  Text,
  ListItem,
  Right,
  Left
} from "native-base";
import { home } from "../../themes/ThemeService";
import { SwipeRow } from "react-native-swipe-list-view";
import { StyleSheet, Dimensions,TouchableOpacity } from "react-native";

import PasswordItemRow from "../PasswordItemRow";

class PasswordItemSwipeRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SwipeRow
        leftOpenValue={0}
        rightOpenValue={-75}
        disableRightSwipe
        closeOnRowOpen={true}
        closeOnRowPress={true}
        closeOnScroll={true}
        closeOnRowBeginSwipe={true}
      >
        <View style={home.swipeRowViewStyle}>
          <Text>Left</Text>
          <TouchableOpacity
            style={home.swipeRowStyle}
            onPress={() =>
              this.props.rightButtonOnPress(
                this.props.passworditem)}
          >
            <Icon name="trash" />
          </TouchableOpacity>
        </View>

        <View style={home.itemRowViewStyle}>
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
