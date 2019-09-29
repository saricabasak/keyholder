import React, { Component } from 'react';
import { ListItem, Left, Right, Text, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

class PasswordItem extends Component {
    render() {
        return (
            <ListItem
              button
              onPress = {() => {
                console.log("nav ->>>>>>>>>>>>>>> " + JSON.stringify(this.props.navigation));
                this.props.navigation.navigate('PasswordPage', {
                name: this.props.passworditem.name,
                username: this.props.passworditem.username,
                password: this.props.passworditem.password
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
