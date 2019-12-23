import tr from './tr.json';
import en from './en.json';
import store from '../store/store';

var _ = require('lodash');

export function translate (fieldName){

  const state = store.getState();
  const language = state.PasswordItemReducer.language;
  if(language == "en"){
    return _.get(en,fieldName);
  }
  else {
    return _.get(tr,fieldName);
  }
}
