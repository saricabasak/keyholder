import React, { Component } from "react";
import { Content } from "native-base";
import { isAnyPasswordDataExistsOnStorage } from "../components/StorageOperations";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp.js";
import { Image, ImageBackground } from "react-native";
import Wallpaper from './Wallpaper';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKey: "",
      isKeyExists: false,
      firstDataForDecrypt: {}
    };
  }

  componentWillMount() {
    console.log("Login componentWillMount is running");
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
        <SignIn firstDataForDecrypt={this.state.firstDataForDecrypt} />
      );
    } else {
      renderPage = <SignUp />;
    }

    return (
      <Wallpaper>
        {renderPage}
      </Wallpaper>
    );
  }
}
