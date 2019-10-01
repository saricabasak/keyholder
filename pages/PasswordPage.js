import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import PasswordItemDetail from "../components/PasswordItemDetail";

class PasswordPage extends Component {
  constructor(props) {
    super(props);
    console.log("PasswordPage constructor");
    this.state = {
      passwordItem: {
        name: '',
        username: '',
        password: ''
      }
    };
  }

  render() {
    console.log("PasswordPage navigator: " + JSON.stringify(this.props.navigation));
    console.log("PasswordItemDetail called with " + JSON.stringify(this.props.navigation.getParam("passworditem")));
    return (
        <PasswordItemDetail
          passworditem={this.props.navigation.getParam("passworditem")}
        />
    );
  }
}

export default withNavigation(PasswordPage);
