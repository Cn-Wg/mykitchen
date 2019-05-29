import axios from 'axios';
export default {
	getData(){
		return (dispatch)=>{
			  axios.get('http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D').then((res)=>{
			  dispatch({
				type:'GETDATA',
                list:res.data.data.carousel,
                nav:res.data.data.recommendedContent
		   })
		})
		}
		
	}
}
