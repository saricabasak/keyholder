import { AsyncStorage } from "react-native";

const PASSWORD_ITEMS = "PASSWORD_ITEMS";
const PASSWORD_ITEMS_SEQUENCE = "PASSWORD_ITEMS_SEQUENCE";
const ADD_VALUE = 1;
const INITIAL_VALUE = 1;

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
