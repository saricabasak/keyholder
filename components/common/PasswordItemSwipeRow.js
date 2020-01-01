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
        <View style={styles.standaloneRowBack}>
          <Text>Left</Text>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => this.props.rightButtonOnPress(this.props.passworditem)}
          >
            <Icon name="trash" />
          </TouchableOpacity>
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
const styles = StyleSheet.create({
  standaloneRowBack: {
    alignItems: "center",
    backgroundColor: "#D96236",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75
  },
  backRightBtnRight: {
    backgroundColor: "#D96236",
    right: 0
  }
});
export default PasswordItemSwipeRow;
