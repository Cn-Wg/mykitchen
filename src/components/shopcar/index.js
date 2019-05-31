import React from 'react'
import {NavLink} from 'react-router-dom'
import './shopcar.css'
import {connect} from 'react-redux';
import ShopCarAction from './action'
class Mine extends React.Component{
    componentDidMount(){
        this.props.getDataLike();
    }
    add(id){
        this.props.history.push('/goods/'+id)
        this.props.history.go()
    }
    back(){
        this.props.history.go(-1)

    }
    render(){
        return <div className="shopcar-all">
            {/* (顶部) */}
            <div className="shopcar-top">
                <div onClick={this.back.bind(this)} className="shopcar-top-hock">
                    <img src="http://wmall.wochu.cn/h5/mall/img/back.png"/>
                </div>
                <div className="shopcar-top-adress">
                    <div className="shopcar-top-adress-pic">
                        <img src="http://wmall.wochu.cn/h5/mall/img/location.png"/>
                    </div>
                    <div className="shopcar-top-adress-adr">
                        请填写地址
                    </div>
                    <div className="shopcar-top-adress-pic2">
                        <img src="http://wmall.wochu.cn/h5/mall/img/down-arr.png"/>
                    </div>
                </div>
                <div className="shopcar-top-edit">
                    
                </div>
            </div>
            <div className="shopcar-main">
            {/* (购物车商品) */}
            <div className="shopcar-shop">
                <ul>
                    {
                        this.props.list.map((item)=>{
                            return  <li key={item.goodsGuid}>
                                        <div className="shopcar-shop-btn">
                                          
                                        </div>
                                        <div className="shopcar-shop-pic">
                                            <img src={item.picUrl}/>
                                        </div>
                                        <div className="shopcar-shop-info">
                                            <div className="info-title">
                                                {item.goodsName}
                                            </div>
                                            <div className="info-total">
                                                <div className="info-total-price">
                                                    <span>￥{item.price}</span>
                                                    <i>  ￥{item.marketPrice}</i>
                                                </div>
                                                <div className="info-total-count">
                                                    <div onClick={this.props.decAction.bind(this,item.goodsGuid)} className="jian">
                                                        -
                                                    </div>
                                                    <i>{item.num}</i>
                                                    <div onClick={this.props.incAction.bind(this,item.goodsGuid)} className="jia">
                                                        +
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="del" onClick={this.props.delAction.bind(this,item.goodsGuid)}>×</div>
                                        </div> 
                                    </li>
                        })
                    }                                          
                </ul>    
            </div>
            {/* (推荐商品) */}
            <div className="shopcar-other">
                <div className="shopcar-other-title"></div>
                <div className="shopcar-other-list">
                    {
                        this.props.data.map((item)=>{
                            return  <div onClick={this.add.bind(this,item.goodsGuid)} key={item.goodsGuid} className="shopcar-other-shop">
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
                {/* (没有更多) */}
                <div className="shopcar-nomore">
                    没有更多了~
                </div>
                {/* (结算标签) */}
                <div className="label">
                    <div className="label-checkbox">
                        
                    </div>
                    
                    <div className="label-price">
                        <div className="label-price-money">
                            <span>合计:</span>
                            ￥{this.props.allMoney()}
                        </div>
                        <div className="label-price-freight">
                            (不含运费)
                        </div>
                    </div>
                    <div className="label-btn">
                        结算
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    }
}


var mapState = (state)=>{
    return {
        list : state.shopcar.list,
        allCount(){
            var c=0;
            state.shopcar.list.forEach((item)=>{
                c+=item.num;
            })
            return c;
       },
       allMoney(){
            var c=0;
            state.shopcar.list.forEach((item)=>{
                c+=item.num*(item.price * 10) /10;
            })
            return c;
       },
       data : state.shopcar.data ,
       flagAll : state.shopcar.flagAll
    }
}

var mapAction = (dispatch)=>{
    return {
        incAction(id){
            dispatch(ShopCarAction.incAction(id))
        },
        decAction(id){
            dispatch(ShopCarAction.decAction(id))
        },
        getDataLike(){
            dispatch(ShopCarAction.getDataLike())
        },
        delAction(id){
            dispatch(ShopCarAction.delAction(id))
        },
        change(id){
            dispatch(ShopCarAction.change(id))
        },
        changeAll(){
            dispatch(ShopCarAction.changeAll())
        }
    }
}
export default connect(mapState,mapAction)(Mine)