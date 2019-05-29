import React from 'react'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom'
import './mine.css'

class Mine extends React.Component{
    render(){
        return <div className="mine-all">
            <div className="mine-top">
                {/* (顶部头像) */}
                <div className="mine-top-pic">
                    <img src="http://wmall.wochu.cn/h5/personal/img/header_bg@3x.png"/>
                </div>
                <div className="mine-top-head">
                    <NavLink to="/login" className="mine-top-head-pic">
                        <img src="http://wmall.wochu.cn/h5/personal/img/cust-icon-nologin.png"/>
                    </NavLink>
                    <NavLink to="/login" className="mine-top-head-active">
                        未登录
                    </NavLink>
                </div>
                {/* (顶部余额) */}
                <div className="mine-top-balance">
                {/* (余额优惠) */}
                    <div className="tb-top">
                        <NavLink to="/login" className="tb-topLeft">
                            <div className="tb-tl-top">
                                0
                            </div>
                            <div className="tb-tl-bottom">
                                账户余额
                            </div>
                        </NavLink>
                        <NavLink to="/login" className="tb-topRight">
                        <div className="tb-tr-top">
                                0
                            </div>
                            <div className="tb-tr-bottom">
                                优惠券
                            </div>
                        </NavLink>
                    </div>
                {/* (立即充值) */}
                    <div className="tb-bottom">
                        <div className="tb-bottom-tpic">
                            <img src="http://wmall.wochu.cn/h5/personal/img/profile-arrow@3x.png"/>
                        </div>
                        <NavLink to="/login" className="tb-bottom-bword">
                            <div className="left">
                                <div className="pic">
                                    <img src="http://wmall.wochu.cn/h5/personal/img/g-recharge@3x.png"/>
                                </div>
                                <div className="word">
                                    充值立送现金券哦~
                                </div>
                            </div>
                            <div className="right">
                                <div className="word">
                                    马上充值
                                </div>
                                <div className="pic">
                                    <img src="http://wmall.wochu.cn/h5/personal/img/recharge@3x.png"/>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* (我的订单) */}
            <div className="order">
                    <ul>
                        <li>
                            <div className="order-pic">
                                <img src="http://wmall.wochu.cn/h5/personal/img/needtopay@3x.png"/>
                            </div>
                            <div className="order-word">
                                待付款
                            </div>
                        </li>
                        <li>
                            <div className="order-pic">
                                <img src="http://wmall.wochu.cn/h5/personal/img/no-receive@3x.png"/>
                            </div>
                            <div className="order-word">
                                待收货
                            </div>
                        </li>
                        <li>
                            <div className="order-pic">
                                <img src="http://wmall.wochu.cn/h5/personal/img/no-comment@3x.png"/>
                            </div>
                            <div className="order-word">
                                待评价
                            </div>
                        </li>
                        <li>
                            <div className="order-pic">
                                <img src="http://wmall.wochu.cn/h5/personal/img/historyget@3x.png"/>
                            </div>
                            <div className="order-word">
                                退货/售后
                            </div>
                        </li>
                        <li>
                            <div className="order-pic">
                                <img src="http://wmall.wochu.cn/h5/personal/img/myorders@3x.png"/>
                            </div>
                            <div className="order-word">
                                我的订单
                            </div>
                        </li>
                    </ul>
            </div>
             {/* (图标) */}
             <div className="border-line">
                <ul>
                    <li>
                        <NavLink to="/login" className="order-pic">
                            <img src="http://wmall.wochu.cn/h5/personal/img/mytg@3x.png"/>
                        </NavLink>
                        <div className="order-word">
                            我的团购
                        </div>
                    </li>
                    <li>
                        <NavLink to="/login" className="order-pic">
                            <img src="http://wmall.wochu.cn/h5/personal/img/location@3x.png"/>
                        </NavLink>
                        <div className="order-word">
                            收货地址
                        </div>
                    </li>
                    <li>
                        <NavLink to="/login" className="order-pic">
                            <img src="http://wmall.wochu.cn/h5/personal/img/favorite@3x.png"/>
                        </NavLink>
                        <div className="order-word">
                            我的收藏
                        </div>
                    </li>
                    <li>
                        <NavLink to="/login" className="order-pic">
                            <img src="http://wmall.wochu.cn/h5/personal/img/aboutus@3x.png"/>
                        </NavLink>
                        <div className="order-word">
                            关于我厨
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/login" className="order-pic">
                            <img src="http://wmall.wochu.cn/h5/personal/img/help@3x.png"/>
                        </NavLink>
                        <NavLink to="/login" className="order-word">
                            帮助中心    
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className="order-pic">
                            <img src="http://wmall.wochu.cn/h5/personal/img/yjfk@3x.png"/>
                        </NavLink>
                        <NavLink to="/login" className="order-word">
                            意见反馈
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className="order-pic">
                            <img src="http://wmall.wochu.cn/h5/personal/img/setup@3x.png"/>
                        </NavLink>
                        <NavLink to="/login" className="order-word">
                            设置中心
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className="order-pic">
                            <img src="http://wmall.wochu.cn/h5/personal/img/kefu@3x.png"/>
                        </NavLink>
                        <NavLink to="/login" className="order-word">
                            关于我厨
                        </NavLink>
                    </li>
                </ul>
             </div>
        </div>
    }
}
export default Mine