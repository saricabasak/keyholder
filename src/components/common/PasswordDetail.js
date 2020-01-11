import React, { Component } from "react";
import { connect } from "react-redux";
import InputItem from "./InputItem"
import PasswordInput from "./PasswordInput"
import CategoryPicker from "./CategoryPicker"
import PasswordGeneration from "../PasswordGeneration";
import { Accordion, View, Icon, Text } from "native-base";
import { encrypt, decrypt } from "../operational/Encryption";
import { translate } from "../../language/TranslateService";
import { password } from "../../themes/ThemeService";

class PasswordDetail extends Component {
  constructor(props) {
    super(props);
  }

  getPasswordDetail(){
    let passwordItem = {};
    passwordItem.id = this.props.passworditem.id;
    passwordItem.category = this.refs.categoryItem.getValue();
    passwordItem.name = this.refs.nameItem.getValue();
    passwordItem.username = this.refs.usernameItem.getValue();
    passwordItem.password = this.refs.passwordItem.getValue();
    passwordItem.notes = this.refs.notesItem.getValue();
    console.log("getPasswordDetail passwordItem -> " + JSON.stringify(passwordItem))
    return passwordItem;
  }

  getValidation(){
    return (
      this.refs.categoryItem.getValidation() &&
      this.refs.nameItem.getValidation() &&
      this.refs.usernameItem.getValidation() &&
      this.refs.passwordItem.getValidation()
    );
  }

  componentWillReceiveProps(props) {
    let decryptedPassword = props.passworDecrypt(props.passworditem.password);
    this.refs.categoryItem.setValue(props.passworditem.category);
    this.refs.nameItem.setValue(props.passworditem.name);
    this.refs.usernameItem.setValue(props.passworditem.username);
    this.refs.passwordItem.setValue(decryptedPassword);
    this.refs.notesItem.setValue(props.passworditem.notes);
    console.log("componentWillReceiveProps props.passworditem.category -> " + JSON.stringify(props.passworditem.category))
  }

  renderAccordionHeader(item, expanded) {
    return (
      <View style={password.generatorHeaderStyle}>
        <Icon style={password.generatorHeaderIconStyle} name="settings" />
        <Text style={password.generatorHeaderTextStyle}>{item.title}</Text>
        {expanded
          ? <Icon style={password.generatorHeaderExpandIconStyle} name="arrow-up" />
          : <Icon style={password.generatorHeaderExpandIconStyle} name="arrow-down" />
        }
      </View>
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
          required={true}
          iconName="ios-list"
          placeholder = {translate("password.categoryPlaceHolderName")}
          placeholderStyle = {password.placeholderStyle}
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
          style={{padding:"1%", paddingTop:"5%"}}
          dataArray={[{ title: translate("password.generatorHeader") }]}
          animation={true}
          expanded={true}
          renderContent={this.generatorContent}
          renderHeader={this.renderAccordionHeader}
        />
      </View>
    );
  }
}

export default connect(null, null, null, {forwardRef: true})(PasswordDetail);
