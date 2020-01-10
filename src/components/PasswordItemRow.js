import React, { Component } from 'react';
import { ListItem, Left, Right, Text, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';
import { home } from "../themes/ThemeService";


class PasswordItemRow extends Component {
    render() {
        return (
            <ListItem
              key = {this.props._key}
              button
              style = {home.itemRowStyle}
              onPress = {() => {
                this.props.navigation.navigate('PasswordPage', {
                  passworditem: this.props.passworditem
                })
              }}
            >
              <Left>
                <Text style={home.itemTextStyle}>
                  {this.props.passworditem.name}
                </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
        );
    }
}

export default withNavigation(PasswordItemRow);
