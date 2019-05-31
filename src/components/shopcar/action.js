import axios from 'axios';
export default {
    // 获取商品数据
	add(id){
            return (dispatch)=>{
                axios.get('http://api9.wochu.cn/api/goods/goods/detail?goodsGuid='+id).then((res)=>{
                dispatch({
                    type:'ADD',
                    obj : res.data.data
                 })
            })
		}
    },
    incAction(id){
		return {
			type:'INC',
			id
		}
	},
	decAction(id){
		return {
			type:'DEC',
			id
		}
    },
    delAction(id){
        return {
			type:'DEL',
			id
		}
    },
    change(id){
        return {
            type : 'CHANGE',
            id
        }
    },
    changeAll(){
        return {
            type : 'CHANGALL'
        }
    },
    //获取猜你喜欢
    getDataLike(){
        return (dispatch)=>{
            axios.get('http://api9.wochu.cn/client/v1/goods/GoodsRecommendList?parameters=%7B%22pageSize%22%3A9%2C%22pageIndex%22%3A+1%2C%22type%22%3A%221%22%7D').then((res)=>{
            dispatch({
                type:'LIKE',
                data : res.data.data.items
             })
        })
    }
}
}
