import React, { Component } from "react";
import {Button, Text} from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { setMasterKeyAction } from "../store/actions/PasswordItemAction";
import { translate } from "../language/TranslateService";
import { login } from "../themes/ThemeService";
import KeyHolderContent from '../components/KeyHolderContent';
import PasswordInput from '../components/common/PasswordInput';
import { KeyboardAvoidingView } from 'react-native';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
  }

  onSpecifyMasterKeyProcessButton = () => {
    this.props.setMasterKey(this.refs.passwordInput.getValue());
    this.props.navigation.navigate("HomePage");
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
            onPress={this.onSpecifyMasterKeyProcessButton}
            style={login.buttonStyle}
          >
            <Text style={login.buttonTextStyle}>
              {translate("signUp.signUpButton")}
            </Text>
          </Button>
        </KeyboardAvoidingView>

      </KeyHolderContent>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMasterKey: data =>
      dispatch(setMasterKeyAction(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(SignUpPage));
