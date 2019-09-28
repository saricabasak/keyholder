import React from "react";
import { Container, Content, Text } from "native-base";
import PasswordHeader from '../components/PasswordHeader';

export default class ProfilePage extends React.Component {

  render(){
    return (
    <Container>
      <PasswordHeader />
      <Content padder>
          <Text>¯\_(ツ)_/¯</Text>
      </Content>
    </Container>
  );
}
}
