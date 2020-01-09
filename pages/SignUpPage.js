import React, { Component } from "react";
import {Item, Input, Button, Text, Toast, Content, Icon } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import {setMasterKeyAction} from "../store/actions/PasswordItemAction";
import {translate} from "../language/TranslateService";
import KeyHolderContent from '../components/KeyHolderContent';
import PasswordInput from '../components/common/PasswordInput';

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
        <PasswordInput
          iconName="key"
          ref="passwordInput"
          placeholder={translate("signIn.passwordInput")}
          required={true}
        />
        <Button
          onPress={this.onSpecifyMasterKeyProcessButton}
          style = {{
            margin : 5,
            backgroundColor : "#D96236",
            justifyContent : 'center'
          }}
        >
          <Text style={{color:"#C8C8BE"}}>
            {translate("signUp.signUpButton")}
          </Text>
        </Button>
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
