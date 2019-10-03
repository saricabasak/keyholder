import React, { Component } from "react";
import { View, Button, Icon } from "native-base";
import { connect } from "react-redux";
import { FlatList } from 'react-native';
import PasswordItem from "./PasswordItem";
import { SwipeListView } from 'react-native-swipe-list-view';
import { deletePasswordItemArrOnStoreAction } from "../store/actions/PasswordItemAction";

class PasswordItemList extends Component {

  deletePasswordItemDetail = (passwordItem) => {
      console.log("deletePasswordItemDetail" + JSON.stringify(passwordItem));
      this.props.deletePasswordItemArrOnStore(passwordItem);
  };

  render() {
    console.log("PasswordItemList - render - " + JSON.stringify(this.props.passwordItems));
    return (
      <SwipeListView
        data={this.props.passwordItems}
        keyExtractor = {(rowData,index) => {
          return rowData.id.toString();
        }}
        renderItem = { (rowData, rowMap) => (
          <View 
            style={{
              backgroundColor: 'white'
            }}
          >
            <PasswordItem
              key = {rowData.item.id}
              passworditem={rowData.item}
            />
          </View>
        )}
        renderHiddenItem = { (rowData, rowMap) => (
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <View/> 
            <View>
              <Button 
                danger 
                onPress={() => {this.deletePasswordItemDetail(rowData.item)}}
              >
                <Icon name="trash" />
              </Button>
            </View>
          </View>
        )}
        leftOpenValue = {0}
        rightOpenValue = {-50}
        closeOnRowOpen = {true}
        closeOnRowPress = {true}
        closeOnScroll = {true}
        closeOnRowBeginSwipe = {true}
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
