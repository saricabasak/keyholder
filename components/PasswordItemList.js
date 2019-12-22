import React, { Component } from "react";
import { View, Button, Icon, Toast } from "native-base";
import { connect } from "react-redux";
import { FlatList } from "react-native";
import PasswordItem from "./PasswordItem";
import { SwipeListView } from "react-native-swipe-list-view";
import {translate} from "../language/TranslateService";
import { deletePasswordItemArrOnStoreAction } from "../store/actions/PasswordItemAction";

class PasswordItemList extends Component {
  deletePasswordItemDetail = passwordItem => {
    this.props.deletePasswordItemArrOnStore(passwordItem);
  };

  componentDidMount(){
    console.log(this.props.passwordItems);
    const items = this.props.passwordItems;
    if (!(Array.isArray(items) && items.length)) {
      Toast.show({
        text: translate("password.addHint"),
        buttonText: translate("password.addHintButton"),
        duration: 5000
      });
    }
  }

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
              justifyContent: "space-between"
            }}
            danger
            onPress={() => {
              this.deletePasswordItemDetail(rowData.item);
            }}
          >
            <Icon name="trash" />
          </Button>
        )}
        leftOpenValue={50}
        rightOpenValue={0}
        disableLeftSwipe
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
