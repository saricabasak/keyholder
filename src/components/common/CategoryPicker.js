import React, { Component } from "react";
import { connect } from "react-redux";
import { Item, Icon, Picker, ActionSheet, Input, Label, Button, Text } from "native-base";
import { translate } from "../../language/TranslateService";
import { Categories } from "../Categories";
import { password, colors } from "../../themes/ThemeService"



class CategoryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      validationValue: !this.props.required,
      borderColor: colors.validInputBorder
    }
  }

  getValue() {
    return this.state.category;
  }

  setValue(value) {
    this.setState({
      category: value
    })
  }

  getValidation() {
    if(this.state.category == null || this.state.category == "" ){
      return false;
    }else{
      return true;
    }
  }

  runValidation() {
    if (this.state.category == "") {
      this.setState({
        borderColor: colors.invalidInputBorder,
        validationValue: false
      });
    } else {
      this.setState({
        borderColor: colors.validInputBorder,
        validationValue: true
      });
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.category !== this.props.category) {
      this.setValue(newProps.category);
    }
  }

  renderCategoryValues = () => {
    var cat = Categories();
    let arr = [];
    cat.map(c => {
      return arr.push(translate("password.category." + c));
    });
    arr.push(translate("password.cancel"));
    return arr;//Value
  };

  renderCategoryKeys = () => {
    var cat = Categories();
    let arr = [];
    cat.map(c => {
      return arr.push(c);
    });
    arr.push(translate("password.cancel"));
    return arr;//key
  };

  openCategoryActionSheet = () => {
    optionValues = this.renderCategoryValues();
    optionKeys = this.renderCategoryKeys();
    //Cancel butonu herzaman en sonda olacak length-1 şeklinde.
    ActionSheet.show(
      {
        options: optionValues,
        cancelButtonIndex: optionValues.length - 1,
        destructiveButtonIndex: optionValues.length,
        title: "Select Category"
      },
      buttonIndex => {
        if (buttonIndex != optionValues.length - 1) {
          this.setState({
            category: optionKeys[buttonIndex]
          },
            this.runValidation)
        }
      }
    )
  }

  render() {
    return (
      <Item style={{ borderColor: this.state.borderColor }} onPress= {this.openCategoryActionSheet} >
        <Icon
          name={this.props.iconName}
          style={password.inputIconStyle}
        />
        <Button transparent onPress= {this.openCategoryActionSheet}>
          <Text style={this.state.category == "" ? password.placeholderStyle : password.categoryTextStyle}>
            {this.state.category == "" ? translate("password.categoryPlaceHolderName") : translate("password.category." + this.state.category)}
          </Text>
        </Button>
      </Item>
    )
  }
}

export default connect(null, null, null, { forwardRef: true })(CategoryPicker);
