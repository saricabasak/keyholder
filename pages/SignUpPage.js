import React, { Component } from "react";
import {Item, Input, Button, Text, Toast, Content, Icon } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import {setMasterKeyAction} from "../store/actions/PasswordItemAction";
import {translate} from "../language/TranslateService";
import PasswordInput from '../components/inputs/PasswordInput';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKey: "",
      secureText:true
    };
    this.onMasterKeyInputChange = this.onMasterKeyInputChange.bind(this);
  }

  onMasterKeyInputChange(value) {
    this.setState({
      masterKey: value
    });
  }

  onSpecifyMasterKeyProcessButton = () => {
    this.props.setMasterKey(this.state.masterKey);
    this.props.navigation.navigate("HomePage");
  };

  toggleShowPassword() {
    this.setState({
      secureText: !this.state.secureText
    });
  }

  render() {
    return (
      <Content contentContainerStyle = {{margin : 10, justifyContent : "center",flex: 1}}>
        <PasswordInput
          itemStyle = {{margin : 5, backgroundColor : '#EBDFDD', opacity : .5, }}
          itemErrorFlag={false}
          inputPlaceholder={translate("signUp.passwordInput")}
          inputValue={this.state.masterKey}
          inputOnChangeText={this.onMasterKeyInputChange}
          inputSecureTextEntry={this.state.secureText}
          buttonTransparent={true}
          buttonTogglePassword={this.toggleShowPassword.bind(this)}
          iconEyeFlag={this.state.secureText}
        />
      <Button
        onPress={this.onSpecifyMasterKeyProcessButton}
        style = {{
          margin : 5,
          backgroundColor : "#D96236",
          justifyContent : 'center'}}
      >
        <Text style={{color:"#C8C8BE"}}>
          {translate("signUp.signUpButton")}
        </Text>
      </Button>
  </Content>
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
