import React, { Component } from 'react';
import { ListItem, Left, Right, Text, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

class PasswordItem extends Component {
    render() {
        return (
            <ListItem
              button
              onPress = {() => {
                console.log("PasswordItem - render - " + JSON.stringify(this.props.passworditem));
                this.props.navigation.navigate('PasswordPage', {
                  passworditem: this.props.passworditem
                })
              }}
              style = {{
                backgroundColor: 'white'
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
