import axios from 'axios';
export default {
    // 获取轮播图和nav数据
	getData(){
            return (dispatch)=>{
                axios.get('http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D').then((res)=>{
                dispatch({
                    type:'GETDATA',
                    list:res.data.data.carousel,
                    nav1:res.data.data.recommendedContent[0].items,
                    nav2:res.data.data.recommendedContent[1].items
                 })
            })
		}
    },
    // 获取所有数据
    getAllData(){
        return (dispatch)=>{
            axios.get('http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H').then((res)=>{
            dispatch({
                type:'GETALLDATA',
                ltime:res.data.data.acts[2].items,
                ltimelist:res.data.data.acts[3].items,
                big:res.data.data.acts[7].items,
                biglist:res.data.data.acts[8].items,
             })
        })
    }
}
}
