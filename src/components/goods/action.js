import axios from 'axios';
export default {
    // 获取商品数据
	getData(id){
            return (dispatch)=>{
                axios.get('http://api9.wochu.cn/api/goods/goods/detail?goodsGuid='+id).then((res)=>{
                dispatch({
                    type:'GETDATA',
                    obj : res.data.data
                 })
            })
		}
    },
    //获取猜你喜欢
    getLike(){
        return (dispatch)=>{
            axios.get('http://api9.wochu.cn/client/v1/goods/getGoodsRelevantList?parameters=%7B%22goodsGuid%22:%22dbf4c991-0502-4568-b0e0-2ea6354d092c%22%7D').then((res)=>{
            dispatch({
                type:'GETLIKE',
                list : res.data.data.userloving
             })
        })
    }
},
}
