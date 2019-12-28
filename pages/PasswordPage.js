import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Container, Content } from "native-base";
import PasswordItemDetail from "../components/PasswordItemDetail";
import KeyHolderHeader from "../components/KeyHolderHeader";
import PageContainer from '../components/PageContainer';
import {translate} from "../language/TranslateService";

class PasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordItem: {
        id: 0,
        name: "",
        username: "",
        password: "",
        notes: "",
        category : ""
      }
    };
  }

  render() {
    return (
      <PageContainer>
        <KeyHolderHeader headerTitle = {translate("password.header")}/>
        <PasswordItemDetail
          passworditem={this.props.navigation.getParam("passworditem")}
        />
      </PageContainer>
    );
  }
}

export default withNavigation(PasswordPage);
