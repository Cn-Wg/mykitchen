import React from 'react'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom'
import './goods.css'
import GoodsAction from './action'
import {connect} from 'react-redux'
class Goods extends React.Component{
    componentDidMount(){
        var str = this.props.match.params.id;
         this.props.getData(str)
         this.props.getLike()
    }
    render(){
        console.log(this.props)
        var obj = this.props.obj ? this.props.obj : '';
        var list = this.props.list ? this.props.list : [];
        return <div className="d-goods">
        {/* (轮播图) */}
            <div className="d-goods-top">
                <div className="swiper">
                    <img src={obj.picUrl}/>
                </div>
            </div>
        {/* (商品信息) */}
            <div className="d-goods-info clear_fix:after">
                <h1>{obj.goodsName}</h1>
                <h2>{obj.description}</h2>
                <div className="d-goods-info-price">
                    <div className="new-price">
                        ￥{obj.price}
                    </div>
                    <div className="old-price">
                        ￥{obj.marketPrice}
                    </div>
                </div>
                <div className="price-icon">
                    免切
                </div>
            </div>
        {/* (三包) */}
            <div className="d-goods-three">
                <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/navigation.png"/>
            </div>
        {/* (商品提示) */}
            <div className="d-goods-tip">
                <div className="d-goods-tip1">
                    <span>产地:</span>{obj.origin1}
                </div>
                <div className="d-goods-tip2">
                    <span>保质期:</span>{obj.shelfLife}
                </div>
                <div className="d-goods-tip3">
                    <span>规格:</span>{obj.specification}
                </div>
                <div className="d-goods-tip4">
                    <span>储存条件:</span>{obj.storageCondition}
                </div>
            </div>
        {/* (商品评价) */}
            <div className="d-goods-rate">
                <span>商品评价</span>
                <div className="d-goods-rate-pic">
                    <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/next.png"/>
                </div>
            </div>  
            
         {/* (更多)  */}
         <div className="d-goods-shopcar-other">
                <div className="d-goods-text">
                    <i></i>
                    <p>猜你喜欢</p>
                </div>
                <div className="shopcar-other-list">

                {
                    list.map((item)=>{
                        return   <div key={item.goodsGuid} className="shopcar-other-shop">
                                        <div className="shopcar-other-shop-pic">
                                            <img src={item.picUrl}/>
                                        </div>
                                        <div className="shopcar-other-shop-info">
                                            <p>
                                                {item.goodsName}
                                            </p>
                                            <div className="shopcar-other-shop-add">
                                                <div className="shopcar-other-shop-add-price">
                                                    <div className="old-price">
                                                        ￥{item.marketPrice}
                                                    </div>
                                                    <div className="current-price">
                                                        ￥{item.price}
                                                    </div>
                                                </div>
                                                <div className="add-btn">
                                                
                                                </div>
                                            </div>
                                        </div>
                                 </div>
                    })
                }
                  
                    
                </div>   
            </div>
        {/* (加入购物车) */}
            <div className="d-goods-add">
                <div className="d-goods-cart">
                    <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/catr.png"/>
                    <span>2</span>
                </div>
                <div className="d-goods-cart2">加入购物车</div>
            </div>
        </div>
    }
}
var mapState = (state)=>{
    return {
        obj : state.goods.obj,
        list : state.goods.list
    }
}

var mapAction = (dispatch)=>{
    return {
        getData(id){
            dispatch(GoodsAction.getData(id))
        },
        getLike(){
            dispatch(GoodsAction.getLike())
        }
    }
}
export default connect(mapState,mapAction)(Goods)