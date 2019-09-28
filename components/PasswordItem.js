import React, { Component } from 'react';
import { ListItem, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class PasswordItem extends Component {
    render() {
        return (
            <ListItem button onPress = {() => {this.props.navigation.navigate('PasswordItemDetail')}}>
                <Text>Password Item</Text>
            </ListItem>
        );
    }
}
export default withNavigation(PasswordItem);
