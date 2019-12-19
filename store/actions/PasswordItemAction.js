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


export function updatePasswordItemArrOnStoreAction(data){
    console.log("updatePasswordItemArrOnStoreAction data => " + data)
    return{ 
        type:'UPDATE_PASSWORD_ITEM',
        payload: data
    }
}

export function updatePasswordItemListArrOnStoreAction(data){
    console.log("updatePasswordItemListArrOnStoreAction data => " + data)
    return{ 
        type:'UPDATE_PASSWORD_ITEM_LIST',
        payload: data
    }
}

export function deletePasswordItemArrOnStoreAction(data){
    console.log("deletePasswordItemArrOnStoreAction data => " + data)
    return{ 
        type:'DELETE_PASSWORD_ITEM',
        payload: data
    }
}

export function setMasterKeyAction(data){
    console.log("setMasterKeyAction data => " + data)
    return{ 
        type:'SET_MASTER_KEY',
        payload: data
    }
}


