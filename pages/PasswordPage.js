import React, { Component } from "react";
import { connect } from "react-redux";
import { encrypt, decrypt } from "../components/Encryption";
import { withNavigation } from "react-navigation";
import { Content, Button, Text, Toast } from "native-base";
import PasswordDetail from "../components/common/PasswordDetail";
import KeyHolderHeader from "../components/KeyHolderHeader";
import PageContainer from "../components/PageContainer";
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
        console.log(this.state.decryptedPassword);
        this.savePasswordItemDetail(
          this.refs.passwordDetail.getPasswordDetail(),
          this.state.passwordItem.password
        );
        this.props.navigation.navigate(translate("pages.home"));
      } else {
        Toast.show({
          text: translate("password.validationError"),
          buttonText: translate("password.toastButton"),
          type: "danger"
        });
      }
  };


  savePasswordItemDetail = (passwordItem, decryptedPassword) => {
    const encryptPassword = encrypt(decryptedPassword, this.props.masterKey);
    passwordItem.password = encryptPassword;
    if (passwordItem.id === 0 || passwordItem.id === null) {
      this.props.addPasswordItemArrOnStore(passwordItem);
    } else {
      this.props.updatePasswordItemArrOnStore(passwordItem);
    }
  };

  render() {
    return (
      <PageContainer>
        <KeyHolderHeader headerTitle={translate("password.header")} />
        <Content
          contentContainerStyle={{
            padding: "1%",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
          <PasswordDetail
            ref="passwordDetail"
            passworditem={this.props.navigation.getParam("passworditem")}
          />
          <Button
            style={{
              justifyContent: "center",
              backgroundColor:"#D96236"
            }}
            onPress={this.savePasswordItem}
          >
            <Text>{translate("password.saveButton")}</Text>
          </Button>
        </Content>
      </PageContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
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
  mapDispatchToProps
)(withNavigation(PasswordPage));
