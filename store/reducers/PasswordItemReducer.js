import {
  addDataToStorage,
  setSequence
} from "../../components/StorageOperations";

const initialState = {
  PasswordItems: [],
  nextSequence: 0,
  masterKey: "",
  language: "en"
};

const PasswordItemReducer = (state = initialState, action) => {
  const newState = {
    ...state
  };
  switch (action.type) {
    case "SET_ALL_ITEM_STORE": {
      let passwordItemList = [...newState.PasswordItems];
      passwordItemList = action.payload;
      newState.PasswordItems = passwordItemList;
      return newState;
    }
    case "SET_SEQUENCE_STORE": {
      newState.nextSequence = action.payload;
      return newState;
    }
    case "ADD_PASSWORD_ITEM": {
      let passwordItemList = [...newState.PasswordItems];
      action.payload.id = state.nextSequence;
      setSequence(state.nextSequence);
      newState.nextSequence = newState.nextSequence + 1;

      passwordItemList.push(action.payload);
      newState.PasswordItems = passwordItemList;
      addDataToStorage(passwordItemList);
      return newState;
    }
    case "UPDATE_PASSWORD_ITEM": {
        let passwordItemList = [...newState.PasswordItems]
        passwordItemList.forEach(element => {
            if(element.id === action.payload.id){
                element.name = action.payload.name
                element.username =action.payload.username
                element.password = action.payload.password
                element.notes = action.payload.notes
                element.category = action.payload.category
            }
        })
        newState.PasswordItems = passwordItemList;
        addDataToStorage(passwordItemList);
        return newState;
      }
      case "UPDATE_PASSWORD_ITEM_LIST": {
        let passwordItemList = action.payload;
        newState.PasswordItems = passwordItemList;
        addDataToStorage(passwordItemList);
        return newState;
      }
      case "DELETE_PASSWORD_ITEM": {
        let passwordItemList = [...newState.PasswordItems]
        let filteredPasswordItemArr = passwordItemList.filter( element => element.id !== action.payload.id)
        newState.PasswordItems = filteredPasswordItemArr;
        addDataToStorage(filteredPasswordItemArr);
        return newState;
      }
      case "SET_MASTER_KEY":{
        newState.masterKey = action.payload
        return newState;
      }
      case "UPDATE_LANGUAGE":{
        newState.language = action.payload
        return newState;
      }
    default:
      return newState;
  }
};

export default PasswordItemReducer;
