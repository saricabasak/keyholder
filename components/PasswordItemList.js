import React, { Component } from "react";
import { View, Button, Icon } from "native-base";
import { connect } from "react-redux";
import { FlatList } from "react-native";
import PasswordItem from "./PasswordItem";
import { SwipeListView } from "react-native-swipe-list-view";
import { deletePasswordItemArrOnStoreAction } from "../store/actions/PasswordItemAction";

class PasswordItemList extends Component {
  deletePasswordItemDetail = passwordItem => {
    this.props.deletePasswordItemArrOnStore(passwordItem);
  };

  render() {
    return (
      <SwipeListView
        data={this.props.passwordItems}
        keyExtractor={(rowData, index) => {
          return rowData.id.toString();
        }}
        renderItem={(rowData, rowMap) => (
          <View
            style={{
              backgroundColor: "white"
            }}
          >
            <PasswordItem key={rowData.item.id} passworditem={rowData.item} />
          </View>
        )}
        renderHiddenItem={(rowData, rowMap) => (
          <Button
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end"
            }}
            danger
            onPress={() => {
              this.deletePasswordItemDetail(rowData.item);
            }}
          >
            <Icon name="trash" />
          </Button>
        )}
        leftOpenValue={0}
        rightOpenValue={-50}
        disableRightSwipe
        closeOnRowOpen={true}
        closeOnRowPress={true}
        closeOnScroll={true}
        closeOnRowBeginSwipe={true}
        
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePasswordItemArrOnStore: data =>
      dispatch(deletePasswordItemArrOnStoreAction(data))
  };
};

export default connect(null, mapDispatchToProps)(PasswordItemList);
