import React from "react";
import { Content, Text } from "native-base";
import PasswordHeader from "../components/PasswordHeader";

export default class ProfilePage extends React.Component {
  render() {
    return (
      <PasswordHeader>
        <Content
          contentContainerStyle={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center"
          }}
        >
          <Text>¯\_(ツ)_/¯</Text>
        </Content>
      </PasswordHeader>
    );
  }
}
