const initialState = {
    PasswordItems: [
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
    ]
} 

const PasswordItemReducer = (state = initialState, action) => {
    const newState = {...state};
    /*if(action.type === 'ADD'){
        let todos = [...newState.items];
        todos.push({
                value:action.payload,
                isCompleted:false
            });
        newState.items = todos
    }
    else if(action.type === 'DELETE'){
        let todos = [...newState.items];
        todos.splice(action.payload,1);
        newState.items = todos
    }
    else if(action.type === 'TOGGLE'){
        let todos = [...newState.items];
        todos[action.payload].isCompleted = !todos[action.payload].isCompleted
        newState.items = todos
    }*/

    return newState;
}

export default PasswordItemReducer;