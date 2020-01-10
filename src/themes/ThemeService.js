import React, { Component } from "react";
import { connect } from "react-redux";
import { CardItem, Item, Icon, Input } from "native-base";

class ThemeService extends Component {

  getButtonStyle = () => {
    return (
    style={{
      margin: 5,
      backgroundColor: "#D96236",
      justifyContent: "center"
    }}
    );
  }
}

export default ThemeService;
