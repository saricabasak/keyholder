import React from "react";
import { Container, Content,Button } from "native-base";
import PasswordHeader from './PasswordHeader';
import PasswordItemList from './PasswordItemList';
import PasswordFooter from './PasswordFooter';

export default class MainPage extends React.Component {
  
  render(){
    const navigatePasswordItemDetail = () => {
      this.props.navigation.navigate('PasswordItemDetail')
    }

    return (
    <Container>
      <PasswordHeader />
      <Content>
        <PasswordItemList navigatePasswordItemDetail = {navigatePasswordItemDetail} />
      </Content>
      <PasswordFooter />
    </Container>
  );
}
}
