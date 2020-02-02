import React, { Component } from "react";
import { Text, Button, View, Toast } from "native-base";
import LanguageRadio from "../components/common/LanguageRadio";
import { translate } from "../language/TranslateService";
import { connect } from "react-redux";
import { updateThemeAction } from "../store/actions/PasswordItemAction";
import { withNavigation } from "react-navigation";
import { setTheme } from "../components/operational/StorageOperations";

class ChangeThemePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.props.theme
    };
    this.duration = 2000;
  }

  onPressedLightThemeRadio = () => {
    this.setState({
      theme : "lightTheme"
    });
  };
  onPressedDarkThemeRadio = () => {
    this.setState({
      theme : "darkTheme"
    });
  };

  isLightTheme = () => {
    return this.state.theme == "lightTheme"
  }
  isDarkTheme = () => {
    return this.state.theme == "darkTheme"
  }

  saveTheme = () => {
    console.log("theme: " + this.state.theme)
    var theme = this.state.theme;
    this.props.updateTheme(theme);
    setTheme(theme);
    Toast.show({
      text: translate("settings.themeSuccessMessage"),
      buttonText: translate("settings.toastButton"),
      duration: this.duration,
      type: "success"
    });
  };

  render() {
    return (
      <View>
        <LanguageRadio
          itemOnPressed={this.onPressedLightThemeRadio}
          leftText={translate("theme.light")}
          radioSelectedFlag={this.isLightTheme()}
        />
        <LanguageRadio
          itemOnPressed={this.onPressedDarkThemeRadio}
          leftText={translate("theme.dark")}
          radioSelectedFlag={this.isDarkTheme()}
        />
        <Button
          style={this.props.buttonStyle}
          onPress={this.saveTheme}
        >
          <Text>{translate("settings.saveButton")}</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.PasswordItemReducer.theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTheme: data => dispatch(updateThemeAction(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(ChangeThemePage));
