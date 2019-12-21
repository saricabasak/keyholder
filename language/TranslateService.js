import tr from './tr.json';
import en from './en.json';

export function translate (fieldName, language){
  console.log("EN bu oldumu-> " + en["passwordpage"]["name"])
    console.log("EN -> " + en.passwordpage.name)
    if(language == "en"){
        return en[fieldName];
    }
}

