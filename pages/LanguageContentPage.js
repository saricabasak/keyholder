import React, { Component } from "react";
import { Content, Text, Button, View } from "native-base";
import LanguageRadio from "../components/common/LanguageRadio";
import { translate } from "../language/TranslateService";

class LanguageContentPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <LanguageRadio
          itemOnPressed={this.props.onPressedEnglishRadio}
          leftText={translate("language.english")}
          radioSelectedFlag={this.props.enRadio}
        />
        <LanguageRadio
          itemOnPressed={this.props.onPressedTurkishRadio}
          leftText={translate("language.turkish")}
          radioSelectedFlag={this.props.trRadio}
        />
        <Button
          style={this.props.buttonStyle}
          onPress={this.props.saveLanguage}
        >
          <Text>{this.props.buttonText}</Text>
        </Button>
      </View>
    );
  }
}

export default LanguageContentPage;
