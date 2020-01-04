import React, { Component } from "react";
import { Text, Button, View, Toast } from "native-base";
import LanguageRadio from "../components/common/LanguageRadio";
import { translate } from "../language/TranslateService";
import { connect } from "react-redux";
import {  updateLanguageAction } from "../store/actions/PasswordItemAction";
import { withNavigation } from "react-navigation";
import { setLanguage } from "../components/StorageOperations";

class LanguageContentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trRadio: this.props.language == "tr" ? true : false,
      enRadio: this.props.language == "en" ? true : false
    };
    this.duration = 2000;
  }
  
  onPressedEnglishRadio = () => {
    this.setState({
      enRadio: true,
      trRadio: false
    });
  };
  onPressedTurkishRadio = () => {
    this.setState({
      trRadio: true,
      enRadio: false
    });
  };

  saveLanguage = () => {
    var language = this.state.enRadio ? "en" : "tr";
    this.props.updateLanguage(language);
    setLanguage(language);
    Toast.show({
      text: translate("settings.languageSuccessMessage"),
      buttonText: translate("settings.toastButton"),
      duration: this.duration,
      type: "success"
    });
  };

  render() {
    return (
      <View>
        <LanguageRadio
          itemOnPressed={this.onPressedEnglishRadio}
          leftText={translate("language.english")}
          radioSelectedFlag={this.state.enRadio}
        />
        <LanguageRadio
          itemOnPressed={this.onPressedTurkishRadio}
          leftText={translate("language.turkish")}
          radioSelectedFlag={this.state.trRadio}
        />
        <Button
          style={this.props.buttonStyle}
          onPress={this.saveLanguage}
        >
          <Text>{translate("settings.saveButton")}</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.PasswordItemReducer.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLanguage: data => dispatch(updateLanguageAction(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(LanguageContentPage));