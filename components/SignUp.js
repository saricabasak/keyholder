import React, { Component } from "react";
import {
  Item,
  Icon,
  Input,
  Button,
  Text,
  Toast,
  Content,
  Card,
  CardItem,
  Container,
  Body,
  Left
} from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import {setMasterKeyAction} from "../store/actions/PasswordItemAction";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKey: ""
    };
    this.onMasterKeyInputChange = this.onMasterKeyInputChange.bind(this);
  }

  onMasterKeyInputChange(value) {
    this.setState({
      masterKey: value
    });
  }

  onSpecifyMasterKeyProcessButton = () => {
    this.props.setMasterKey(this.state.masterKey);
    this.props.navigation.navigate("HomePage");
  };

  render() {
    return (
<Container>
<Body>
<Left>
  <Text>
    Welcome to the best key keeper application ever. Portunus is simple and useful that all apps get inspired from.
  </Text>
  <Text>
  </Text>
  <Text>
  Please Specify master key for secure all of your passwords.
  </Text>  
  <Text>
    Remember, Do not forget your master key!!
  </Text>
  </Left>
</Body>
<Content
  contentContainerStyle={{
    flex: 1,
    justifyContent: "space-between"
  }}
>
  <Card>
    <CardItem>
      <Item>
        <Icon name="key" />
        <Input
          placeholder="Specify Master Key"
          value={this.state.masterKey}
          onChangeText={this.onMasterKeyInputChange}
          secureTextEntry={true}
        />
      </Item>
    </CardItem>
    <Button onPress={this.onSpecifyMasterKeyProcessButton}>
      <Text>Sign Up</Text>
    </Button>
  </Card>
</Content>
</Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setMasterKey: data =>
      dispatch(setMasterKeyAction(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(SignUp));
