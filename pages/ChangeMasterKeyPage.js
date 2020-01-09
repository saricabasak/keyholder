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
    this.onCurrentMasterKeyChange = this.onCurrentMasterKeyChange.bind(this);
    this.onNewMasterKeyChange = this.onNewMasterKeyChange.bind(this);
    this.onConfirmNewMasterKeyChange = this.onConfirmNewMasterKeyChange.bind(this);
    this.duration = 2000;
  }

  /*componentWillReceiveProps(nextProps) {
    console.log(JSON.stringify(nextProps))
    var masterInfo = this.props.navigation.getParam("masterInfo");
    if (nextProps && masterInfo) {
      this.setState(prevState => ({
        masterInfo: {
          ...prevState.masterInfo,
          currentMasterKey: masterInfo.currentMasterKey,
          newMasterKey: masterInfo.newMasterKey,
          confirmNewMasterKey: masterInfo.confirmNewMasterKey
        }
      }));
    }
  }*/
  onCurrentMasterKeyChange(value) {
    this.setState(
      prevState => ({
        masterInfo: {
          ...prevState.masterInfo,
          currentMasterKey: value
        }
      }));
  }

  onNewMasterKeyChange(value) {
    this.setState(
      prevState => ({
        masterInfo: {
          ...prevState.masterInfo,
          newMasterKey: value
        }
      }));
  }

  onConfirmNewMasterKeyChange(value) {
    this.setState(
      prevState => ({
        masterInfo: {
          ...prevState.masterInfo,
          confirmNewMasterKey: value
        }
      }));
  }
  savePassword = () => {

    if (this.state.masterInfo.currentMasterKey == "" ||
      this.state.masterInfo.newMasterKey == "" ||
      this.state.masterInfo.confirmNewMasterKey == ""
    ) {
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
          style={{ borderColor: "#32322D" }}
          inputPlaceholder={translate("settings.current")}
          placeholderTextColor={{ backgroundColor: "red" }}
          inputOnChangeText={this.onCurrentMasterKeyChange}
          buttonTransparent={true}
          inputValue = {this.state.masterInfo.currentMasterKey}
        />
        <PasswordInput
          style={{ borderColor: "#32322D" }}
          inputPlaceholder={translate("settings.new")}
          inputOnChangeText={this.onNewMasterKeyChange}
          buttonTransparent={true}
          inputValue = {this.state.masterInfo.newMasterKey}
        />
        <PasswordInput
          style={{ borderColor: "#32322D" }}
          inputPlaceholder={translate("settings.confirm")}
          inputOnChangeText={this.onConfirmNewMasterKeyChange}
          buttonTransparent={true}
          inputValue = {this.state.masterInfo.confirmNewMasterKey}
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
  mapDispatchToProps
)(withNavigation(ChangeMasterKeyPage));
