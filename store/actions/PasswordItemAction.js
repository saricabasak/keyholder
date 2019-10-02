export function setPasswordItemArrOnStoreAction(passwordItemArr){
    return{ 
        type:'SET_ALL_ITEM_STORE',
        payload : passwordItemArr
    }
}

export function setNextSequenceOnStoreAction(seq){
    return{ 
        type:'SET_SEQUENCE_STORE',
        payload : seq
    }
}

export function addPasswordItemArrOnStoreAction(data){
    console.log("addPasswordItemArrOnStoreAction data => " + data)
    return{ 
        type:'ADD_PASSWORD_ITEM',
        payload: data
    }
}