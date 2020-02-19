import React, { Component } from "react";
import { connect } from "react-redux";
import { View, List, Button, Text } from "native-base";
import LengthInput from "./input/LengthInput";
import SwitchInput from "./input/SwitchInput";
import {translate} from "../language/TranslateService";
import { password } from "../themes/ThemeService";
import PasswordGenerator from "./operational/PasswordGenerator.js";


class PasswordGeneration extends Component {
  constructor(props) {
    super(props);
  }

  generatePassword = () => {
    let generationParameters = {};
    generationParameters.lengthValue = this.refs.lengthRef.getValue();
    generationParameters.digitValue = this.refs.digit.getValue();
    generationParameters.lowerValue = this.refs.lowerCase.getValue();
    generationParameters.upperValue = this.refs.upperCase.getValue();
    generationParameters.specialValue = this.refs.specialChar.getValue();
    let generatedPassword = PasswordGenerator.generatePassword(generationParameters);
    this.props.getGeneratedPassword(generatedPassword);
  }

  render() {
    return (
      <View style={password.generatorContentStyle}>
        <LengthInput ref="lengthRef" />
        <SwitchInput ref="digit" name={translate("password.digit")}/>
        <SwitchInput ref="lowerCase" name={translate("password.lowerCase")}/>
        <SwitchInput ref="upperCase" name={translate("password.upperCase")}/>
        <SwitchInput ref="specialChar" name={translate("password.specialChars")}/>
        <Button success
          style={password.buttonStyle}
          onPress={this.generatePassword}>
          <Text style={password.buttonTextStyle}>
            {translate("password.generatorButton")}
          </Text>
        </Button>
      </View>
    );
  }
}
export default connect(null, null, null, {forwardRef: true})(PasswordGeneration)
