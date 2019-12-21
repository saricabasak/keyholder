import React, { Component } from "react";
import {Item, Input, Button, Text, Toast, Content, Icon } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import {setMasterKeyAction} from "../store/actions/PasswordItemAction";
import {translate} from "../language/TranslateService";

class SignUp extends Component {
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
      <Item bordered rounded style = {{margin : 5, backgroundColor : '#EBDFDD', opacity : .5, }}>
      <Icon name="key" color = "#FFFFFF" />
          <Input
            placeholder={translate("signUp.passwordInput")}
            value={this.state.masterKey}
            onChangeText={this.onMasterKeyInputChange}
            secureTextEntry={this.state.secureText}
            placeholderTextColor = "#FFFFFF"
          />
          <Button transparent onPress={this.toggleShowPassword.bind(this)}>
              <Icon name={this.state.secureText ? "ios-eye" : "ios-eye-off"} />
            </Button>
      </Item>
      <Button onPress={this.onSpecifyMasterKeyProcessButton}
            style = {{margin : 5, backgroundColor : "#F53F18", justifyContent : 'center'}}>
        <Text>{translate("signUp.signUpButton")}</Text>
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
)(withNavigation(SignUp));
