import React, { Component } from "react";
import { Content } from "native-base";
import { connect } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";
import { translate } from "../language/TranslateService";
import { deletePasswordItemArrOnStoreAction } from "../store/actions/PasswordItemAction";
import CategorizedSubList from "./inputs/CategorizedSubList";

var _ = require("lodash");

class PasswordItemList extends Component {
  deletePasswordItemDetail = passwordItem => {
    this.props.deletePasswordItemArrOnStore(passwordItem);
  };

  renderCategories = () => {
    //console.log("renderCategories started")
    var uniqueArray = _.uniq(_.map(this.props.passwordItems, "category"));
    //console.log("renderCategories uniqueArray: " + JSON.stringify(uniqueArray))
    var returnObject  = uniqueArray.map(uniq => {
      //console.log("renderCategories forEach: " + uniq)
      data = _.filter(this.props.passwordItems,(e) => e.category == uniq);
      //console.log("renderCategories CategorizedSubList data: " + JSON.stringify(data))
      return (
        <CategorizedSubList
          key = {uniq}
          data={data}
          categoryName = {translate("password.category." + uniq)}
          deletePasswordItemDetail={this.deletePasswordItemDetail}
        />
      );
    });
    return returnObject;
  };

  render() {
    return <Content>{this.renderCategories()}</Content>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePasswordItemArrOnStore: data =>
      dispatch(deletePasswordItemArrOnStoreAction(data))
  };
};

export default connect(null, mapDispatchToProps)(PasswordItemList);
