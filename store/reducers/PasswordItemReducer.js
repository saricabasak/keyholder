import {retrieveAllData,saveData} from '../../components/StorageOperations';

const initialState = {
    /*PasswordItems: [
        {
            name : "Facebook Pass",
            username: "erkanerkisi@gmail.com",
            password: "1f3er4t54rt0"
        },
        {
            name : "Twitter Pass1",
            username: "ahmet@gmail.com",
            password: "1f3er4t54rt0"
        },
        {
            name : "Ebebek Pass2",
            username: "yusufkemalozcan@gmail.com",
            password: "1f3er4t54rt0"
        },
        {
            name : "Instagram Pass3",
            username: "saricabasak@gmail.com",
            password: "1f3er4t54rt0"
        }
    ]*/
    PasswordItems:[]
} 

const PasswordItemReducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === 'SET_ALL_ITEM_STORE'){
        console.log("PasswordItemReducer - SET_ALL_ITEM_STORE");
        let passwordItemList = [...newState.PasswordItems];
        passwordItemList = action.payload
        newState.PasswordItems = passwordItemList
        /*retrieveAllData().then((data) => {
            console.log("PasswordItemReducer JSON.stringify(data) ->>>" + JSON.stringify(data));
            console.log("PasswordItemReducer data "+ data);
            newState.PasswordItems = data
            console.log("PasswordItemReducer JSON.stringify(newState.items) "+ JSON.stringify(newState.items));
          });*/
    }
    else if(action.type === 'ADD_PASSWORD_ITEM'){
        let passwordItemList = [...newState.PasswordItems];
        passwordItemList.push(action.payload);
        newState.PasswordItems = passwordItemList
        console.log("PasswordItemReducer SAVE_PASSWORD_ITEM "+ JSON.stringify(newState.PasswordItems));
    }

    return newState;
}

export default PasswordItemReducer;