import React, { Component } from 'react';
import { Form, Item, Text, Switch, Button } from 'native-base';

export default class PasswordGenerator extends Component {
    render() {
        return (
            <Form>
                <Item>
                    <Text>Digit</Text>
                    <Switch value={true} />
                </Item>
                <Item>
                    <Text>Lowercase</Text>
                    <Switch value={true} />
                </Item>
                <Item>
                    <Text>Uppercase</Text>
                    <Switch value={true} />
                </Item>
                <Item>
                    <Text>Special Chars</Text>
                    <Switch value={true} />
                </Item>
                <Button rounded>
                    <Text>Generate</Text>
                </Button>
            </Form>
        );
    }
}
