import React from "react";
import { connect } from "react-redux";
import PasswordItemList from "../components/PasswordItemList";
import {
  setPasswordItemArrOnStoreAction,
  setNextSequenceOnStoreAction
} from "../store/actions/PasswordItemAction";
import {
  retrieveAllData,
  retrieveNextSequenceOnStorage
} from "../components/operational/StorageOperations";
import KeyHolderHeader from "../components/KeyHolderHeader";
import {translate} from "../language/TranslateService";
import KeyHolderContainer from '../components/KeyHolderContainer';


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
      <KeyHolderContainer isLogin={false}>
        <KeyHolderHeader headerTitle={translate("home.header")}/>
        <PasswordItemList passwordItems={this.props.passwordItems} />
      </KeyHolderContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    passwordItems: state.PasswordItemReducer.PasswordItems,
    language: state.PasswordItemReducer.language
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
