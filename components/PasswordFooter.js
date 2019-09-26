import React, { Component } from 'react';
import { Button, Icon, Footer, FooterTab } from 'native-base';

export default class PasswordFooter extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button >
                        <Icon name='person' />
                    </Button>
                    <Button>
                        <Icon name='home' />
                    </Button>
                    <Button>
                        <Icon name='add-circle' />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
