import React, { Component } from "react";
import { connect } from "react-redux";
import { CardItem, Item, Icon, Picker } from "native-base";
import { translate } from "../../language/TranslateService";
import Categories from "../Categories";

class CategoryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category : "",
      validationValue : !this.props.required,
      borderColor: "#4B4B46"
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
        borderColor: "red",
        validationValue: false
      });
    }else{
      this.setState({
        borderColor: "#4B4B46",
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
        <Icon name="ios-list" style={{ width:"5%", color:"#FFB61E"}}/>
        <Picker
          mode="dropdown"
          selectedValue={this.state.category}
          onValueChange={value => this.onCategoryChange(value)}
          onBlur={this.onCategoryBlur}
          placeholder= {translate("password.categoryPlaceHolderName")}
          placeholderStyle={{ color: "#A58132" }}
          textStyle={{ color: "#FFB61E" }}
          headerStyle={{ backgroundColor: "#32322D" }}
          headerBackButtonTextStyle={{ color: "#21638C" }}
          headerTitleStyle={{ color: "#D96236" }}
          itemTextStyle={{ color: '#FFB61E' }}
          itemStyle={{
            marginLeft: 0,
            paddingLeft: 10,
            backgroundColor: "#4B4B46"
          }}
        >
          {this.renderCategories()}
        </Picker>
      </Item>
    )
  }
}

export default connect(null, null, null, {forwardRef: true})(CategoryPicker);
