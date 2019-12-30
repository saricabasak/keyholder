import React, { Component } from "react";
import {  clearAsyncStorage } from "./StorageOperations";
import { Text, Toast} from "native-base";
import {translate} from "../language/TranslateService";


export default class ResetApplication extends Component {


  reset = () => {
    //Are you sure? make popup to be sure you want to reset?
    clearAsyncStorage().then(()=> {
      this.props.onPress();
      Toast.show({
        text: translate("password.resetSuccess"),
        buttonText: translate("password.toastButton"),
        type: "success"
      });
    })
  }

  render() {
    return (
<<<<<<< HEAD
      <Text onPress={this.reset}>
        Forget master key?
=======
      <Text onPress={this.reset} style = {this.props.style}>
        Reset Application
>>>>>>> 95430f0ba3d61736a701557de223a2af20caf58a
      </Text>
    );
  }
}
