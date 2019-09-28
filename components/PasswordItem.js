import React, { Component } from 'react';
import { ListItem, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class PasswordItem extends Component {
    render() {
        return (
            <ListItem button onPress = {() => {this.props.navigation.navigate('PasswordItemDetail', {
              name: this.props.passworditem.name,
              username: this.props.passworditem.username,
              password: this.props.passworditem.password
            })}} >
                <Text>{this.props.passworditem.name}</Text>
            </ListItem>
        );
    }
}
export default withNavigation(PasswordItem);
