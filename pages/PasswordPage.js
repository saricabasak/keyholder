import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Container, Content } from "native-base";
import PasswordItemDetail from "../components/PasswordItemDetail";
import KeyHolderHeader from "../components/KeyHolderHeader";
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
      <Container>
        <KeyHolderHeader headerTitle = {translate("password.header")}/>
        <PasswordItemDetail
          passworditem={this.props.navigation.getParam("passworditem")}
        />
      </Container>
    );
  }
}

export default withNavigation(PasswordPage);
