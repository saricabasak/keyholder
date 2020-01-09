import React, { Component } from "react";
import { Text, Form, Toast, Button, Accordion } from "native-base";
import { connect } from "react-redux";
import { updatePasswordItemListArrOnStoreAction, setMasterKeyAction, updateLanguageAction } from "../store/actions/PasswordItemAction";
import { encrypt, decrypt } from "../components/operational/Encryption";
import { withNavigation } from "react-navigation";
import { translate } from "../language/TranslateService";
import PasswordInput from "../components/common/PasswordInput";

class ChangeMasterKeyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterInfo: {
        currentMasterKey: "",
        newMasterKey: "",
        confirmNewMasterKey: ""
      }
    };
    this.duration = 2000;
  }

  componentWillReceiveProps(props) {
    this.resetPage();
  }

  resetPage = () => {
    this.refs.currentMasterItem.setValue("");
    this.refs.newMasterItem.setValue("");
    this.refs.confirmMasterItem.setValue("");
    this.refs.currentMasterItem.setValidationValue();
    this.refs.newMasterItem.setValidationValue();
    this.refs.confirmMasterItem.setValidationValue();
  }

  runFieldsValidation = () => {
    return (
      this.refs.currentMasterItem.getValidation() &&
      this.refs.newMasterItem.getValidation() &&
      this.refs.confirmMasterItem.getValidation()
    );
  }

  savePassword = () => {
    this.state.masterInfo = this.getInputsToState();
    if (!this.runFieldsValidation() || this.state.masterInfo.currentMasterKey == "" || this.state.masterInfo.newMasterKey == "" 
    || this.state.masterInfo.confirmNewMasterKey == "" ) {
      Toast.show({
        text: translate("settings.validationError"),
        buttonText: translate("settings.toastButton"),
        duration: this.duration,
        type: "danger"
      });
      return;
    }
    if (!(this.state.masterInfo.currentMasterKey == this.props.masterKey)) {
      Toast.show({
        text: translate("settings.passwordError"),
        buttonText: translate("settings.toastButton"),
        duration: this.duration,
        type: "danger"
      });
      return;
    }
    if (!(this.state.masterInfo.newMasterKey == this.state.masterInfo.confirmNewMasterKey)) {
      Toast.show({
        text: translate("settings.confirmError"),
        buttonText: translate("settings.toastButton"),
        duration: this.duration,
        type: "danger"
      });
      return;
    }
    this.updateAllPasswordItemWithNewMasterKey();
    Toast.show({
      text: translate("settings.masterKeySuccessMessage"),
      buttonText: translate("settings.toastButton"),
      duration: this.duration,
      type: "success"
    });
    this.props.navigation.navigate(translate("pages.home"));
  };

  getInputsToState = () => {
    this.state.masterInfo.currentMasterKey = this.refs.currentMasterItem.getValue();
    this.state.masterInfo.newMasterKey = this.refs.newMasterItem.getValue();
    this.state.masterInfo.confirmNewMasterKey = this.refs.confirmMasterItem.getValue();

    return this.state.masterInfo;
  }

  updateAllPasswordItemWithNewMasterKey = () => {
    let _passwordItems = [...this.props.passwordItems];
    _passwordItems.map(element => {
      let decryptedPassword = decrypt(element.password, this.props.masterKey);
      let encryptedPassword = encrypt(
        decryptedPassword,
        this.state.masterInfo.newMasterKey
      );
      element.password = encryptedPassword;
    });
    this.props.setMasterKey(this.state.masterInfo.newMasterKey);
    this.props.updatePasswordItemListArrOnStore(_passwordItems);
  };

  render() {
    return (
      <Form>
        <PasswordInput
          ref="currentMasterItem"
          iconName="key"
          placeholder={translate("settings.current")}
          required={true}
        />
        <PasswordInput
          ref="newMasterItem"
          iconName="key"
          placeholder={translate("settings.new")}
          required={true}
        />
        <PasswordInput
          ref="confirmMasterItem"
          iconName="key"
          placeholder={translate("settings.confirm")}
          required={true}
        />
        <Button
          style={{
            justifyContent: "center",
            marginTop: 3,
            backgroundColor: "#D96236"
          }}
          onPress={this.savePassword}
        >
          <Text>{translate("settings.saveButton")}</Text>
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    passwordItems: state.PasswordItemReducer.PasswordItems,
    masterKey: state.PasswordItemReducer.masterKey,
    language: state.PasswordItemReducer.language
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatePasswordItemListArrOnStore: data =>
      dispatch(updatePasswordItemListArrOnStoreAction(data)),
    setMasterKey: data => dispatch(setMasterKeyAction(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps, null, {forwardRef: true}
)(withNavigation(ChangeMasterKeyPage));
