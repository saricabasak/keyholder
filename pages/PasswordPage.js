import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Content, View, Button, Icon, Text } from 'native-base';
import PasswordItemDetail from '../components/PasswordItemDetail';
import PasswordGenerator from '../components/PasswordGenerator';

class PasswordPage extends Component {
  render() {
    return (
      <Content contentContainerStyle = {{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
        <PasswordItemDetail passworditem={this.props.navigation.getParam('passworditem')}/>
        <PasswordGenerator />
        <Button
          iconLeft
          onPress={() => {this.props.navigation.navigate('HomePage')}}>
          <Icon name='save' />
          <Text>Save</Text>
        </Button>
      </Content>
    );
  }
}
export default withNavigation(PasswordPage);
