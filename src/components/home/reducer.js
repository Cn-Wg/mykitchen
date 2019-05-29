import action from "./action";

var inistState = {
    list : [],
    nav : [] 
}

var reducer = (state = inistState , action)=>{
    var newState = {...state};
    if(action.type === 'GETDATA'){
        newState.list = action.list;
        newState.nav = action.nav
    }
    console.log(newState.nav)
    return newState
}

export default reducer