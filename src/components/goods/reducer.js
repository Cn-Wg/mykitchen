import action from './action';
var initState = {
    obj : {},
    list : []
}

var reducer = (state=initState , action)=>{
    var newState  = state;
    if(action.type === "GETDATA"){
        newState.obj = action.obj
    }
    if(action.type === "GETLIKE"){
        newState.list = action.list
    }
    return newState
}

export default reducer