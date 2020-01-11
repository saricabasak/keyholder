import React, { Component } from "react";
import { connect } from "react-redux";
import { Item, Icon, Picker, ActionSheet, Input, Label, Button, Text } from "native-base";
import { translate } from "../../language/TranslateService";
import { Categories } from "../Categories";
import { password, colors } from "../../themes/ThemeService"

var CANCEL_INDEX = 7;

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
    this.setState(
      prevState => ({
        category: value
      })
    );
  }

  getValidation() {
    return this.state.validationValue;
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
    if (newProps.inputValue !== this.props.inputValue) {
      this.setValue(newProps.inputValue);
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
    ActionSheet.show(
      {
        options: optionValues,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: 8,
        title: "Select Category"
      },
      buttonIndex => {
        if(buttonIndex != 7){
          this.setValue(optionKeys[buttonIndex])
        }
        this.runValidation()
      }
    )
  }

  render() {
    return (
      <Item style={{ borderColor: this.state.borderColor }} >
        <Icon
          name={this.props.iconName}
          style={password.inputIconStyle}
        />
        <Button transparent onPress={this.openCategoryActionSheet}>
          <Text style = {this.state.category == "" ? password.placeholderStyle : password.categoryTextStyle }>
            {this.state.category == ""
              ? translate("password.categoryPlaceHolderName")
              : translate("password.category." + this.state.category)}
          </Text>
        </Button>
      </Item>
    )
  }
}

export default connect(null, null, null, { forwardRef: true })(CategoryPicker);
