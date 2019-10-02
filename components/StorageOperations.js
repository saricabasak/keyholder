import { AsyncStorage } from "react-native";

const PASSWORD_ITEMS = "PASSWORD_ITEMS";
const PASSWORD_ITEMS_SEQUENCE = "PASSWORD_ITEMS_SEQUENCE";
const ADD_VALUE = 1; 
const INITIAL_VALUE = 1; 

export const retrieveAllData = async () => {
  try {
    const emptyArr = []
    console.log("storage - retrieveAllData");
    const value = await AsyncStorage.getItem(PASSWORD_ITEMS);
    if (value !== null) {
      console.log("retrieveAllData - value" + value);
      console.log("retrieveAllData - JSON" + JSON.parse(value));
      return JSON.parse(value);
    }
    else {
        return emptyArr;
    }
  } catch (e) {
    console.log("error retrieveData All");
  }
};

export const retrieveNextSequenceOnStorage = async () => {
  try {
    console.log("storage - retrieveSequenceOnStorage");
    const value = await AsyncStorage.getItem(PASSWORD_ITEMS_SEQUENCE);
    if (value !== null) {
      console.log("retrieveNextSequenceOnStorage - value" + value);
      console.log("retrieveNextSequenceOnStorage - JSON" + JSON.parse(value));
      sequence = parseInt(JSON.parse(value)) +  ADD_VALUE;
      return sequence;
    }
    else {
        return INITIAL_VALUE;
    }
  } catch (e) {
    console.log("storage - retrieveSequenceOnStorage");
  }
};

export const addDataToStorage = async PasswordItemList => {
  try {
    console.log("addDataToStorage a geldim setlemeye PasswordItemList -> " + JSON.stringify(PasswordItemList));
    await AsyncStorage.setItem(PASSWORD_ITEMS,JSON.stringify(PasswordItemList));
  } catch (e) {
    console.log("error saving Data -> " + e);
  }
};

export const clearAsyncStorage = async () => {
  AsyncStorage.clear();
};


export const setSequence = async (sequence) => {
  console.log("setSequence  -> ")
    try {
      await AsyncStorage.setItem(PASSWORD_ITEMS_SEQUENCE,JSON.stringify(sequence));
    } catch (error) {
      console.warn(error);
    }
};