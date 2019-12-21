import React, { Component } from "react";
import {Item, Input, Button, Text, Toast, Content, Icon, Container, View } from "native-base";
import { withNavigation } from "react-navigation";
import { decrypt } from "./Encryption";
import { connect } from "react-redux";
import { setMasterKeyAction } from "../store/actions/PasswordItemAction";
import {translate} from "../language/TranslateService";

//import { StyleSheet } from "react-native";

class SignIn extends Component {
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
    // Master key doğru mu kontrolü lazım
    console.log(
      "onEnterMasterKeyProcessButton masterkey -> " + this.state.masterKey
    );
    let decryptedPassword = decrypt(
      this.props.firstDataForDecrypt.password,
      this.state.masterKey
    );
    console.log("decrypt  -> " + decryptedPassword);
    if (!decryptedPassword) {
      Toast.show({
        text: "Wrong master key try again!",
        buttonText: "Ok"
      });
    } else {
      this.props.setMasterKey(this.state.masterKey);
      this.props.navigation.navigate("HomePage");
    }
  };

  toggleShowPassword() {
    console.log("toggleShowPassword");
    this.setState({
      secureText: !this.state.secureText
    });
  }

  render() {
    console.log("TRANSLATRE ->>> " + translate("passwordpage.name"));
    return (
        <Content contentContainerStyle = {{margin : 10, justifyContent : "center",flex: 1}}>
            <Item bordered rounded style = {{margin : 5, backgroundColor : '#EBDFDD', opacity : .5, }}>
            <Icon name="key" color = "#FFFFFF" />
                <Input
                  placeholder="Enter Master Key"
                  value={this.state.masterKey}
                  onChangeText={this.onMasterKeyInputChange}
                  secureTextEntry={this.state.secureText}
                  placeholderTextColor = "#FFFFFF"
                />
                <Button transparent onPress={this.toggleShowPassword.bind(this)}>
              <Icon name={this.state.secureText ? "ios-eye" : "ios-eye-off"} />
            </Button>
            </Item>
            <Button onPress={this.onEnterMasterKeyProcessButton} 
                  style = {{margin : 5, backgroundColor : "#F53F18", justifyContent : "center"}}> 
              <Text>Sign In</Text>
            </Button>
        </Content>
      )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMasterKey: data => dispatch(setMasterKeyAction(data))
  };
};

export default connect(null, mapDispatchToProps)(withNavigation(SignIn));

/*const styles = StyleSheet.create({
  screen: {
    padding: 35
  }
});*/
