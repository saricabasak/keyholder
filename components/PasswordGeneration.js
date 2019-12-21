import React, { Component } from "react";
import PasswordGenerator from "./PasswordGenerator.js";
import { encrypt, decrypt } from "./Encryption";
import {
  Content,
  Form,
  Item,
  Icon,
  Input,
  Button,
  Accordion,
  View,
  List
} from "native-base";
import {
  ListItem,
  Left,
  Right,
  Text,
  Switch,
  Picker,
  Toast
} from "native-base";
import {translate} from "../language/TranslateService";


export default class PasswordGeneration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generationParameters: {
        lengthValue: 8,
        digitValue: true,
        lowerValue: true,
        upperValue: true,
        specialValue: true
      },
      decryptedPassword: ""
    };
  }

  generatePassword() {
    let decryptedPassword = PasswordGenerator.generatePassword(
      this.state.generationParameters
    );
    this.props.setDecryptedPassword(decryptedPassword);
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
  render() {
    return (
      <Content
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
        scrollEnabled
      >
        <List>
          <ListItem>
            <Left>
              <Text>{translate("password.length")}</Text>
            </Left>
            <Right>
              <Item picker style={{ borderColor: "transparent" }}>
                <Picker
                  style={{ alignItems: "flex-end", width: 100 }}
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  selectedValue={this.state.generationParameters.lengthValue}
                  onValueChange={value => this.onLengthChange(value)}
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
              </Item>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>{translate("password.digit")}</Text>
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
              <Text>{translate("password.lowerCase")}</Text>
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
              <Text>{translate("password.upperCase")}</Text>
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
              <Text>{translate("password.specialChars")}</Text>
            </Left>
            <Right>
              <Switch
                value={this.state.generationParameters.specialValue}
                onValueChange={this.onSpecialChange.bind(this)}
              />
            </Right>
          </ListItem>
        </List>
        <Button
          style={{ justifyContent: "center" }}
          onPress={this.generatePassword.bind(this)}
        >
          <Text>{translate("password.generatorButton")}</Text>
        </Button>
      </Content>
    );
  }
}
