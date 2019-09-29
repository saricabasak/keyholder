import { AsyncStorage } from "react-native";

export const PASSWORD_ITEMS = "PASSWORD_ITEMS";

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

export const addDataToStorage = async PasswordItemList => {
  try {
    console.log("PasswordItemList -> " + JSON.stringify(PasswordItemList));
    await AsyncStorage.setItem(PASSWORD_ITEMS,JSON.stringify(PasswordItemList));
  } catch (e) {
    console.log("error saving Data -> " + e);
  }
};

export const clearAsyncStorage = async () => {
  AsyncStorage.clear();
};
