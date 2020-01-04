import React from "react";
import { CardItem, Accordion } from "native-base";
import { connect } from "react-redux";
import KeyHolderHeader from "../components/KeyHolderHeader";
import { translate } from "../language/TranslateService";
import LanguageContentPage from "./ChangeLanguagePage";
import ChangeMasterKeyPage from "./ChangeMasterKeyPage";
import PageContainer from '../components/PageContainer';


class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.duration = 2000;
  }

  returnLanguageContentPage = () => {

    return (
      <LanguageContentPage
        buttonStyle={{ justifyContent: "center", marginTop: 3, backgroundColor: "#D96236" }}
      />
    );
  };

  returnChangeMasterKeyPage = () => {
    return (
      <ChangeMasterKeyPage />
    );
  };

  render() {
    return (
      <PageContainer>
        <KeyHolderHeader headerTitle={translate("settings.header")} />
        <CardItem style={{ backgroundColor: "#32322D" }}>
          <Accordion
            dataArray={[{ title: translate("password.changeMasterKeyHeader") }]}
            animation={true}
            expanded={true}
            renderContent={this.returnChangeMasterKeyPage}
            style={{ backgroundColor: "#64645F", color: "#FFB61E" }}
            headerStyle={{ color: "#FFB61E" }}
          />
        </CardItem>
        <CardItem style={{ backgroundColor: "#32322D", color: "#FFB61E" }}>
          <Accordion
            dataArray={[{ title: translate("password.changeLanguageHeader") }]}
            animation={true}
            expanded={true}
            renderContent={this.returnLanguageContentPage}
            headerStyle={{ backgroundColor: "#4B4B46", color: "#FFB61E" }}
            style={{ backgroundColor: "#64645F", color: "#FFB61E" }}
          />
        </CardItem>
      </PageContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.PasswordItemReducer.language
  };
};

export default connect(
  mapStateToProps,
  null
)(SettingsPage);
