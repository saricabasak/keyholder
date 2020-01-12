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
    backgroundColor: getStyle("button.backgroundColor"),
    justifyContent : 'center',
    margin : "2%"
  },
  buttonTextStyle: {
    color: getStyle("button.textColor")
  },
  transparentButtonStyle: {
    justifyContent : "flex-end",
    margin : "2%"
  },
  textStyle: {
    color: "#118ac6"
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
    backgroundColor: "#D96236",
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
    backgroundColor: "#D96236",
    right: 0
  },
  itemRowStyle: {
    borderBottomColor : "#32322D"
  },
  itemRowViewStyle: {
    backgroundColor: "#4B4B46"
  },
  itemTextStyle: {
    color:"#C8C8BE"
  }
});

export const password = StyleSheet.create({
  buttonStyle: {
    backgroundColor: getStyle("button.backgroundColor"),
    justifyContent : 'center',
    margin : "2%"
  },
  buttonTextStyle: {
    color: getStyle("button.textColor")
  },
  inputIconStyle: {
    width:"10%",
    paddingLeft:"2%",
    color:"#FFB61E"
  },
  inputStyle: {
    paddingLeft: "5%",
    color:"#FFB61E"
  },
  placeholderStyle:{
    color: "#A58132"
  },
  categoryTextStyle: {
    color: "#FFB61E"
  },
  headerStyle:{
    backgroundColor: "#32322D"
  },
  headerBackButtonTextStyle: {
    color: "#21638C"
  },
  headerTitleStyle: {
    color: "#D96236"
  },
  itemStyle: {
    marginLeft: 0,
    paddingLeft: 10,
    backgroundColor: "#4B4B46"
  },
  secureTextIconStyle: {
    color: "#118ac6"
  },
  generatorHeaderStyle: {
    padding: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#454540"
  },
  generatorHeaderIconStyle: {
    width: "10%",
    fontSize: 20,
    color: "#FFB61E"
  },
  generatorHeaderTextStyle: {
    width: "80%",
    fontWeight: "bold",
    color: "#FFB61E"
  },
  generatorHeaderExpandIconStyle: {
    fontSize: 17,
    color: "#FFB61E"
  },
  generatorItemStyle: {
    paddingLeft:"3%",
    paddingRight:"3%",
    borderColor : "#4B4B46"
  },
  generatorTextStyle:{
    color:"#FFB61E"
  },
  generatorContentStyle: {
    backgroundColor: "#64645F",
    color: "#FFB61E"
  },
});

export const settings = StyleSheet.create({
  itemStyle: {
    backgroundColor: "#32322D"
  },
  itemHeaderStyle: {
    padding: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#454540"
  },
  itemHeaderIconStyle: {
    width: "10%",
    fontSize: 20,
    color: "#FFB61E"
  },
  itemHeaderTextStyle: {
    width: "80%",
    fontWeight: "bold",
    color: "#FFB61E"
  },
  itemHeaderExpandIconStyle: {
    fontSize: 17,
    color: "#FFB61E"
  },
  itemContentStyle: {
    backgroundColor: "#64645F",
    color: "#FFB61E"
  },
  buttonStyle: {
    backgroundColor: getStyle("button.backgroundColor"),
    justifyContent : 'center',
    margin : "2%"
  },
  itemRowStyle: {
    borderBottomColor : "#32322D"
  },
  itemTextStyle: {
    paddingLeft: "2%",
    color:"#FFB61E"
  }
});

export const header = StyleSheet.create({
  headerStyle: {
    backgroundColor:"#1D1D1B"
  },
  logoStyle: {
    width: 50,
    height: 50
  },
  titleStyle: {
    color:"#D96236",
    fontWeight:"bold"
  }
});

export const container = StyleSheet.create({
  containerStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: "#32322D"
  },
  logoStyle: {
    width: "40%",
    height: "40%",
    alignSelf: "center"
  },
  titleStyle: {
    color: "#FFB61E",
    fontSize:20,
    fontWeight: "bold",
    alignSelf: "center"
  }
});

export const colors = {
  validInputBorder: "#4B4B46",
  invalidInputBorder: "red",
  placeholderTextColor: "#A58132",
  selectedColor: "#16ADF8",
  switchTrueColor: "#16ADF8",
  switchFalseColor: "#4B4B46"
}
