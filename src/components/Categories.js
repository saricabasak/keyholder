import React from "react";
import en from "../language/en.json";
var _ = require('lodash');

export  function Categories() {
  categories = _.get(en, "password.category");
  categories = _.keys(categories);
  return categories;
}