import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { addPasswordItemArrOnStoreAction,updatePasswordItemArrOnStoreAction } from "../store/actions/PasswordItemAction";
import { connect } from "react-redux";
import PasswordGenerator from './PasswordGenerator.js';
import {encrypt,decrypt} from './Encryption';
import { Content, Form, Item, Icon, Input, Button } from "native-base";
import { ListItem, Left, Right, Text, Switch, Picker } from 'native-base';


class PasswordItemDetail extends Component {
    constructor(props) {
      super(props);
      console.log('PasswordItemDetail constructor')
      this.state = {
        passwordItem: {
          id:0,
          name: '',
          username: '',
          password: ''
        },
        generationParameters: {
          lengthValue: 8,
          digitValue: true,
          lowerValue: true,
          upperValue: true,
          specialValue: true
        },
        secureText: true,
        decryptedPassword: ''
      };
      this.generatePassword = this.generatePassword.bind(this);
    }

  generatePassword(){
    console.log('generatePassword called.');
    let decryptedPassword = PasswordGenerator.generatePassword(
      this.state.generationParameters
    );
    console.log('decryptedPassword -> ' + decryptedPassword);
    //var encryptPassword = encrypt(password,"master key");
    this.setState({
      decryptedPassword : decryptedPassword
    });
  }


  onNameChange(value) {
    this.setState(prevState => ({
      passwordItem: {
        ...prevState.passwordItem,
        name: value
      }
    }));
  }
  onUsernameChange(value) {
    this.setState(prevState => ({
      passwordItem: {
        ...prevState.passwordItem,
        username: value
      }
    }));
  }
  onPasswordChange(value) {
    this.setState(prevState => ({
      passwordItem: {
        ...prevState.passwordItem
      },
      decryptedPassword: value
    }));
  }

    onLengthChange(value) {
      this.setState(prevState => ({
        generationParameters: {
          ...prevState.generationParameters,
          lengthValue: value
        }
      }));
    }
    onDigitChange(value) {
      this.setState(prevState => ({
        generationParameters: {
          ...prevState.generationParameters,
          digitValue: value
        }
      }));
    }
    onLowerChange(value) {
      this.setState(prevState => ({
        generationParameters: {
          ...prevState.generationParameters,
          lowerValue: value
        }
      }));
    }
    onUpperChange(value) {
      this.setState(prevState => ({
        generationParameters: {
          ...prevState.generationParameters,
          upperValue: value
        }
      }));
    }
    onSpecialChange(value) {
      this.setState(prevState => ({
        generationParameters: {
          ...prevState.generationParameters,
          specialValue: value
        }
      }));
    }

    componentWillReceiveProps(props) {
        if(props.passworditem){
            const decryptedPassword = decrypt(props.passworditem.password,"master key");
            this.setState(prevState => ({
                passwordItem: {
                  ...prevState.passwordItem,
                  id: props.passworditem.id,
                  name: props.passworditem.name,
                  username: props.passworditem.username,
                  password: props.passworditem.password
                },
                decryptedPassword : decryptedPassword,
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

    savePasswordItemDetail = (passwordItem,decryptedPassword) => {
        console.log("savePasswordItemDetail" + JSON.stringify(passwordItem));
        console.log("savePasswordItemDetail passwordItem.password decryptedPassword-> " + decryptedPassword);
        const encryptPassword = encrypt(decryptedPassword,"master key");
        passwordItem.password = encryptPassword; 
        console.log("savePasswordItemDetail passwordItem.password encryptPassword -> " + passwordItem.password);
        if(passwordItem.id === 0 || passwordItem.id === null ){
          this.props.addPasswordItemArrOnStore(passwordItem);
        }
        else{
          this.props.updatePasswordItemArrOnStore(passwordItem);
        }
    };

  render() {
    console.log("PasswordItemDetail render passworditem:" + JSON.stringify(this.props.passworditem));
    return (
        <Content
          contentContainerStyle={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
      <Form>
        <Item>
          <Icon name="bookmarks" />
          <Input
            placeholder="Name"
            value={this.state.passwordItem.name}
            onChangeText={this.onNameChange.bind(this)}
          />
        </Item>
        <Item>
          <Icon name="person" />
          <Input
            placeholder="Username"
            value={this.state.passwordItem.username}
            onChangeText={this.onUsernameChange.bind(this)}
          />
        </Item>
        <Item>
          <Icon name="key" />
          <Input
            placeholder="Password"
            secureTextEntry={this.state.secureText}
            maxLength={20}
            value={this.state.decryptedPassword}
            onChangeText={this.onPasswordChange.bind(this)}
          />
          <Button transparent onPress={this.toggleShowPassword.bind(this)}>
            <Icon name={this.state.secureText ? "ios-eye" : "ios-eye-off"} />
          </Button>
          <Button transparent onPress={this.generatePassword}>
            <Icon name="ios-create"/>
          </Button>
        </Item>
        <ListItem>
          <Left>
            <Text>Length</Text>
          </Left>
          <Right>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={this.state.generationParameters.lengthValue}
              onValueChange={this.onLengthChange.bind(this)}
            >
              <Picker.Item label="6" value={6} />
              <Picker.Item label="8" value={8} />
              <Picker.Item label="10" value={10} />
              <Picker.Item label="12" value={12} />
              <Picker.Item label="14" value={14} />
              <Picker.Item label="16" value={16} />
              <Picker.Item label="18" value={18} />
              <Picker.Item label="20" value={20} />
            </Picker>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Digit</Text>
          </Left>
          <Right>
            <Switch
              value={this.state.generationParameters.digitValue}
              onValueChange={this.onDigitChange.bind(this)}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Lowercase</Text>
          </Left>
          <Right>
            <Switch
              value={this.state.generationParameters.lowerValue}
              onValueChange={this.onLowerChange.bind(this)}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Uppercase</Text>
          </Left>
          <Right>
            <Switch
              value={this.state.generationParameters.upperValue}
              onValueChange={this.onUpperChange.bind(this)}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Special Chars</Text>
          </Left>
          <Right>
            <Switch
              value={this.state.generationParameters.specialValue}
              onValueChange={this.onSpecialChange.bind(this)}
            />
          </Right>
        </ListItem>
      </Form>
        <Button
          iconLeft
          onPress={() => {
            this.savePasswordItemDetail(this.state.passwordItem,this.state.decryptedPassword);
            this.props.navigation.navigate("HomePage");
          }}
        >
          <Icon name="save" />
          <Text>Save</Text>
        </Button>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    passwordItems: state.PasswordItemReducer.PasswordItems
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
