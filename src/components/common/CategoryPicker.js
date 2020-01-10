import React, { Component } from "react";
import { connect } from "react-redux";
import { CardItem, Item, Icon, Picker } from "native-base";
import { translate } from "../../language/TranslateService";
import Categories from "../Categories";
import { password, colors } from "../../themes/ThemeService"

class CategoryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category : "",
      validationValue : !this.props.required,
      borderColor: colors.validInputBorder
    }
  }

  getValue() {
    return this.state.category;
  }

  setValue(value){
    this.setState(
      prevState => ({
        category: value
      })
    );
  }

  getValidation(){
    return this.state.validationValue;
  }

  onCategoryChange(value) {
    this.setState(
      prevState => ({
        category: value
      }),
      this.runValidation
    );
  }

  onCategoryBlur = () => {
    this.runValidation();
  };

  runValidation(){
    if(this.state.category == ""){
      this.setState({
        borderColor: colors.invalidInputBorder,
        validationValue: false
      });
    }else{
      this.setState({
        borderColor: colors.validInputBorder,
        validationValue: true
      });
    }
  }

  componentWillReceiveProps (newProps) {
    if( newProps.inputValue !== this.props.inputValue ){
      this.setValue(newProps.inputValue);
    }
  }

  renderCategories = () => {
    var cat = Categories();
    return cat.map(c => {
      return (
        <Picker.Item
          label={translate("password.category." + c)}
          value={c}
          key = {c}
        />
      );
    });
  };

  render () {
    return (
      <Item style={{borderColor : this.state.borderColor}}>
        <Icon name="ios-list" style={password.inputIconStyle}/>
        <Picker
          mode="dropdown"
          selectedValue={this.state.category}
          onValueChange={value => this.onCategoryChange(value)}
          onBlur={this.onCategoryBlur}
          placeholder= {translate("password.categoryPlaceHolderName")}
          placeholderStyle={password.placeholderStyle}
          textStyle={password.categoryTextStyle}
          headerStyle={password.headerStyle}
          headerBackButtonTextStyle={password.headerBackButtonTextStyle}
          headerTitleStyle={password.headerTitleStyle}
          itemTextStyle={password.categoryTextStyle}
          itemStyle={password.itemStyle}
        >
          {this.renderCategories()}
        </Picker>
      </Item>
    )
  }
}

export default connect(null, null, null, {forwardRef: true})(CategoryPicker);
