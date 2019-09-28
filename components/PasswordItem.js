import React, { Component } from 'react';
import { ListItem, Text } from 'native-base';

export default class PasswordItem extends Component {
    render() {
        return (
            <ListItem onPress = {this.props.navigatePasswordItemDetail}>
                <Text>Password Item</Text>
            </ListItem>
        );
    }
}
