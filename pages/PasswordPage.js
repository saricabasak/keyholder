import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import PasswordItemDetail from "../components/PasswordItemDetail";
import PasswordHeader from "../components/PasswordHeader";

class PasswordPage extends Component {
  constructor(props) {
    super(props);
    console.log("PasswordPage constructor");
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
    console.log(
      "PasswordPage navigator: " + JSON.stringify(this.props.navigation)
    );
    console.log(
      "PasswordItemDetail called with " +
        JSON.stringify(this.props.navigation.getParam("passworditem"))
    );
    return (
      <PasswordHeader headerTitle = "New Password Item">
        <PasswordItemDetail
          passworditem={this.props.navigation.getParam("passworditem")}
        />
      </PasswordHeader>
    );
  }
}

export default withNavigation(PasswordPage);
