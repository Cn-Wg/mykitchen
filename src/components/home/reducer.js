import action from "./action";

var inistState = {
    list : [],
    nav1 : [],
    nav2 : [],
    ltime : [],
    ltimelist : [],
    big : [],
    biglist : []
}

var reducer = (state = inistState , action)=>{
    var newState = {...state};
    if(action.type === 'GETDATA'){
        newState.list = action.list;
        newState.nav1 = action.nav1
        newState.nav2 = action.nav2;
    }
    if(action.type === 'GETALLDATA'){
        newState.ltime = action.ltime;
        newState.ltimelist = action.ltimelist;
        newState.big = action.big;
        newState.biglist = action.biglist;
    }
    return newState
}

export default reducer