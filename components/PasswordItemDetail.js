import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  addPasswordItemArrOnStoreAction,
  updatePasswordItemArrOnStoreAction
} from "../store/actions/PasswordItemAction";
import { connect } from "react-redux";
import PasswordGeneration from "./PasswordGeneration.js";
import { encrypt, decrypt } from "./Encryption";
import { Content, Item, Icon, Input, Button, Accordion, Textarea } from "native-base";
import { Text, Toast, Body, View, Card, CardItem, Picker } from "native-base";
import { translate } from "../language/TranslateService";

class PasswordItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordItem: {
        id: 0,
        category: "",
        name: "",
        username: "",
        password: "",
        notes: ""
      },
      validation: {
        nameValidation: false,
        usernameValidation: false,
        passwordValidation: false,
        categoryValidation: false
      },
      secureText: true,
      decryptedPassword: ""
    };
    this.setDecryptedPassword = this.setDecryptedPassword.bind(this);
    this.generatorContent = this.generatorContent.bind(this);
  }

  setDecryptedPassword(value) {
    this.setState({
      decryptedPassword: value
    });
  }

  setCategoryValidationState = () => {
    if (this.state.passwordItem.category == "") {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          categoryValidation: true
        }
      }));
    } else {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          categoryValidation: false
        }
      }));
    }
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
  categoryOnBlur = () => {
    this.setCategoryValidationState();
  };
  usernameOnBlur = () => {
    this.setUsernameValidationState();
  };
  passwordOnBlur = () => {
    this.setPasswordValidationState();
  };

  onCategoryChange(value) {
    this.setState(
      prevState => ({
        passwordItem: {
          ...prevState.passwordItem,
          category: value
        }
      }),
      this.setCategoryValidationState
    );
  }

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
  onNotesChange(value) {
    this.setState(
      prevState => ({
        passwordItem: {
          ...prevState.passwordItem,
          notes: value
        }
      })
    );
  }

  componentWillReceiveProps(props) {
    //console.log("nextProps : " + props)
    //console.log("nextProps : " + JSON.stringify(props))
    if (props.passworditem) {
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
          password: props.passworditem.password,
          notes: props.passworditem.notes,
          category: props.passworditem.category
        },
        decryptedPassword: decryptedPassword,
        secureText: true
      }));
    }
  }

  toggleShowPassword() {
    this.setState({
      secureText: !this.state.secureText
    });
  }

  generatorContent() {
    return (
      <PasswordGeneration setDecryptedPassword={this.setDecryptedPassword} />
    );
  }

  savePasswordItemDetail = (passwordItem, decryptedPassword) => {
    const encryptPassword = encrypt(decryptedPassword, this.props.masterKey);
    passwordItem.password = encryptPassword;
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
    this.setCategoryValidationState();
  };

  save = () => {
    this.validateAndSave().then(() => {
      if (
        !this.state.validation.nameValidation &&
        !this.state.validation.usernameValidation &&
        !this.state.validation.passwordValidation &&
        !this.state.validation.categoryValidation
      ) {
        this.savePasswordItemDetail(
          this.state.passwordItem,
          this.state.decryptedPassword
        );
        this.props.navigation.navigate(translate("pages.home"));
      } else {
        Toast.show({
          text: translate("password.validationError"),
          buttonText: translate("password.toastButton")
        });
      }
    });
  };

  render() {
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
            <Item error={this.state.validation.categoryValidation} style={{ flex: 1 }}>
              <Icon name="ios-list" />
              <Picker
                mode="dropdown"
                selectedValue={this.state.passwordItem.category}
                onValueChange={value => this.onCategoryChange(value)}
                onBlur={this.categoryOnBlur}
                placeholder="Select Category"
              >
                <Picker.Item
                  label={translate("password.category.Other")}
                  value="other"
                />
                <Picker.Item
                  label={translate("password.category.SocialMedia")}
                  value="socialmedia"
                />
                <Picker.Item
                  label={translate("password.category.Finance")}
                  value="finance"
                />
                <Picker.Item
                  label={translate("password.category.Shopping")}
                  value="shopping"
                />
                <Picker.Item
                  label={translate("password.category.Travel")}
                  value="travel"
                />
                <Picker.Item
                  label={translate("password.category.Game")}
                  value="game"
                />
                <Picker.Item
                  label={translate("password.category.Education")}
                  value="education"
                />
              </Picker>
            </Item>
          </CardItem>
          <CardItem>
              <Item error={this.state.validation.nameValidation}>
                <Icon name="bookmark" />
                <Input
                  placeholder={translate("password.name")}
                  value={this.state.passwordItem.name}
                  onChangeText={this.onNameChange.bind(this)}
                  onBlur={this.nameOnBlur}
                />
              </Item>
            </CardItem>
            <CardItem>
              <Item error={this.state.validation.usernameValidation}>
                <Icon name="person" />
                <Input
                  placeholder={translate("password.username")}
                  value={this.state.passwordItem.username}
                  onChangeText={this.onUsernameChange.bind(this)}
                  onBlur={this.usernameOnBlur}
                />
              </Item>
            </CardItem>
            <CardItem>
              <Item error={this.state.validation.passwordValidation}>
                <Icon name="key" />
                <Input
                  placeholder={translate("password.password")}
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
            </CardItem>
            <CardItem>
              <Item>
                <Icon name="paper" />
                <Input
                  placeholder={translate("password.notes")}
                  value={this.state.passwordItem.notes}
                  onChangeText={this.onNotesChange.bind(this)}
                />
              </Item>
          </CardItem>
          <CardItem>
            <Accordion
              dataArray={[{ title: translate("password.generatorHeader") }]}
              animation={true}
              expanded={true}
              renderContent={this.generatorContent}
            />
          </CardItem>
        </Card>
        <Button style={{ justifyContent: "center" }} onPress={this.save}>
          <Text>{translate("password.saveButton")}</Text>
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
