import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Content, List, ListItem, Left, Right, Text, Switch, Button, Item, Picker, Icon } from 'native-base';

export default class PasswordGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lengthValue: 8,
      digitValue: true,
      lowerValue: true,
      upperValue: true,
      specialValue: true
    };
  }
  onLengthChange(value: string) {
    this.setState({
      lengthValue: value
    });
  }
  onDigitChange(value: string) {
    this.setState({
      digitValue: value
    });
  }
  onLowerChange(value: string) {
    this.setState({
      lowerValue: value
    });
  }
  onUpperChange(value: string) {
    this.setState({
      upperValue: value
    });
  }
  onSpecialChange(value: string) {
    this.setState({
      specialValue: value
    });
  }

/***************************************************************/

  render() {
    return (
      <List>
        <ListItem>
          <Left>
            <Text>Length</Text>
          </Left>
          <Right>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={this.state.lengthValue}
              onValueChange={this.onLengthChange.bind(this)}
            >
              <Picker.Item label="6" value={6} />
              <Picker.Item label="8" value={8} />
              <Picker.Item label="10" value={10} />
              <Picker.Item label="12" value={12} />
              <Picker.Item label="14" value={14} />
              <Picker.Item label="16" value={16} />
              <Picker.Item label="18" value={18} />
              <Picker.Item label="20" value={20} />
            </Picker>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Digit</Text>
          </Left>
          <Right>
            <Switch
              value={this.state.digitValue}
              onValueChange={this.onDigitChange.bind(this)}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Lowercase</Text>
          </Left>
          <Right>
            <Switch
              value={this.state.lowerValue}
              onValueChange={this.onLowerChange.bind(this)}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Uppercase</Text>
          </Left>
          <Right>
            <Switch
              value={this.state.upperValue}
              onValueChange={this.onUpperChange.bind(this)}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Special Chars</Text>
          </Left>
          <Right>
            <Switch
              value={this.state.specialValue}
              onValueChange={this.onSpecialChange.bind(this)}
            />
          </Right>
        </ListItem>
      </List>
    );
  }
}
