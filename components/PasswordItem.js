import React, { Component } from 'react';
import { ListItem, Left, Right, Text, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';


class PasswordItem extends Component {
    render() {
      //console.log("PasswordItem render started")
      //console.log("PasswordItem this.props.key : "+ this.props._key)
      //console.log("PasswordItem this.props.passworditem : "+ JSON.stringify(this.props.passworditem))
        return (
            <ListItem
              key = {this.props._key}
              button
              onPress = {() => {
                this.props.navigation.navigate('PasswordPage', {
                  passworditem: this.props.passworditem
                })
              }}
            >
              <Left>
                <Text>{this.props.passworditem.name}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
        );
    }
}

export default withNavigation(PasswordItem);
