import React, { Component } from "react";
import { Content } from "native-base";
import { isAnyPasswordDataExistsOnStorage } from "../components/StorageOperations";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage.js";
import KeyHolderContainer from '../components/KeyHolderContainer';
import { connect } from "react-redux";
import { updateLanguageAction } from "../store/actions/PasswordItemAction";
//import { clearAsyncStorage } from "../components/StorageOperations";
import {
  retrieveLanguageOnStorage
} from "../components/StorageOperations";
import {initialLanguage} from '../components/common/DefaultValues';

 class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isKeyExists: false,
      firstDataForDecrypt: {}
    };
  }

  resetApp =()=>{
    this.props.updateLanguageOnStore(initialLanguage);
    this.setState({
      isKeyExists: false,
      firstDataForDecrypt: {}
    })
  }
  
  componentWillMount() {
    //clearAsyncStorage();
    retrieveLanguageOnStorage().then(res => {
      this.props.updateLanguageOnStore(res);
    });

    isAnyPasswordDataExistsOnStorage().then(response => {
      if (response) {
        this.setState({
          isKeyExists: response.isKeyExists,
          firstDataForDecrypt: response.data[0]
        });
      }
    });
  }
  render() {
    const isKeyExists = this.state.isKeyExists;
    let renderPage;
    if (isKeyExists) {
      renderPage = (
        <SignInPage firstDataForDecrypt={this.state.firstDataForDecrypt} onPressedReset = {this.resetApp} />
      );
    } else {
      renderPage = <SignUpPage />;
    }

    return (
      <KeyHolderContainer>
        {renderPage}
      </KeyHolderContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLanguageOnStore: data => dispatch(updateLanguageAction(data))
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
