import React, { Component } from "react";
import { connect } from "react-redux";
import darkTheme from './darkTheme.json';

var _ = require('lodash');

export function getStyle (item){
  return _.get(darkTheme,item);
}
