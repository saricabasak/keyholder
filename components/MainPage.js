import React from "react";
import { Container, Content } from "native-base";
import PasswordHeader from './PasswordHeader';
import PasswordItemList from './PasswordItemList';
import PasswordFooter from './PasswordFooter';

export default function MainPage() {
  return (
    <Container>
      <PasswordHeader />
      <Content>
        <PasswordItemList />
      </Content>
      <PasswordFooter />
    </Container>
  );
}
