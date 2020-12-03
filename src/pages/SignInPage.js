import React, { Component } from "react";
import {
  Button,
  Text,
  Toast,
} from "native-base";
import KeyHolderContent from "../components/KeyHolderContent";
import PasswordInput from "../components/common/PasswordInput";
import { withNavigation } from "react-navigation";
import { decrypt } from "../components/operational/Encryption";
import { connect } from "react-redux";
import { setMasterKeyAction } from "../store/actions/PasswordItemAction";
import { login } from "../themes/ThemeService";
import { translate } from "../language/TranslateService";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  DialogFooter
} from "react-native-popup-dialog";
import { KeyboardAvoidingView } from 'react-native';
import {clearAsyncStorage} from '../components/operational/StorageOperations';

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onEnterMasterKeyProcessButton = () => {
    let decryptedPassword = decrypt(
      this.props.firstDataForDecrypt.password,
      this.refs.passwordInput.getValue()
    );
    if (!decryptedPassword) {
      Toast.show({
        text: translate("signIn.passwordError"),
        buttonText: translate("signIn.toastButton"),
        type: "danger"
      });
    } else {
      this.props.setMasterKey(this.refs.passwordInput.getValue());
      this.props.navigation.navigate(translate("pages.home"));
    }
  };

  onPressedResetDialog = () => {
    this.setState({ visible: true });
  };

  reset = () => {
    this.setState({ visible: false });
    //Are you sure? make popup to be sure you want to reset?
    clearAsyncStorage().then(() => {
      this.props.onPressedReset();
      Toast.show({
        text: translate("password.resetSuccess"),
        buttonText: translate("password.toastButton"),
        type: "success"
      });
    });
  };

  render() {
    return (
      <KeyHolderContent justifyContent="center">
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={login.KeyboardAvoidingViewStyle}
        >
          <PasswordInput
          iconName="key"
          ref="passwordInput"
          placeholder={translate("signIn.passwordInput")}
          required={true}
        />
        <Button
          onPress={this.onEnterMasterKeyProcessButton}
          style={login.buttonStyle}
        >
          <Text style={login.buttonTextStyle}>
            {translate("signIn.signInButton")}
          </Text>
        </Button>
        <Button
          transparent
          style={login.transparentButtonStyle}
          onPress={this.onPressedResetDialog}
        >
          <Text style={login.textStyle}>
            {translate("signIn.resetButton")}
          </Text>
        </Button>
        </KeyboardAvoidingView>
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
              <DialogButton
                text={translate("signIn.resetOk")}
                onPress={this.reset}
              />
            </DialogFooter>
          }
        >
          <DialogContent>
            <Text>
              {translate("signIn.resetContent")}
            </Text>
          </DialogContent>
        </Dialog>
      </KeyHolderContent>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMasterKey: data => dispatch(setMasterKeyAction(data))
  };
};

export default connect(null, mapDispatchToProps)(withNavigation(SignInPage));
