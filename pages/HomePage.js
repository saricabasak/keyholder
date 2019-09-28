import React from "react";
import { Container, Content } from "native-base";
import PasswordHeader from '../components/PasswordHeader';
import PasswordItemList from '../components/PasswordItemList';

export default class HomePage extends React.Component {

  render(){
    return (
    <Container>
      <PasswordHeader />
      <Content>
        <PasswordItemList/>
      </Content>
    </Container>
  );
}
}
