import React from "react";
import {
  Content,
  Text,
  Form,
  Item,
  Icon,
  Input,
  Button,
  Toast
} from "native-base";
import { connect } from "react-redux";
import {
  updatePasswordItemListArrOnStoreAction,
  setMasterKeyAction
} from "../store/actions/PasswordItemAction";
import { encrypt, decrypt } from "../components/Encryption";
import { withNavigation } from "react-navigation";
import PasswordHeader from "../components/PasswordHeader";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    console.log("ProfilePage constructor");
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
      secureTextConfirmNewMasterKey: true
    };
    //Bind
    this.onCurrentMasterKeyChange = this.onCurrentMasterKeyChange.bind(this);
    this.onNewMasterKeyValidationChange = this.onNewMasterKeyValidationChange.bind(this);
    this.onConfirmNewMasterKeyValidationChange = this.onConfirmNewMasterKeyValidationChange.bind(this);
    this.duration = 3000;
  }

  toggleShowCurrentMasterKey() {
    console.log("toggleShowCurrentMasterKey");
    this.setState({
      secureTextCurrentMasterKey: !this.state.secureTextCurrentMasterKey
    });
  }

  toggleShowNewMasterKey() {
    console.log("toggleShowNewMasterKey");
    this.setState({
      secureTextNewMasterKey: !this.state.secureTextNewMasterKey
    });
  }

  toggleShowConfirmNewMasterKey() {
    console.log("toggleShowConfirmNewMasterKey");
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

  save = () => {
    this.validateAndSave().then(() => {

      if(!(this.state.masterInfo.currentMasterKey == this.props.masterKey)){
        Toast.show({
          text: "Current master key is wrong!",
          buttonText: "Ok",
          duration: this.duration
        });
        return;
      }
      if(!(this.state.masterInfo.newMasterKey == this.state.masterInfo.confirmNewMasterKey)){
        Toast.show({
          text: "Confirm master key not matched with new master key!",
          buttonText: "Ok",
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
          text: "Please fill required fields!",
          buttonText: "Ok",
          duration: this.duration
        });
        return;
        //this.updateAllPasswordItemWithNewMasterKey();
      } 
        this.updateAllPasswordItemWithNewMasterKey();
        Toast.show({
          text: "New master key has been changed successfully!",
          buttonText: "Ok",
          duration: this.duration
        });
        this.props.navigation.navigate("HomePage");
    });
  };

  updateAllPasswordItemWithNewMasterKey = () => {
    console.log(
      "updateAllPasswordItemWithNewMasterKey => " + this.props.passwordItems
    );
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

  render() {
    return (
      <PasswordHeader headerTitle="Settings">
        <Content
          contentContainerStyle={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: 20
          }}
        >
          <Form>
            <Item error={this.state.validation.currentMasterKeyValidation}>
              <Icon name="key" />
              <Input
                placeholder="Current Master Key"
                value={this.state.masterInfo.currentMasterKey}
                onChangeText={this.onCurrentMasterKeyChange}
                onBlur={this.currentMasterKeyOnBlur}
                secureTextEntry={this.state.secureTextCurrentMasterKey}
              />
              <Button transparent onPress={this.toggleShowCurrentMasterKey.bind(this)}>
              <Icon name={this.state.secureTextCurrentMasterKey ? "ios-eye" : "ios-eye-off"} />
            </Button>
            </Item>
            <Item error={this.state.validation.newMasterKeyValidation}>
              <Icon name="key" />
              <Input
                placeholder="New Master Key"
                value={this.state.masterInfo.newMasterKey}
                onChangeText={this.onNewMasterKeyValidationChange}
                onBlur={this.newMasterKeyOnBlur}
                secureTextEntry={this.state.secureTextNewMasterKey}
              />
              <Button transparent onPress={this.toggleShowNewMasterKey.bind(this)}>
              <Icon name={this.state.secureTextNewMasterKey ? "ios-eye" : "ios-eye-off"} />
            </Button>
            </Item>
            <Item error={this.state.validation.confirmNewMasterKeyValidation}>
              <Icon name="key" />
              <Input
                placeholder="Confirm New Master Key"
                value={this.state.masterInfo.confirmNewMasterKey}
                onChangeText={this.onConfirmNewMasterKeyValidationChange}
                onBlur={this.confirmNewMasterKeyOnBlur}
                secureTextEntry={this.state.secureTextConfirmNewMasterKey}
              />
              <Button transparent onPress={this.toggleShowConfirmNewMasterKey.bind(this)}>
              <Icon name={this.state.secureTextConfirmNewMasterKey ? "ios-eye" : "ios-eye-off"} />
            </Button>
            </Item>
          </Form>
          <Button style={{ justifyContent: "center" }} onPress={this.save}>
            <Text>Save</Text>
          </Button>
        </Content>
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
    setMasterKey: data => dispatch(setMasterKeyAction(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(ProfilePage));
