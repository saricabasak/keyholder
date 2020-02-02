import { AsyncStorage } from "react-native";

const PASSWORD_ITEMS = "PASSWORD_ITEMS";
const PASSWORD_ITEMS_SEQUENCE = "PASSWORD_ITEMS_SEQUENCE";
const LANGUAGE = "LANGUAGE";
const THEME = "THEME";
const ADD_VALUE = 1;
const INITIAL_VALUE = 1;
const DEFAULT_LANGUAGE = "en";
const DEFAULT_THEME = "lightTheme";

export const retrieveAllData = async () => {
  try {
    const emptyArr = [];
    const value = await AsyncStorage.getItem(PASSWORD_ITEMS);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return emptyArr;
    }
  } catch (e) {
    console.log("ERROR!!!");
  }
};

export const retrieveNextSequenceOnStorage = async () => {
  try {
    const value = await AsyncStorage.getItem(PASSWORD_ITEMS_SEQUENCE);
    if (value !== null) {
      sequence = parseInt(JSON.parse(value)) + ADD_VALUE;
      return sequence;
    } else {
      return INITIAL_VALUE;
    }
  } catch (e) {
    console.log("ERROR!!!");
  }
};

export const retrieveLanguageOnStorage = async () => {
  try {
    const language = await AsyncStorage.getItem(LANGUAGE);
    console.log("retrieveLanguageOnStorage -> " + language);
    if (language !== null) {
      return JSON.parse(language);
    } else {
      setLanguage(DEFAULT_LANGUAGE);
      return DEFAULT_LANGUAGE;
    }
  } catch (e) {
    console.log("ERROR!!!");
  }
};

export const retrieveThemeOnStorage = async () => {
  try {
    const theme = await AsyncStorage.getItem(THEME);
    console.log("retrieveThemeOnStorage -> " + theme);
    if (theme !== null) {
      return JSON.parse(theme);
    } else {
      setTheme(DEFAULT_THEME);
      return DEFAULT_THEME;
    }
  } catch (e) {
    console.log("ERROR!!!");
  }
};

export const addDataToStorage = async PasswordItemList => {
  try {
    await AsyncStorage.setItem(
      PASSWORD_ITEMS,
      JSON.stringify(PasswordItemList)
    );
  } catch (e) {
    console.log("error saving Data -> " + e);
  }
};

export const clearAsyncStorage = async () => {
  AsyncStorage.clear();
};

export const setSequence = async sequence => {
  try {
    await AsyncStorage.setItem(
      PASSWORD_ITEMS_SEQUENCE,
      JSON.stringify(sequence)
    );
  } catch (error) {
    console.warn(error);
  }
};

export const setLanguage = async lan => {
  try {
    await AsyncStorage.setItem(
      LANGUAGE,
      JSON.stringify(lan)
    );
  } catch (error) {
    console.warn(error);
  }
};

export const setTheme = async theme => {
  try {
    console.log("setting theme on db -> " + theme )
    await AsyncStorage.setItem(
      THEME,
      JSON.stringify(theme)
    );
  } catch (error) {
    console.warn(error);
  }
};


export const isAnyPasswordDataExistsOnStorage = async () => {
  returnObject = {
    data : [],
    isKeyExists : false
  }
  try {
    const value = await AsyncStorage.getItem(PASSWORD_ITEMS);
    if (value !== null) {
      let parsedValue = JSON.parse(value);
      if (parsedValue.length > 0) {
        returnObject.data = parsedValue
        returnObject.isKeyExists = true
        return returnObject;
      }
    }
      return returnObject;
  } catch (e) {
    console.log("error isAnyPasswordDataExistsOnStorage " + e);
  }
};
