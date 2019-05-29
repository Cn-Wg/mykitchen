import React from 'react'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom'
import './shopcar.css'
class Mine extends React.Component{
    render(){
        return <div className="shopcar-all">
            {/* (顶部) */}
            <div className="shopcar-top">
                <div className="shopcar-top-hock">
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
                    编辑
                </div>
            </div>
            <div className="shopcar-main">
            {/* (购物车商品) */}
            <div className="shopcar-shop">
                <ul>
                    <li>
                        <div className="shopcar-shop-btn">
                            <input type="checkbox"/>
                        </div>
                        <div className="shopcar-shop-pic">
                            <img src="https://img.wochu.cn/upload/5d7a16fa-43af-4ab8-9228-02016d813f98.jpg"/>
                        </div>
                        <div className="shopcar-shop-info">
                            <div className="info-title">
                                粮管家乳玉香大米5000g
                            </div>
                            <div className="info-total">
                                <div className="info-total-price">
                                    <span>￥45.9</span>
                                    <i>  ￥49.9</i>
                                </div>
                                <div className="info-total-count">
                                    <div className="jian">
                                        -
                                    </div>
                                    <input type="text" value="1"/>
                                    <div className="jia">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </li>
                    <li>
                        <div className="shopcar-shop-btn">
                            <input type="checkbox"/>
                        </div>
                        <div className="shopcar-shop-pic">
                            <img src="https://img.wochu.cn/upload/5d7a16fa-43af-4ab8-9228-02016d813f98.jpg"/>
                        </div>
                        <div className="shopcar-shop-info">
                            <div className="info-title">
                                粮管家乳玉香大米5000g
                            </div>
                            <div className="info-total">
                                <div className="info-total-price">
                                    <span>￥45.9</span>
                                    <i>  ￥49.9</i>
                                </div>
                                <div className="info-total-count">
                                    <div className="jian">
                                        -
                                    </div>
                                    <input type="text" value="1"/>
                                    <div className="jia">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </li>
                    
                </ul>    
            </div>
            {/* (推荐商品) */}
            <div className="shopcar-other">
                <div className="shopcar-other-title"></div>
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
                {/* (没有更多) */}
                <div className="shopcar-nomore">
                    没有更多了~
                </div>
                {/* (结算标签) */}
                <div className="label">
                    <div className="label-checkbox">
                        <input type="checkbox"/>
                    </div>
                    
                    <div className="label-price">
                        <div className="label-price-money">
                            <span>合计:</span>
                            ￥65.80
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
export default Mine