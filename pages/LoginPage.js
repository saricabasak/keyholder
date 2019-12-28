import React, { Component } from "react";
import { Content } from "native-base";
import { isAnyPasswordDataExistsOnStorage } from "../components/StorageOperations";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage.js";
import KeyHolderContainer from '../components/KeyHolderContainer';
//import { clearAsyncStorage } from "../components/StorageOperations";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKey: "",
      isKeyExists: false,
      firstDataForDecrypt: {}
    };
  }

  resetApp =()=>{
    this.setState({
      masterKey: "",
      isKeyExists: false,
      firstDataForDecrypt: {}
    })
  }

  componentWillMount() {
    //clearAsyncStorage();
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
