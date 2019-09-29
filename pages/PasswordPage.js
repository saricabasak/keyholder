import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Content, View, Button, Icon, Text } from "native-base";
import PasswordItemDetail from "../components/PasswordItemDetail";
import PasswordGenerator from "../components/PasswordGenerator";
import { addDataToStorage } from "../components/StorageOperations";
import { addPasswordItemArrOnStoreAction } from "../store/actions/PasswordItemAction";
import { connect } from "react-redux";


class PasswordPage extends Component {
  constructor(props) {
    super(props);
    console.log("this.props.navigation.getParam('name', '') " + JSON.stringify(this.props.navigation.getParam('name', '')));
    this.state = {
      passwordItem: {
        name: this.props.navigation.getParam('name', ''),
        username: this.props.navigation.getParam('username', ''),
        password: this.props.navigation.getParam('password', '')
      }
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }
  componentWillReceiveProps(){
    const { navigation } = this.props;
    console.log("componentWillReceiveProps");
    console.log("this.props.navigation.getParam('username', '') " + JSON.stringify(navigation.getParam('username')));
    console.log("this.props.navigation " + JSON.stringify(navigation));
  }

  onNameChange(value: string) {
    this.setState(prevState => ({
      passwordItem: {
        ...prevState.passwordItem,
        name: value
      }
    }));
  }
  onUsernameChange(value: string) {
    this.setState(prevState => ({
      passwordItem: {
        ...prevState.passwordItem,
        username: value
      }
    }));
  }
  onPasswordChange(value: string) {
    this.setState(prevState => ({
      passwordItem: {
        ...prevState.passwordItem,
        password: value
      }
    }));
  }

  savePasswordItemDetail = passwordItem => {
    console.log("savePasswordItemDetail" + JSON.stringify(passwordItem));
    // global stora ekleyelim. Burası mantık olarak iyileştirilebilir.
    this.props.addPasswordItemArrOnStore(passwordItem);
    // storage a ekle.
    addDataToStorage(this.props.passwordItems);
  };

  render() {
    return (
      <Content
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <PasswordItemDetail
          passworditem={this.props.navigation.getParam("passworditem")}
          onNameChange={this.onNameChange}
          onUsernameChange={this.onUsernameChange}
          onPasswordChange={this.onPasswordChange}
          passwordItem={this.state.passwordItem}
        />
        <PasswordGenerator />
        <Button
          iconLeft
          onPress={() => {
            this.savePasswordItemDetail(this.state.passwordItem);
            this.props.navigation.navigate("HomePage");
          }}
        >
          <Icon name="save" />
          <Text>Save</Text>
        </Button>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    passwordItems: state.PasswordItemReducer.PasswordItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPasswordItemArrOnStore: data =>
      dispatch(addPasswordItemArrOnStoreAction(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(PasswordPage));
