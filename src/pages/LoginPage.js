import React, { Component } from "react";
import { Content } from "native-base";
import { isAnyPasswordDataExistsOnStorage } from "../components/operational/StorageOperations";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage.js";
import KeyHolderContainer from '../components/KeyHolderContainer';
import { connect } from "react-redux";
import { updateLanguageAction,updateThemeAction } from "../store/actions/PasswordItemAction";
//import { clearAsyncStorage } from "../components/StorageOperations";
import {
  retrieveLanguageOnStorage,retrieveThemeOnStorage
} from "../components/operational/StorageOperations";
import {initialLanguage, initialTheme} from '../components/common/DefaultValues';

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
    this.props.updateThemeOnStore(initialTheme);
    this.setState({
      isKeyExists: false,
      firstDataForDecrypt: {}
    })
  }

  componentWillMount() {
    retrieveLanguageOnStorage().then(res => {
      this.props.updateLanguageOnStore(res);
    });
    retrieveThemeOnStorage().then(res => {
      console.log("retrieveThemeOnStorage theme: " + res)
      this.props.updateThemeOnStore(res);
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
        <SignInPage
          firstDataForDecrypt={this.state.firstDataForDecrypt}
          onPressedReset = {this.resetApp}
        />
      );
    } else {
      renderPage = <SignUpPage />;
    }

    return (
      <KeyHolderContainer isLogin={true}>
        {renderPage}
      </KeyHolderContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLanguageOnStore: data => dispatch(updateLanguageAction(data)),
    updateThemeOnStore: data => dispatch(updateThemeAction(data))
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
