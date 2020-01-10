import React, { Component } from "react";
import { connect } from "react-redux";
import { encrypt, decrypt } from "../components/operational/Encryption";
import { withNavigation } from "react-navigation";
import { Content, Button, Text, Toast } from "native-base";
import PasswordDetail from "../components/common/PasswordDetail";
import KeyHolderHeader from "../components/KeyHolderHeader";
import KeyHolderContent from "../components/KeyHolderContent";
import KeyHolderContainer from "../components/KeyHolderContainer";
import { password } from "../themes/ThemeService";
import { translate } from "../language/TranslateService";
import {
  addPasswordItemArrOnStoreAction,
  updatePasswordItemArrOnStoreAction
} from "../store/actions/PasswordItemAction";

class PasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordItem: {
        id: 0,
        name: "",
        username: "",
        password: "",
        notes: "",
        category: ""
      }
    };
  }

  savePasswordItem = () => {
    if (this.refs.passwordDetail.getValidation()) {
      this.state.passwordItem = this.refs.passwordDetail.getPasswordDetail();
      this.state.passwordItem.password = this.encryptPassword(this.state.passwordItem.password);
      if (this.state.passwordItem.id === 0 || this.state.passwordItem.id === null) {
        this.props.addPasswordItemArrOnStore(this.state.passwordItem);
      } else {
        this.props.updatePasswordItemArrOnStore(this.state.passwordItem);
      }
      this.props.navigation.navigate(translate("pages.home"));
    } else {
      Toast.show({
        text: translate("password.validationError"),
        buttonText: translate("password.toastButton"),
        type: "danger"
      });
    }
  };

  decryptPassword = (password) => {
    if(password === "" || password === null){
      return "";
    }else {
      return decrypt(password, this.props.masterKey);
    }
  }

  encryptPassword = (password) => {
    if(password === "" || password === null){
      return "";
    }else {
      return encrypt(password, this.props.masterKey);
    }
  }

  render() {
    return (
      <KeyHolderContainer isLogin={false}>
        <KeyHolderHeader headerTitle={translate("password.header")} />
        <KeyHolderContent justifyContent="space-between">
          <PasswordDetail
            ref="passwordDetail"
            passworditem={this.props.navigation.getParam("passworditem")}
            passworDecrypt={this.decryptPassword}
          />
          <Button
            style={password.buttonStyle}
            onPress={this.savePasswordItem}
          >
            <Text>{translate("password.saveButton")}</Text>
          </Button>
        </KeyHolderContent>
      </KeyHolderContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    passwordItems: state.PasswordItemReducer.PasswordItems,
    masterKey: state.PasswordItemReducer.masterKey
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPasswordItemArrOnStore: data =>
      dispatch(addPasswordItemArrOnStoreAction(data)),
    updatePasswordItemArrOnStore: data =>
      dispatch(updatePasswordItemArrOnStoreAction(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps, null, {forwardRef: true}
)(withNavigation(PasswordPage));
