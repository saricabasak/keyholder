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
      <Text onPress={this.reset}>
        Forget master key?
      </Text>
    );
  }
}
