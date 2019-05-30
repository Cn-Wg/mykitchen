import React from 'react'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom'
import './goods.css'

class Goods extends React.Component{
    render(){
        return <div className="d-goods">
        {/* (轮播图) */}
            <div className="d-goods-top">
                <div className="swiper">
                    <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/98e1e5c8-0229-4cd5-a889-185ee435f52b.jpg"/>
                </div>
            </div>
        {/* (商品信息) */}
            <div className="d-goods-info clear_fix:after">
                <h1>可乐鸡翅</h1>
                <h2>【5分钟做菜】红亮浓郁甜津津，剩下一个算我输！</h2>
                <div className="d-goods-info-price">
                    <div className="new-price">
                        ￥28.8
                    </div>
                    <div className="old-price">
                        ￥35
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
                    <span>产地:</span>上海
                </div>
                <div className="d-goods-tip2">
                    <span>保质期:</span>4天
                </div>
                <div className="d-goods-tip3">
                    <span>规格:</span>680g 
                </div>
                <div className="d-goods-tip4">
                    <span>储存条件:</span>0.0~4.0°c
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
                    <div className="shopcar-other-shop">
                        <div className="shopcar-other-shop-pic">
                            <img src="https://img.wochu.cn/upload/e32a78c4-5b7f-49bf-a944-0e17e73dd03a.jpg"/>
                        </div>
                        <div className="shopcar-other-shop-info">
                            <p>
                                葱姜蒜组合150g
                            </p>
                            <div className="shopcar-other-shop-add">
                                <div className="shopcar-other-shop-add-price">
                                    <div className="old-price">
                                        ￥5.9
                                    </div>
                                    <div className="current-price">
                                        ￥4.9
                                    </div>
                                </div>
                                <div className="add-btn">
                                  
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="shopcar-other-shop">
                        <div className="shopcar-other-shop-pic">
                            <img src="https://img.wochu.cn/upload/e32a78c4-5b7f-49bf-a944-0e17e73dd03a.jpg"/>
                        </div>
                        <div className="shopcar-other-shop-info">
                            <p>
                                葱姜蒜组合150g
                            </p>
                            <div className="shopcar-other-shop-add">
                                <div className="shopcar-other-shop-add-price">
                                    <div className="old-price">
                                        ￥5.9
                                    </div>
                                    <div className="current-price">
                                        ￥4.9
                                    </div>
                                </div>
                                <div className="add-btn">
                                  
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="shopcar-other-shop">
                        <div className="shopcar-other-shop-pic">
                            <img src="https://img.wochu.cn/upload/e32a78c4-5b7f-49bf-a944-0e17e73dd03a.jpg"/>
                        </div>
                        <div className="shopcar-other-shop-info">
                            <p>
                                葱姜蒜组合150g
                            </p>
                            <div className="shopcar-other-shop-add">
                                <div className="shopcar-other-shop-add-price">
                                    <div className="old-price">
                                        ￥5.9
                                    </div>
                                    <div className="current-price">
                                        ￥4.9
                                    </div>
                                </div>
                                <div className="add-btn">
                                  
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="shopcar-other-shop">
                        <div className="shopcar-other-shop-pic">
                            <img src="https://img.wochu.cn/upload/e32a78c4-5b7f-49bf-a944-0e17e73dd03a.jpg"/>
                        </div>
                        <div className="shopcar-other-shop-info">
                            <p>
                                葱姜蒜组合150g
                            </p>
                            <div className="shopcar-other-shop-add">
                                <div className="shopcar-other-shop-add-price">
                                    <div className="old-price">
                                        ￥5.9
                                    </div>
                                    <div className="current-price">
                                        ￥4.9
                                    </div>
                                </div>
                                <div className="add-btn">
                                  
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="shopcar-other-shop">
                        <div className="shopcar-other-shop-pic">
                            <img src="https://img.wochu.cn/upload/e32a78c4-5b7f-49bf-a944-0e17e73dd03a.jpg"/>
                        </div>
                        <div className="shopcar-other-shop-info">
                            <p>
                                葱姜蒜组合150g
                            </p>
                            <div className="shopcar-other-shop-add">
                                <div className="shopcar-other-shop-add-price">
                                    <div className="old-price">
                                        ￥5.9
                                    </div>
                                    <div className="current-price">
                                        ￥4.9
                                    </div>
                                </div>
                                <div className="add-btn">
                                  
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="shopcar-other-shop">
                        <div className="shopcar-other-shop-pic">
                            <img src="https://img.wochu.cn/upload/e32a78c4-5b7f-49bf-a944-0e17e73dd03a.jpg"/>
                        </div>
                        <div className="shopcar-other-shop-info">
                            <p>
                                葱姜蒜组合150g
                            </p>
                            <div className="shopcar-other-shop-add">
                                <div className="shopcar-other-shop-add-price">
                                    <div className="old-price">
                                        ￥5.9
                                    </div>
                                    <div className="current-price">
                                        ￥4.9
                                    </div>
                                </div>
                                <div className="add-btn">
                                  
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="shopcar-other-shop">
                        <div className="shopcar-other-shop-pic">
                            <img src="https://img.wochu.cn/upload/e32a78c4-5b7f-49bf-a944-0e17e73dd03a.jpg"/>
                        </div>
                        <div className="shopcar-other-shop-info">
                            <p>
                                葱姜蒜组合150g
                            </p>
                            <div className="shopcar-other-shop-add">
                                <div className="shopcar-other-shop-add-price">
                                    <div className="old-price">
                                        ￥5.9
                                    </div>
                                    <div className="current-price">
                                        ￥4.9
                                    </div>
                                </div>
                                <div className="add-btn">
                                  
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="shopcar-other-shop">
                        <div className="shopcar-other-shop-pic">
                            <img src="https://img.wochu.cn/upload/e32a78c4-5b7f-49bf-a944-0e17e73dd03a.jpg"/>
                        </div>
                        <div className="shopcar-other-shop-info">
                            <p>
                                葱姜蒜组合150g
                            </p>
                            <div className="shopcar-other-shop-add">
                                <div className="shopcar-other-shop-add-price">
                                    <div className="old-price">
                                        ￥5.9
                                    </div>
                                    <div className="current-price">
                                        ￥4.9
                                    </div>
                                </div>
                                <div className="add-btn">
                                  
                                </div>
                            </div>
                        </div>

                    </div>
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
export default Goods