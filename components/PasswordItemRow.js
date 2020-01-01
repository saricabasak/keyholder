import React, { Component } from 'react';
import { ListItem, Left, Right, Text, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';


class PasswordItemRow extends Component {
    render() {
        return (
            <ListItem
              key = {this.props._key}
              button
              style = {{borderBottomColor : "#32322D"}}
              onPress = {() => {
                this.props.navigation.navigate('PasswordPage', {
                  passworditem: this.props.passworditem
                })
              }}
            >
              <Left>
                <Text style={{color:"#C8C8BE"}}>
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
