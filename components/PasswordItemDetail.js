import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  addPasswordItemArrOnStoreAction,
  updatePasswordItemArrOnStoreAction
} from "../store/actions/PasswordItemAction";
import { connect } from "react-redux";
import PasswordGeneration from "./PasswordGeneration.js";
import { encrypt, decrypt } from "./Encryption";
import {
  Content,
  Form,
  Item,
  Icon,
  Input,
  Button,
  Accordion,
  Card,
  CardItem,
  View
} from "native-base";
import {
  Text,
  Toast,
  Body
} from "native-base";

class PasswordItemDetail extends Component {
  constructor(props) {
    super(props);
    console.log("PasswordItemDetail constructor");
    this.state = {
      passwordItem: {
        id: 0,
        name: "",
        username: "",
        password: ""
      },
      validation: {
        nameValidation: false,
        usernameValidation: false,
        passwordValidation: false
      },
      secureText: true,
      decryptedPassword: ""
    };
    this.setDecryptedPassword = this.setDecryptedPassword.bind(this);
    this.generatorContent = this.generatorContent.bind(this);
  }

  setDecryptedPassword(value){
    this.setState({
      decryptedPassword: value
    });
  };

  setNameValidationState = () => {
    if (this.state.passwordItem.name == "") {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          nameValidation: true
        }
      }));
    } else {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          nameValidation: false
        }
      }));
    }
  };
  setUsernameValidationState = () => {
    if (this.state.passwordItem.username == "") {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          usernameValidation: true
        }
      }));
    } else {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          usernameValidation: false
        }
      }));
    }
  };
  setPasswordValidationState = () => {
    if (this.state.decryptedPassword == "") {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          passwordValidation: true
        }
      }));
    } else {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          passwordValidation: false
        }
      }));
    }
  };

  nameOnBlur = () => {
    this.setNameValidationState();
  };

  usernameOnBlur = () => {
    this.setUsernameValidationState();
  };
  passwordOnBlur = () => {
    this.setPasswordValidationState();
  };

  onNameChange(value) {
    this.setState(
      prevState => ({
        passwordItem: {
          ...prevState.passwordItem,
          name: value
        }
      }),
      this.setNameValidationState
    );
  }
  onUsernameChange(value) {
    this.setState(
      prevState => ({
        passwordItem: {
          ...prevState.passwordItem,
          username: value
        }
      }),
      this.setUsernameValidationState
    );
  }
  onPasswordChange(value) {
    this.setState(
      prevState => ({
        passwordItem: {
          ...prevState.passwordItem
        },
        decryptedPassword: value
      }),
      this.setPasswordValidationState
    );
  }
  componentWillReceiveProps(props) {
    if (props.passworditem) {
      console.log("decrypt this.props.masterKey -> " + this.props.masterKey);
      const decryptedPassword = decrypt(
        props.passworditem.password,
        this.props.masterKey
      );
      this.setState(prevState => ({
        passwordItem: {
          ...prevState.passwordItem,
          id: props.passworditem.id,
          name: props.passworditem.name,
          username: props.passworditem.username,
          password: props.passworditem.password
        },
        decryptedPassword: decryptedPassword,
        secureText: true
      }));
    }
  }

  toggleShowPassword() {
    console.log("toggleShowPassword");
    this.setState({
      secureText: !this.state.secureText
    });
  }

  generatorContent() {
    return (
      <PasswordGeneration setDecryptedPassword={this.setDecryptedPassword}/>
    );
  }

  savePasswordItemDetail = (passwordItem, decryptedPassword) => {
    console.log("savePasswordItemDetail" + JSON.stringify(passwordItem));
    console.log(
      "savePasswordItemDetail passwordItem.password decryptedPassword-> " +
        decryptedPassword
    );
    console.log("encrypt this.props.masterKey -> " + this.props.masterKey);
    const encryptPassword = encrypt(decryptedPassword, this.props.masterKey);
    passwordItem.password = encryptPassword;
    console.log(
      "savePasswordItemDetail passwordItem.password encryptPassword -> " +
        passwordItem.password
    );
    if (passwordItem.id === 0 || passwordItem.id === null) {
      this.props.addPasswordItemArrOnStore(passwordItem);
    } else {
      this.props.updatePasswordItemArrOnStore(passwordItem);
    }
  };
  validateAndSave = async () => {
    this.setNameValidationState();
    this.setUsernameValidationState();
    this.setPasswordValidationState();
  };
  save = () => {
    this.validateAndSave().then(() => {
      if (
        !this.state.validation.nameValidation &&
        !this.state.validation.usernameValidation &&
        !this.state.validation.passwordValidation
      ) {
        this.savePasswordItemDetail(
          this.state.passwordItem,
          this.state.decryptedPassword
        );
        this.props.navigation.navigate("HomePage");
      } else {
        Toast.show({
          text: "Please fill required fields!",
          buttonText: "Ok"
        });
      }
    });
  };

  render() {
    console.log(
      "PasswordItemDetail render passworditem:" +
        JSON.stringify(this.props.passworditem)
    );
    return (
      <Content
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <Card>
          <CardItem>
            <Body>
              <Item error={this.state.validation.nameValidation}>
                <Icon name="bookmarks" />
                <Input
                  placeholder="Name"
                  value={this.state.passwordItem.name}
                  onChangeText={this.onNameChange.bind(this)}
                  onBlur={this.nameOnBlur}
                />
              </Item>
              <Item error={this.state.validation.usernameValidation}>
                <Icon name="person" />
                <Input
                  placeholder="Username"
                  value={this.state.passwordItem.username}
                  onChangeText={this.onUsernameChange.bind(this)}
                  onBlur={this.usernameOnBlur}
                />
              </Item>
              <Item error={this.state.validation.passwordValidation}>
                <Icon name="key" />
                <Input
                  placeholder="Password"
                  secureTextEntry={this.state.secureText}
                  maxLength={20}
                  value={this.state.decryptedPassword}
                  onChangeText={this.onPasswordChange.bind(this)}
                  onBlur={this.passwordOnBlur}
                />
                <Button
                  transparent
                  onPress={this.toggleShowPassword.bind(this)}
                >
                  <Icon
                    name={this.state.secureText ? "ios-eye" : "ios-eye-off"}
                  />
                </Button>
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Accordion
              dataArray={[{ title: "Password Generator" }]}
              animation={true}
              expanded={true}
              renderContent={this.generatorContent}
            />
          </CardItem>
        </Card>
        <Button style={{ justifyContent: "center" }} onPress={this.save}>
          <Text>Save</Text>
        </Button>
      </Content>
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
)(withNavigation(PasswordItemDetail));
