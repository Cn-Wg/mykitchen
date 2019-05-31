import action from "./action";

var inistState = {
    list : [],
}

var reducer = (state = inistState , action)=>{
    var newState = {...state};
    if(action.type === 'GETDATA'){
        newState.list = action.list;
    }
    return newState
}

export default reducer