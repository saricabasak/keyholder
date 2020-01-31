import React from "react";
import darkTheme from './darkTheme.json';
import lightTheme from './lightTheme.json';

var _ = require('lodash');

export function getStyle (item){
  return _.get(lightTheme,item);
}
