import tr from './tr.json';
import en from './en.json';


var _ = require('lodash');

export function translate (fieldName){
  return _.get(en,fieldName);
}
