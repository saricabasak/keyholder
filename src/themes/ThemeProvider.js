import React from "react";
import darkTheme from './darkTheme.json';
import lightTheme from './lightTheme.json';
import store from '../store/store';

var _ = require('lodash');

export function getStyle(item) {
  const state = store.getState();
  const theme = state.PasswordItemReducer.theme;
  console.log("getStyle called with: " + item + " - " + "Theme: " + theme);
  if (theme == "lightTheme") {
    return _.get(lightTheme, item);
  }
  else {
    return _.get(darkTheme, item);
  }
}