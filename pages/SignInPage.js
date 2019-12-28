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
import PasswordInput from '../components/inputs/PasswordInput';
import { withNavigation } from "react-navigation";
import { decrypt } from "../components/Encryption";
import { connect } from "react-redux";
import { setMasterKeyAction } from "../store/actions/PasswordItemAction";
import { translate } from "../language/TranslateService";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKey: "",
      secureText: true
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
        buttonText: translate("signIn.toastButton")
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
          <Text>{translate("signIn.signInButton")}</Text>
        </Button>
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
