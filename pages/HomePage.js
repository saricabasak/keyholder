import React from "react";
import { connect } from "react-redux";
import PasswordItemList from "../components/PasswordItemList";
import {
  setPasswordItemArrOnStoreAction,
  setNextSequenceOnStoreAction
} from "../store/actions/PasswordItemAction";
import {
  retrieveAllData,
  clearAsyncStorage,
  retrieveNextSequenceOnStorage
} from "../components/StorageOperations";
import PasswordHeader from "../components/PasswordHeader";
import {translate} from "../language/TranslateService";


class HomePage extends React.Component {
  componentWillMount() {
    //clearAsyncStorage();
    retrieveAllData().then(passwordItemArr => {
      this.props.setPasswordItemArrOnStore(passwordItemArr);
    });
    retrieveNextSequenceOnStorage().then(sequence => {
      this.props.setNextSequenceOnStore(sequence);
    });
  }

  render() {
    return (
      <PasswordHeader headerTitle={translate("home.header")}>
        <PasswordItemList passwordItems={this.props.passwordItems} />
      </PasswordHeader>
    );
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
      dispatch(setPasswordItemArrOnStoreAction(data)),
    setNextSequenceOnStore: data =>
      dispatch(setNextSequenceOnStoreAction(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
