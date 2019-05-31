import axios from 'axios';
export default {
    // 获取轮播图和nav数据
	getData(){
            return (dispatch)=>{
                axios.get('http://api9.wochu.cn/client/v1/goods/GetCategoryRecommendList').then((res)=>{
                console.log(res.data.data)
                dispatch({
                    type:'GETDATA',
                    list : res.data.data
                 })
            })
		}
    },
}

