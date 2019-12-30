import React, { Component } from "react";
import {
  Item,
  Input,
  Button,
  Text,
  Toast,
  Content,
  Icon,
  Container,
  View
} from "native-base";
import PasswordInput from "../components/inputs/PasswordInput";
import { withNavigation } from "react-navigation";
import { decrypt } from "../components/Encryption";
import { connect } from "react-redux";
import { setMasterKeyAction } from "../store/actions/PasswordItemAction";
import { translate } from "../language/TranslateService";
import ResetApplication from "../components/ResetApplication";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  DialogFooter
} from "react-native-popup-dialog";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKey: "",
      secureText: true,
      visible: false
    };
    this.onMasterKeyInputChange = this.onMasterKeyInputChange.bind(this);
  }

  onMasterKeyInputChange(value) {
    this.setState({
      masterKey: value
    });
  }

  onEnterMasterKeyProcessButton = () => {
    let decryptedPassword = decrypt(
      this.props.firstDataForDecrypt.password,
      this.state.masterKey
    );
    console.log("SignInPage decryptedPassword -> " + decryptedPassword);
    if (!decryptedPassword) {
      Toast.show({
        text: translate("signIn.passwordError"),
        buttonText: translate("signIn.toastButton"),
        type: "danger"
      });
    } else {
      this.props.setMasterKey(this.state.masterKey);
      this.props.navigation.navigate(translate("pages.home"));
    }
  };

  toggleShowPassword() {
    this.setState({
      secureText: !this.state.secureText
    });
  }

  onPressedResetDialog = () => {
    this.setState({ visible: true });
  };
  reset = () => {
    //Are you sure? make popup to be sure you want to reset?
    clearAsyncStorage().then(() => {
      this.props.onPress();
      Toast.show({
        text: translate("password.resetSuccess"),
        buttonText: translate("password.toastButton"),
        type: "success"
      });
    });
  };

  render() {
    return (
      <Content
        contentContainerStyle={{
          margin: 10,
          justifyContent: "center",
          flex: 1
        }}
      >
        <PasswordInput
          itemStyle={{ margin: 5, backgroundColor: "#EBDFDD", opacity: 0.5 }}
          itemErrorFlag={false}
          inputPlaceholder={translate("signIn.passwordInput")}
          inputValue={this.state.masterKey}
          inputOnChangeText={this.onMasterKeyInputChange}
          inputSecureTextEntry={this.state.secureText}
          buttonTransparent={true}
          buttonTogglePassword={this.toggleShowPassword.bind(this)}
          iconEyeFlag={this.state.secureText}
        />
        <Button
          onPress={this.onEnterMasterKeyProcessButton}
          style={{
            margin: 5,
            backgroundColor: "#D96236",
            justifyContent: "center"
          }}
        >
          <Text style={{color:"#C8C8BE"}}>
            {translate("signIn.signInButton")}
          </Text>
        </Button>
        <Button
          onPress={this.onPressedResetDialog}
          style={{
            margin: 5,
            backgroundColor: "#D96236",
            justifyContent: "center"
          }}
        >
          <Text>{translate("signIn.resetButton")}</Text>
        </Button>
        <Dialog
          dialogTitle={<DialogTitle title= {translate("signIn.resetTitle")} />}
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
          footer={
            <DialogFooter>
              <DialogButton
                text={translate("signIn.resetCancel")}
                onPress={() => {
                  this.setState({ visible: false });
                }}
              />
              <DialogButton text={translate("signIn.resetOk")} onPress={this.reset} />
            </DialogFooter>
          }
        >
          <DialogContent>
            <Text>
              {translate("signIn.resetContent")}
            </Text>
          </DialogContent>
        </Dialog>
      </Content>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMasterKey: data => dispatch(setMasterKeyAction(data))
  };
};

export default connect(null, mapDispatchToProps)(withNavigation(SignInPage));
