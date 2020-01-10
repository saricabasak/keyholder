import React, { Component } from "react";
import PasswordGenerator from "./operational/PasswordGenerator.js";
import { Item, Icon } from "native-base";
import { Button, Accordion, View, List, ListItem } from "native-base";
import { Left, Right, Text, Switch, Picker } from "native-base";
import {translate} from "../language/TranslateService";
import { password, colors } from "../themes/ThemeService";


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
      <View>
        <List>
          <ListItem style={password.generatorItemStyle}>
            <Left>
              <Text style={password.generatorTextStyle}>
                {translate("password.length")}
              </Text>
            </Left>
            <Right>
              <Item picker style={password.generatorItemStyle}>
                <Picker
                  style={{ alignItems: "flex-end", width: "100%" }}
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
          <ListItem style={password.generatorItemStyle}>
            <Left>
              <Text style={password.generatorTextStyle}>
                {translate("password.digit")}
              </Text>
            </Left>
            <Right>
              <Switch
                value={this.state.generationParameters.digitValue}
                onValueChange={this.onDigitChange.bind(this)}
                trackColor={{
                  true: colors.switchTrueColor,
                  false: colors.switchFalseColor
                }}
              />
            </Right>
          </ListItem>
          <ListItem style={password.generatorItemStyle}>
            <Left>
              <Text style={password.generatorTextStyle}>
                {translate("password.lowerCase")}
              </Text>
            </Left>
            <Right>
              <Switch
                value={this.state.generationParameters.lowerValue}
                onValueChange={this.onLowerChange.bind(this)}
                trackColor={{
                  true: colors.switchTrueColor,
                  false: colors.switchFalseColor
                }}
              />
            </Right>
          </ListItem>
          <ListItem style={password.generatorItemStyle}>
            <Left>
              <Text style={password.generatorTextStyle}>
                {translate("password.upperCase")}
              </Text>
            </Left>
            <Right>
              <Switch
                value={this.state.generationParameters.upperValue}
                onValueChange={this.onUpperChange.bind(this)}
                trackColor={{
                  true: colors.switchTrueColor,
                  false: colors.switchFalseColor
                }}
              />
            </Right>
          </ListItem>
          <ListItem style={password.generatorItemStyle}>
            <Left>
              <Text style={password.generatorTextStyle}>
                {translate("password.specialChars")}
              </Text>
            </Left>
            <Right>
              <Switch
                value={this.state.generationParameters.specialValue}
                onValueChange={this.onSpecialChange.bind(this)}
                trackColor={{
                  true: colors.switchTrueColor,
                  false: colors.switchFalseColor
                }}
              />
            </Right>
          </ListItem>
        </List>
        <Button success
          style={password.buttonStyle}
          onPress={this.generatePassword.bind(this)}
        >
          <Text style={password.buttonTextStyle}>
            {translate("password.generatorButton")}
          </Text>
        </Button>
      </View>
    );
  }
}
