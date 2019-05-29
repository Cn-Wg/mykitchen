import React from 'react'
import {NavLink} from 'react-router-dom'
import './home.css'
import {connect} from 'react-redux'
import action from './action'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
class Home extends React.Component{
    componentDidMount(){
        this.props.getData();
        this.props.getAllData();
        console.log(this.props.ltimelist)
    }
    componentDidUpdate(){
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay: {
                    delay: 3000,
                    disableOnInteraction:false
                }

  })
    }
    render(){
        return <div className="home">
        {/* 头部 */}
            <div className="top">
                <div className="top-left">
                    <img src="http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png" />
                </div>
                <div className="top-con">
                    <span>请填写地址</span>
                    <i><img src="http://wmall.wochu.cn/h5/home/vueimg/icon.png" /></i>
                </div>
                <NavLink to="/search" className="top-right">
                    <img src="http://wmall.wochu.cn/h5/home/vueimg/search.png" />
                </NavLink>
            </div>
        {/* 轮播图 */}
        <div className="swiper-container">
			    <div className="swiper-wrapper banner">
			       {
			       	  this.props.list.map((item)=>{
			       	    return 	<div key={item.sortIndex} className="swiper-slide">
			       	    	<a href="https://wmall.wochu.cn/h5/activityTemplate/html/newActivityTemplate.html?activityId=91"><img src={item.picUrl} /></a>
			       	    </div>
			       	  })
			        
			       }
			        
			    </div>
   	
   				 <div className="swiper-pagination"></div>
   		 </div>
        {/* NAV */}
            <div className="Nav">
            <ul> 
                    {
                       this.props.nav1.map((item)=>{
                           return <a href="https://wmall.wochu.cn/h5/activityTemplate/html/newActivityTemplatew.html?activityId=85" key={item.pos}><img src={item.imgUrl} /></a>
                       })
                   }
            </ul>
                <ul>
                    {
                        this.props.nav2.map((item)=>{
                        return <a href="http://wmall.wochu.cn/h5/personal/recharge.html" key={item.pos}><img src={item.imgUrl} /></a>
                        })
                    }
                </ul>
            </div>
        {/* 我厨快报 */}
            <div className="news">
                <div className="news-left"><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f58332d2-ad98-4d10-aa96-28d1b8090d37.jpg" /></div>
                <div className="news-right">
                <span>【5折】清美内酯豆腐1.9元/400g</span>
                <i><img src="http://wmall.wochu.cn/h5/home/vueimg/down@3x.png" /></i>
                </div>
            </div>
        {/* img-link */}
            <div className="img-link">
                <a href="https://wmall.wochu.cn/h5/activityTemplate/html/newActivityTemplatew.html?activityId=89"><img src="https://img.wochu.cn/upload/fff1c408-8401-4a3a-94a9-291deec0f301.gif" /></a>
            </div>
        {/* 限时特惠 */}
            <div className="ltime">
                <div className="ltime-top">
                    ————  <span>限时特惠</span>  ————
                </div>

                    {
                        this.props.ltime.map((item)=>{

                            return  <NavLink to="goods"  className="ltime-bottom">
                             <div className="ltime-bottom-left">
                                        <img src={item.imgUrl} />
                                    </div>
                                     <div className="ltime-bottom-right">
                                        <h1>{item.goodsName}</h1>
                                        <h2>{item.description}</h2>
                                        <h3><span>￥<b>{item.price}</b></span><p>{item.marketPrice}</p><i><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></i></h3>
                                    </div>
                                </NavLink>
                                    
                        })
                    }
            </div>
        {/* 商品 */}
            <div className="goods">
            {  
                this.props.ltimelist.map((item)=>{
                    return <NavLink to="goods" className="goods-con">
                                <div className="goods-con-top"><img src={item.imgUrl} /></div>
                                <h1>{item.goodsName}</h1>
                                <h2>￥{item.marketPrice}</h2>
                                <h3>￥{item.price}</h3>
                                <h4><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></h4>
                         </NavLink>
                })
            }
               

            </div>
            {/* img-link */}
                <div className="img-link2">
                    <a href="https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=433"><img src="https://img.wochu.cn/upload/3105de89-1538-403b-9771-85fea5587c2a.jpg" /></a>
                </div>

                <div className="img-link3">
                    <a href="https://wmall.wochu.cn/h5/activityTemplate/html/newActivityTemplatew.html?activityId=92"><img src="https://img.wochu.cn/upload/88bd77a3-2637-43b4-9f7a-637f1cb3edf2.jpg" /></a>
                </div>

            {/* group-list */}
                <div className="group-list">
                    <div className="group-list-left"><a href="https://wmall.wochu.cn/h5/tg/groupList.html?version=20170626"><img src="https://img.wochu.cn/upload/f4706060-3c5c-4791-beab-6023019856b8.jpg" /></a></div>
                    <div className="group-list-right"> 
                        <div className="group-list-right-top"><a href="http://wmall.wochu.cn/h5/optionalPackage/packagesList.html"><img src="https://img.wochu.cn/upload/6148ed94-ee8f-4076-b238-1382425763bc.jpg" /></a></div>
                        <div className="group-list-right-top"><a href="https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=582"><img src="https://img.wochu.cn/upload/9c33a199-3bec-4959-9986-9232a943084a.jpg" /></a></div>
                    </div>
                 
                </div>
            {/* 秒变大厨 */}
                <div className="ltime">
                    <div className="ltime-top">
                        ————  <span>秒变大厨</span>  ————
                    </div>

                    <div className="ltime-bottom">
                    {
                        this.props.big.map((item)=>{
                            return  <NavLink to="goods" className="ltime-bottom">
                             <div className="ltime-bottom-left">
                                        <img src={item.imgUrl} />
                                    </div>
                                     <div className="ltime-bottom-right">
                                        <h1>{item.goodsName}</h1>
                                        <h2>{item.description}</h2>
                                        <h3><span>￥<b>{item.price}</b></span><p>{item.marketPrice}</p><i><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></i></h3>
                                    </div>
                                </NavLink> 
                        })
                    }
                    </div>
                </div>
            {/* 商品 */}
            <div className="goods">
            {  
                this.props.biglist.map((item)=>{
                    return <NavLink to="goods" className="goods-con">
                                <div className="goods-con-top"><img src={item.imgUrl} /></div>
                                <h1>{item.goodsName}</h1>
                                <h2>￥{item.marketPrice}</h2>
                                <h3>￥{item.price}</h3>
                                <h4><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></h4>
                         </NavLink>
                })
            }
            </div>
        </div>
    }
}

var mapState=(state)=>{
    return {
        list : state.home.list,
        nav1 : state.home.nav1,
        nav2 : state.home.nav2,
        ltime : state.home.ltime,
        ltimelist : state.home.ltimelist,
        big : state.home.big,
        biglist : state.home.biglist
    }
}

var mapAction = (dispatch)=>{
    return {
        getData(){
            dispatch(action.getData())
        },
        getAllData(){
            dispatch(action.getAllData())
        },
    }
}
export default connect(mapState,mapAction)(Home)