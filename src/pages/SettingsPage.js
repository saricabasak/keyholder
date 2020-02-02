import React from "react";
import { CardItem, Accordion, View, Text, Icon } from "native-base";
import { connect } from "react-redux";
import KeyHolderHeader from "../components/KeyHolderHeader";
import { translate } from "../language/TranslateService";
import { settings } from "../themes/ThemeService";
import ChangeLanguagePage from "./ChangeLanguagePage";
import ChangeMasterKeyPage from "./ChangeMasterKeyPage";
import KeyHolderContainer from '../components/KeyHolderContainer';
import ChangeThemePage from "./ChangeThemePage";


class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.duration = 2000;
  }

  returnLanguageContentPage = () => {
    return (
      <ChangeLanguagePage
        buttonStyle={settings.buttonStyle}
      />
    );
  };

  returnChangeMasterKeyPage = () => {
    return (
      <ChangeMasterKeyPage />
    );
  };
  
  returnThemeContentPage = () => {
    return (
      <ChangeThemePage
        buttonStyle={settings.buttonStyle}
      />
    );
  };

  renderAccordionHeader(item, expanded) {
    return (
      <View style={settings.itemHeaderStyle}>
        <Icon style={settings.itemHeaderIconStyle} name="settings" />
        <Text style={settings.itemHeaderTextStyle}>{item.title}</Text>
        {expanded
          ? <Icon style={settings.itemHeaderExpandIconStyle} name="arrow-up" />
          : <Icon style={settings.itemHeaderExpandIconStyle} name="arrow-down" />
        }
      </View>
    );
  }

  render() {
    return (
      <KeyHolderContainer isLogin={false}>
        <KeyHolderHeader headerTitle={translate("settings.header")} />
        <CardItem style={settings.itemStyle}>
          <Accordion
            dataArray={[{ title: translate("password.changeMasterKeyHeader") }]}
            animation={true}
            expanded={true}
            renderContent={this.returnChangeMasterKeyPage}
            renderHeader={this.renderAccordionHeader}
            style={settings.itemContentStyle}
          />
        </CardItem>
        <CardItem style={settings.itemStyle}>
          <Accordion
            dataArray={[{ title: translate("password.changeLanguageHeader") }]}
            animation={true}
            expanded={true}
            renderContent={this.returnLanguageContentPage}
            renderHeader={this.renderAccordionHeader}
            style={settings.itemContentStyle}
          />
        </CardItem>
        <CardItem style={settings.itemStyle}>
          <Accordion
            dataArray={[{ title: translate("password.changeThemeHeader") }]}
            animation={true}
            expanded={true}
            renderContent={this.returnThemeContentPage}
            renderHeader={this.renderAccordionHeader}
            style={settings.itemContentStyle}
          />
        </CardItem>
      </KeyHolderContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.PasswordItemReducer.language,
    theme: state.PasswordItemReducer.theme
  };
};

export default connect(
  mapStateToProps,
  null
)(SettingsPage);
