import React from "react";
import {
  Content,
  Text,
  Form,
  Item,
  Icon,
  Input,
  Button,
  Toast,
  Accordion,
  ListItem,
  Left,
  Right,
  Radio
} from "native-base";
import { connect } from "react-redux";
import {
  updatePasswordItemListArrOnStoreAction,
  setMasterKeyAction,
  updateLanguageAction
} from "../store/actions/PasswordItemAction";
import { encrypt, decrypt } from "../components/Encryption";
import { withNavigation } from "react-navigation";
import PasswordHeader from "../components/PasswordHeader";
import { translate } from "../language/TranslateService";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validation: {
        currentMasterKeyValidation: false,
        newMasterKeyValidation: false,
        confirmNewMasterKeyValidation: false
      },
      masterInfo: {
        currentMasterKey: "",
        newMasterKey: "",
        confirmNewMasterKey: ""
      },
      secureTextCurrentMasterKey: true,
      secureTextNewMasterKey: true,
      secureTextConfirmNewMasterKey: true,
      trRadio: false,
      enRadio: true
    };
    this.onCurrentMasterKeyChange = this.onCurrentMasterKeyChange.bind(this);
    this.onNewMasterKeyValidationChange = this.onNewMasterKeyValidationChange.bind(
      this
    );
    this.onConfirmNewMasterKeyValidationChange = this.onConfirmNewMasterKeyValidationChange.bind(
      this
    );
    this.changePasswordPage = this.changePasswordPage.bind(this);
    this.duration = 3000;
  }

  toggleShowCurrentMasterKey() {
    this.setState({
      secureTextCurrentMasterKey: !this.state.secureTextCurrentMasterKey
    });
  }

  toggleShowNewMasterKey() {
    this.setState({
      secureTextNewMasterKey: !this.state.secureTextNewMasterKey
    });
  }

  toggleShowConfirmNewMasterKey() {
    this.setState({
      secureTextConfirmNewMasterKey: !this.state.secureTextConfirmNewMasterKey
    });
  }

  setCurrentMasterKeyValidationState = () => {
    if (this.state.masterInfo.currentMasterKey == "") {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          currentMasterKeyValidation: true
        }
      }));
    } else {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          currentMasterKeyValidation: false
        }
      }));
    }
  };

  setNewMasterKeyValidationState = () => {
    if (this.state.masterInfo.newMasterKey == "") {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          newMasterKeyValidation: true
        }
      }));
    } else {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          newMasterKeyValidation: false
        }
      }));
    }
  };

  setConfirmNewMasterKeyValidationState = () => {
    if (this.state.masterInfo.confirmNewMasterKey == "") {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          confirmNewMasterKeyValidation: true
        }
      }));
    } else {
      this.setState(prevState => ({
        validation: {
          ...prevState.validation,
          confirmNewMasterKeyValidation: false
        }
      }));
    }
  };

  currentMasterKeyOnBlur = () => {
    this.setCurrentMasterKeyValidationState();
  };

  newMasterKeyOnBlur = () => {
    this.setNewMasterKeyValidationState();
  };

  confirmNewMasterKeyOnBlur = () => {
    this.setConfirmNewMasterKeyValidationState();
  };

  onCurrentMasterKeyChange(value) {
    this.setState(
      prevState => ({
        masterInfo: {
          ...prevState.masterInfo,
          currentMasterKey: value
        }
      }),
      this.setCurrentMasterKeyValidationState
    );
  }

  onNewMasterKeyValidationChange(value) {
    this.setState(
      prevState => ({
        masterInfo: {
          ...prevState.masterInfo,
          newMasterKey: value
        }
      }),
      this.setNewMasterKeyValidationState
    );
  }

  onConfirmNewMasterKeyValidationChange(value) {
    this.setState(
      prevState => ({
        masterInfo: {
          ...prevState.masterInfo,
          confirmNewMasterKey: value
        }
      }),
      this.setConfirmNewMasterKeyValidationState
    );
  }

  validateAndSave = async () => {
    this.setCurrentMasterKeyValidationState();
    this.setNewMasterKeyValidationState();
    this.setConfirmNewMasterKeyValidationState();
  };

  savePassword = () => {
    this.validateAndSave().then(() => {
      if (!(this.state.masterInfo.currentMasterKey == this.props.masterKey)) {
        Toast.show({
          text: translate("settings.passwordError"),
          buttonText: translate("settings.toastButton"),
          duration: this.duration
        });
        return;
      }
      if (
        !(
          this.state.masterInfo.newMasterKey ==
          this.state.masterInfo.confirmNewMasterKey
        )
      ) {
        Toast.show({
          text: translate("settings.confirmError"),
          buttonText: translate("settings.toastButton"),
          duration: this.duration
        });
        return;
      }

      if (
        this.state.validation.currentMasterKeyValidation ||
        this.state.validation.newMasterKeyValidation ||
        this.state.validation.confirmNewMasterKeyValidation
      ) {
        Toast.show({
          text: translate("settings.validationError"),
          buttonText: translate("settings.toastButton"),
          duration: this.duration
        });
        return;
      }
      this.updateAllPasswordItemWithNewMasterKey();
      Toast.show({
        text: translate("settings.successMessage"),
        buttonText: translate("settings.toastButton"),
        duration: this.duration
      });
      this.props.navigation.navigate(translate("pages.home"));
    });
  };

  updateAllPasswordItemWithNewMasterKey = () => {
    let _passwordItems = [...this.props.passwordItems];
    _passwordItems.map(element => {
      let decryptedPassword = decrypt(element.password, this.props.masterKey);
      let encryptedPassword = encrypt(
        decryptedPassword,
        this.state.masterInfo.newMasterKey
      );
      element.password = encryptedPassword;
    });
    this.props.updatePasswordItemListArrOnStore(_passwordItems);
    this.props.setMasterKey(this.state.masterInfo.newMasterKey);
  };

  onPressedEnglishRadio=()=>{
    this.setState({
      enRadio  : true,
      trRadio  : false
    })
  }
  onPressedTurkishRadio=()=>{
    this.setState({
      trRadio  : true,
      enRadio: false
    })
  }

  saveLanguage = ()=> {
    this.props.updateLanguage(this.state.enRadio ? "en" : "tr");
    Toast.show({
      text: translate("settings.successMessage"),
      buttonText: translate("settings.toastButton"),
      duration: this.duration
    });
  }


  changeLanguagePage = () =>  {
    return (
      <Content
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
          }}
        enableAutomaticScroll={false}
      >
        <ListItem onPress = {this.onPressedEnglishRadio}>
          <Left>
            <Text>{translate("language.english")}</Text>
          </Left>
          <Right>
            <Radio selected={this.state.enRadio} />
          </Right>
        </ListItem>
        <ListItem onPress = {this.onPressedTurkishRadio}>
          <Left>
            <Text>{translate("language.turkish")}</Text>
          </Left>
          <Right>
            <Radio selected={this.state.trRadio} />
          </Right>
        </ListItem>
        <Button style={{ justifyContent: "center" }} onPress={this.saveLanguage}>
          <Text>{translate("settings.saveButton")}</Text>
        </Button>
      </Content>
    );
  }

  changePasswordPage() {
    return (
      <Content
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
        enableAutomaticScroll={false}
      >
        <Form>
          <Item error={this.state.validation.currentMasterKeyValidation}>
            <Icon name="key" />
            <Input
              placeholder={translate("settings.current")}
              value={this.state.masterInfo.currentMasterKey}
              onChangeText={this.onCurrentMasterKeyChange}
              onBlur={this.currentMasterKeyOnBlur}
              secureTextEntry={this.state.secureTextCurrentMasterKey}
            />
            <Button
              transparent
              onPress={this.toggleShowCurrentMasterKey.bind(this)}
            >
              <Icon
                name={
                  this.state.secureTextCurrentMasterKey
                    ? "ios-eye"
                    : "ios-eye-off"
                }
              />
            </Button>
          </Item>
          <Item error={this.state.validation.newMasterKeyValidation}>
            <Icon name="key" />
            <Input
              placeholder={translate("settings.new")}
              value={this.state.masterInfo.newMasterKey}
              onChangeText={this.onNewMasterKeyValidationChange}
              onBlur={this.newMasterKeyOnBlur}
              secureTextEntry={this.state.secureTextNewMasterKey}
            />
            <Button
              transparent
              onPress={this.toggleShowNewMasterKey.bind(this)}
            >
              <Icon
                name={
                  this.state.secureTextNewMasterKey ? "ios-eye" : "ios-eye-off"
                }
              />
            </Button>
          </Item>
          <Item error={this.state.validation.confirmNewMasterKeyValidation}>
            <Icon name="key" />
            <Input
              placeholder={translate("settings.confirm")}
              value={this.state.masterInfo.confirmNewMasterKey}
              onChangeText={this.onConfirmNewMasterKeyValidationChange}
              onBlur={this.confirmNewMasterKeyOnBlur}
              secureTextEntry={this.state.secureTextConfirmNewMasterKey}
            />
            <Button
              transparent
              onPress={this.toggleShowConfirmNewMasterKey.bind(this)}
            >
              <Icon
                name={
                  this.state.secureTextConfirmNewMasterKey
                    ? "ios-eye"
                    : "ios-eye-off"
                }
              />
            </Button>
          </Item>
        </Form>
        <Button style={{ justifyContent: "center" }} onPress={this.savePassword}>
          <Text>{translate("settings.saveButton")}</Text>
        </Button>
      </Content>
    );
  }

  render() {
    return (
      <PasswordHeader headerTitle={translate("settings.header")}>
        <Accordion
          dataArray={[{ title: translate("password.changeMasterKeyHeader") }]}
          animation={true}
          expanded={true}
          renderContent={this.changePasswordPage}
        />
        <Accordion
          dataArray={[{ title: translate("password.changeLanguageHeader") }]}
          animation={true}
          expanded={true}
          renderContent={this.changeLanguagePage}
        />
      </PasswordHeader>
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
    updatePasswordItemListArrOnStore: data =>
      dispatch(updatePasswordItemListArrOnStoreAction(data)),
    setMasterKey: data => dispatch(setMasterKeyAction(data)),
    updateLanguage: data => dispatch(updateLanguageAction(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(ProfilePage));
