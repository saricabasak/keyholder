import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import darkTheme from './darkTheme.json';
import { getStyle } from './ThemeProvider';

export const navigator = StyleSheet.create({
  iconStyle: {
    color: getStyle("navigator.iconColor")
  },
  indicatorStyle: {
    backgroundColor: getStyle("navigator.indicatorColor")
  },
  style: {
    backgroundColor: getStyle("navigator.backgroundColor")
  }
});

export const login = StyleSheet.create({
  buttonStyle: {
    backgroundColor: getStyle("login.regularButton.backgroundColor"),
    justifyContent : 'center',
    margin : "2%"
  },
  buttonTextStyle: {
    color: getStyle("login.regularButton.textColor")
  },
  transparentButtonStyle: {
    justifyContent : "flex-end",
    margin : "2%"
  },
  textStyle: {
    color: getStyle("login.transparentButton.textColor")
  },
  KeyboardAvoidingViewStyle:{
    flex : 2
  }
});

export const home = StyleSheet.create({
  categoryItemStyle:{
    backgroundColor: getStyle("home.category.backgroundColor")
  },
  categoryIconStyle: {
    width:"10%",
    color: getStyle("home.category.iconColor")
  },
  categoryTextStyle: {
    fontWeight:"bold",
    color: getStyle("home.category.textColor")
  },
  swipeRowViewStyle: {
    alignItems: "center",
    backgroundColor: getStyle("home.swipeRow.backgroundColor"),
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  swipeRowStyle: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
    backgroundColor: getStyle("home.swipeRow.backgroundColor"),
    right: 0
  },
  itemRowStyle: {
    borderBottomColor : getStyle("home.itemRow.borderBottomColor")
  },
  itemRowViewStyle: {
    backgroundColor: getStyle("home.itemRow.backgroundColor")
  },
  itemTextStyle: {
    color: getStyle("home.itemRow.textColor")
  }
});

export const password = StyleSheet.create({
  buttonStyle: {
    backgroundColor: getStyle("password.button.backgroundColor"),
    justifyContent : 'center',
    margin : "2%"
  },
  buttonTextStyle: {
    color: getStyle("password.button.textColor")
  },
  inputIconStyle: {
    width:"10%",
    paddingLeft:"2%",
    color: getStyle("password.input.iconColor")
  },
  inputStyle: {
    paddingLeft: "5%",
    paddingRight: "5%",
    color: getStyle("password.input.textColor"),
    height:50,
    flex: 1
  },
  multilineInputStyle: {
    paddingLeft: "5%",
    paddingRight: "5%",
    color: getStyle("password.input.iconColor"),
    height:75,
    flex: 1
  },
  placeholderStyle:{
    color: getStyle("password.input.placeholderColor")
  },
  categoryTextStyle: {
    color: getStyle("password.input.textColor")
  },
  secureTextIconStyle: {
    color: getStyle("password.input.secureIconColor")
  },
  headerStyle:{
    backgroundColor: getStyle("password.header.backgroundColor")
  },
  headerBackButtonTextStyle: {
    color: getStyle("password.header.backTextColor")
  },
  headerTitleStyle: {
    color: getStyle("password.header.titleColor")
  },
  generatorHeaderStyle: {
    padding: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: getStyle("password.generator.headerColor")
  },
  generatorHeaderIconStyle: {
    width: "10%",
    fontSize: 20,
    color: getStyle("password.generator.textColor")
  },
  generatorHeaderTextStyle: {
    width: "80%",
    fontWeight: "bold",
    color: getStyle("password.generator.textColor")
  },
  generatorHeaderExpandIconStyle: {
    fontSize: 17,
    color: getStyle("password.generator.textColor")
  },
  generatorItemStyle: {
    paddingLeft:"3%",
    paddingRight:"3%",
    borderColor : getStyle("password.generator.borderColor")
  },
  generatorTextStyle:{
    color: getStyle("password.generator.textColor")
  },
  generatorContentStyle: {
    backgroundColor: getStyle("password.generator.backgroundColor"),
    color: getStyle("password.generator.textColor")
  },
});

export const settings = StyleSheet.create({
  itemStyle: {
    backgroundColor: getStyle("password.settings.backgroundColor")
  },
  itemHeaderStyle: {
    padding: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: getStyle("password.settings.headerColor")
  },
  itemHeaderIconStyle: {
    width: "10%",
    fontSize: 20,
    color: getStyle("settings.textColor")
  },
  itemHeaderTextStyle: {
    width: "80%",
    fontWeight: "bold",
    color: getStyle("settings.textColor")
  },
  itemHeaderExpandIconStyle: {
    fontSize: 17,
    color: getStyle("settings.textColor")
  },
  itemContentStyle: {
    backgroundColor: getStyle("settings.contentColor"),
    color: getStyle("settings.textColor")
  },
  buttonStyle: {
    backgroundColor: getStyle("settings.buttonColor"),
    justifyContent : 'center',
    margin : "2%"
  },
  itemRowStyle: {
    borderBottomColor : getStyle("settings.backgroundColor")
  },
  itemTextStyle: {
    paddingLeft: "2%",
    color: getStyle("settings.textColor")
  }
});

export const header = StyleSheet.create({
  headerStyle: {
    backgroundColor: getStyle("header.backgroundColor")
  },
  logoStyle: {
    width: 50,
    height: 50
  },
  titleStyle: {
    color: getStyle("header.titleColor"),
    fontWeight:"bold"
  }
});

export const container = StyleSheet.create({
  containerStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: getStyle("container.backgroundColor")
  },
  logoStyle: {
    width: "40%",
    height: "40%",
    alignSelf: "center"
  },
  titleStyle: {
    color: getStyle("container.titleColor"),
    fontSize:20,
    fontWeight: "bold",
    alignSelf: "center"
  }
});

export const colors = {
  validInputBorder: getStyle("common.validInputBorder"),
  invalidInputBorder: getStyle("common.invalidInputBorder"),
  placeholderTextColor: getStyle("common.placeholderTextColor"),
  selectedColor: getStyle("common.selectedColor"),
  switchTrueColor: getStyle("common.switchTrueColor"),
  switchFalseColor: getStyle("common.switchFalseColor"),
  androidStatusBarColor: getStyle("header.backgroundColor")
}
