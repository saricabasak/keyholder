import {
  addDataToStorage,
  setSequence
} from "../../components/StorageOperations";

const initialState = {
  decryptedPasswords: [],
  masterKey: ''
};

const PasswordEncryptionReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SET_ALL_PASSWORD_TO_ITEM_STORE_WITH_DECRYPTED": {
      // Uygulama açılırken PasswordItemReducer daki ve db deki passwordleri çekerken,
      // encrypt olan passwordleri alıp burdaki store a decrypted halini alacağız. id ve decyrpted(id,password) hali şeklinde maplememiz lazım
      return newState;
    }
    default:
      return newState;
  }
};

export default PasswordEncryptionReducer;
