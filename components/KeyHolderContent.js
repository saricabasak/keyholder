import React, {Component} from 'react';
import { Content } from "native-base";

export default class KeyHolderContent extends Component {
  render() {
    let justifyContent = this.props.justifyContent;
    return (
      <Content
        contentContainerStyle={{
          padding: "1%",
          flex: 1,
          flexDirection: "column",
          justifyContent: justifyContent
        }}
      >
        {this.props.children}
      </Content>
    );
  }
}
