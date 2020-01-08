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

  componentWillReceiveProps(props) {
    console.log("getParams: " + props.navigation.getParam("passworditem"));
    this.state.passwordItem = props.navigation.getParam("passworditem");
    console.log("componentWillReceiveProps: " + this.state.passwordItem.password);
    this.state.passwordItem.password = this.decryptPassword(this.state.passwordItem.password);
  }

  savePasswordItem = () => {
    console.log("savePasswordItem");
    if (this.refs.passwordDetail.getValidation()) {
      this.state.passwordItem = this.refs.passwordDetail.getPasswordDetail();
      this.state.passwordItem.password = this.encryptPassword(this.state.passwordItem.password);
      console.log("savePasswordItem: " + this.state.passwordItem.password);
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
    console.log("Decrypt: " + password);
    return decrypt(password, this.props.masterKey);
  }

  encryptPassword = (password) => {
    console.log("Encrypt: " + password);
    return encrypt(password, this.props.masterKey);
  }

  clearPasswordItem = () => {
    this.setState({
      passwordItem: {
        id: 0,
        name: "",
        username: "",
        password: "",
        notes: "",
        category: ""
      }
    });
  }

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
            passworditem={this.state.passwordItem}
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
  mapDispatchToProps
)(withNavigation(PasswordPage));
