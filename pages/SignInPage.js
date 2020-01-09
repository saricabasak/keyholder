import React, { Component } from "react";
import {
  Item,
  Input,
  Button,
  Text,
  Toast,
  Icon,
  View
} from "native-base";
import KeyHolderContent from "../components/KeyHolderContent";
import PasswordInput from "../components/common/PasswordInput";
import { withNavigation } from "react-navigation";
import { decrypt } from "../components/operational/Encryption";
import { connect } from "react-redux";
import { setMasterKeyAction } from "../store/actions/PasswordItemAction";
import { translate } from "../language/TranslateService";
import ResetApplication from "../components/operational/ResetApplication";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  DialogFooter
} from "react-native-popup-dialog";
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
        <PasswordInput
          iconName="key"
          ref="passwordInput"
          placeholder={translate("signIn.passwordInput")}
          required={true}
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
          <Text style={{color:"#C8C8BE"}}>{translate("signIn.resetButton")}</Text>
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
