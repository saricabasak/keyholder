import React from "react";
import { connect } from "react-redux";
import PasswordItemList from "../components/PasswordItemList";
import { setPasswordItemArrOnStoreAction } from "../store/actions/PasswordItemAction";
import {
  retrieveAllData,
  clearAsyncStorage
} from "../components/StorageOperations";

class HomePage extends React.Component {
  componentWillMount() {
    /*
    1. uygulama ayağa kalkarken list page ekrana gelir. Bu component mount olmadan storagedan tüm passwordler çekilir.
    2. Çekilen passwordler redux ile global stora konur.
    */

    /* Data bozulduğunda storage daki datayı temizlemek için aşağıdaki komut tek seferliğine açılır */
    // clearAsyncStorage();

    retrieveAllData().then(passwordItemArr => {
      this.props.setPasswordItemArrOnStore(passwordItemArr);
    });
  }

  render() {
    console.log(
      "HomePage render passwordItems ->>>" +
        JSON.stringify(this.props.passwordItems)
    );
    return <PasswordItemList passwordItems={this.props.passwordItems} />;
  }
}

const mapStateToProps = state => {
  return {
    passwordItems: state.PasswordItemReducer.PasswordItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPasswordItemArrOnStore: data =>
      dispatch(setPasswordItemArrOnStoreAction(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
