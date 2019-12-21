import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import PasswordItemDetail from "../components/PasswordItemDetail";
import PasswordHeader from "../components/PasswordHeader";
import {translate} from "../language/TranslateService";

class PasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordItem: {
        id: 0,
        name: "",
        username: "",
        password: ""
      }
    };
  }

  render() {
    return (
      <PasswordHeader headerTitle = {translate("password.header")}>
        <PasswordItemDetail
          passworditem={this.props.navigation.getParam("passworditem")}
        />
      </PasswordHeader>
    );
  }
}

export default withNavigation(PasswordPage);
