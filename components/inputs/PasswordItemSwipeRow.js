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

import PasswordItem from "../PasswordItem";

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

        <View style={{ backgroundColor: "white" }}>
          <PasswordItem
            key={this.props.passworditem.id}
            passworditem={this.props.passworditem}
          />
        </View>
      </SwipeRow>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  standalone: {
    marginTop: 30,
    marginBottom: 30
  },
  standaloneRowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    justifyContent: "center",
    height: 50
  },
  standaloneRowBack: {
    alignItems: "center",
    backgroundColor: "#8BC645",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  backTextWhite: {
    color: "#FFF"
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0
  },
  controls: {
    alignItems: "center",
    marginBottom: 30
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5
  },
  switch: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
    width: Dimensions.get("window").width / 4
  },
  trash: {
    height: 25,
    width: 25
  }
});

export default PasswordItemSwipeRow;
