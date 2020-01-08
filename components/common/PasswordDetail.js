import React, { Component } from "react";
import { connect } from "react-redux";
import InputItem from "./InputItem"
import PasswordInput from "./PasswordInput"
import CategoryPicker from "./CategoryPicker"
import PasswordGeneration from "../PasswordGeneration";
import { Accordion, View } from "native-base";
import { encrypt, decrypt } from "../Encryption";
import { translate } from "../../language/TranslateService";

class PasswordDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordItem: {
        id: 0,
        category: "",
        name: "",
        username: "",
        password: "",
        notes: ""
      },
      secureText: true,
      decryptedPassword: ""
    }
  }

  componentWillReceiveProps(props) {
    this.setState(prevState => ({
      passwordItem: {
        ...prevState.passwordItem,
        id: props.passworditem.id,
        name: props.passworditem.name,
        username: props.passworditem.username,
        password: props.passworditem.password,
        notes: props.passworditem.notes,
        category: props.passworditem.category
      }
    }));
  }

  getPasswordDetail(){
    this.state.passwordItem.category = this.refs.categoryItem.getValue();
    this.state.passwordItem.name = this.refs.nameItem.getValue();
    this.state.passwordItem.username = this.refs.usernameItem.getValue();
    this.state.passwordItem.password = this.refs.notesItem.getValue();
    this.state.passwordItem.notes = this.refs.notesItem.getValue();

    return this.state.passwordItem;
  }

  getValidation(){
    return (
      this.refs.categoryItem.getValidation() &&
      this.refs.nameItem.getValidation() &&
      this.refs.usernameItem.getValidation() &&
      this.refs.notesItem.getValidation()
    );
  }

  generatorContent() {
    return (
      <PasswordGeneration
        setDecryptedPassword={this.setDecryptedPassword}
      />
    );
  }

  render() {
    return (
      <View>
        <CategoryPicker
          ref="categoryItem"
          inputValue={this.state.passwordItem.category}
          required={true}
        />
        <InputItem
          ref="nameItem"
          iconName="bookmark"
          placeholder={translate("password.name")}
          inputValue={this.state.passwordItem.name}
          required={true}
        />
        <InputItem
          ref="usernameItem"
          iconName="person"
          placeholder={translate("password.username")}
          inputValue={this.state.passwordItem.username}
          required={true}
        />
        <InputItem
          ref="notesItem"
          iconName="paper"
          placeholder={translate("password.notes")}
          inputValue={this.state.passwordItem.notes}
          required={false}
        />
        <Accordion
          style={{padding:"1%"}}
          dataArray={[{ title: translate("password.generatorHeader") }]}
          animation={true}
          expanded={true}
          renderContent={this.generatorContent}
          headerStyle={{ color:"#A58132", backgroundColor:"#7D7D78"}}
        />
      </View>
    );
  }
}

export default connect(null, null, null, {forwardRef: true})(PasswordDetail);
