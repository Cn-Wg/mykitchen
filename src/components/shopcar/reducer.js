import action from './action';
var initState = {
    list :  localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[],
    data : [] ,
    flagAll : false
}

var reducer = (state=initState , action)=>{
    var newState  = state;
    // 添加到购物车
    if(action.type === "ADD"){
        if(newState.list.length === 0){
            action.obj.num++
            action.obj.flag = false
            newState.list.push(action.obj)
        }else{
            var flag = false;
            newState.list.forEach((item)=>{
                if(item.goodsGuid === action.obj.goodsGuid){
                    item.num++;
                    flag = true;
                }
            })
            if(!flag) action.obj.flag = false; newState.list.push(action.obj)

        }
    }
    //加减商品
    if(action.type === "INC"){
        newState.list.forEach((item)=>{
            if(item.goodsGuid===action.id){
                item.num++
            }
        })
    }
    if(action.type === "DEC"){
        newState.list.forEach((item)=>{
            if(item.goodsGuid===action.id){
                if(item.num > 0){
                    item.num--
                }
            }
        })
    }
    //删除商品
    if(action.type === "DEL"){
        newState.list = newState.list.filter((item)=>{
            return item.goodsGuid !== action.id
        })
    }
    //单个选择
    if(action.type === "CHANGE"){
        newState.list.forEach((item)=>{
            if(item.goodsGuid === action.id){
                console.log(item.flag)
              return item.flag = !item.flag
            }
        })
    }
    //全选
    if(action.type === "CHANGALL"){
        newState.list.forEach((item)=>{
            if(item.flag){
                console.log(item.flag)
             return item.flagAll
            }else{
             return !item.flagAll
            }
        })
    }
    //猜你喜欢
    if(action.type === "LIKE"){
        newState.data = action.data
    }
    localStorage.setItem("list",JSON.stringify(newState.list));
    return newState
}

export default reducer