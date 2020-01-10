import React, { Component } from "react";
import { connect } from "react-redux";
import InputItem from "./InputItem"
import PasswordInput from "./PasswordInput"
import CategoryPicker from "./CategoryPicker"
import PasswordGeneration from "../PasswordGeneration";
import { Accordion, View } from "native-base";
import { encrypt, decrypt } from "../operational/Encryption";
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
      }
    }
  }

  getPasswordDetail(){
    this.state.passwordItem.id = this.props.passworditem.id;
    this.state.passwordItem.category = this.refs.categoryItem.getValue();
    this.state.passwordItem.name = this.refs.nameItem.getValue();
    this.state.passwordItem.username = this.refs.usernameItem.getValue();
    this.state.passwordItem.password = this.refs.passwordItem.getValue();
    this.state.passwordItem.notes = this.refs.notesItem.getValue();

    return this.state.passwordItem;
  }

  getValidation(){
    return (
      this.refs.categoryItem.getValidation() &&
      this.refs.nameItem.getValidation() &&
      this.refs.usernameItem.getValidation() &&
      this.refs.passwordItem.getValidation() &&
      this.refs.notesItem.getValidation()
    );
  }

  componentWillReceiveProps(props) {
    console.log("PPPPPPPPP componentWillReceiveProps: " + JSON.stringify(props))

    let decryptedPassword = props.passworDecrypt(props.passworditem.password);
    this.refs.categoryItem.setValue(props.passworditem.category);
    this.refs.nameItem.setValue(props.passworditem.name);
    this.refs.usernameItem.setValue(props.passworditem.username);
    this.refs.passwordItem.setValue(decryptedPassword);
    this.refs.notesItem.setValue(props.passworditem.notes);
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
          required={true}
        />
        <InputItem
          ref="nameItem"
          iconName="bookmark"
          placeholder={translate("password.name")}
          required={true}
        />
        <InputItem
          ref="usernameItem"
          iconName="person"
          placeholder={translate("password.username")}
          required={true}
        />
        <PasswordInput
          ref="passwordItem"
          iconName="key"
          placeholder={translate("password.password")}
          required={true}
        />
        <InputItem
          ref="notesItem"
          iconName="paper"
          placeholder={translate("password.notes")}
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
