import React, { Component } from 'react';
import { Form, Item, Label, Input } from 'native-base';
import PasswordHeader from './PasswordHeader';

export default class PasswordItemDetail extends Component {
    static navigationOptions = {
        headerTitle: <PasswordHeader/>,
      };
    render() {
        return (
            <Form>
                <Item floatingLabel>
                    <Label>Name</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Username</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input />
                </Item>
            </Form>
        );
    }
}
