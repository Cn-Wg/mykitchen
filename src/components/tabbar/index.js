import React from 'react'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom'
import './tabbar.css'
import Home from '../home/index'
import List from '../list/index'
import Shopcar from '../shopcar/index'
import Mine from '../mine/index'
import '../../common/css/reset.css'
import '../../common/js/flexble.js'
import '../../iconfont/iconfont.css'
class Tabbar extends React.Component{
    render(){
        return <div className="con">
            <Switch>
            <Route path="/index/home" component={Home} />
            <Route path="/index/list" component={List} />
            <Route path="/index/shopcar" component={Shopcar} />
            <Route path="/index/mine" component={Mine} />
            <Redirect from='/' to='/index/home' exact />
            </Switch>
            <div className="footer">
            <ul>
                <NavLink to="/index/home"><i className="iconfont icon-guo"></i><span>首页</span></NavLink >
                <NavLink to="/index/list"><i className="iconfont icon-daochacanju"></i><span>分类</span></NavLink >
                <NavLink to="/index/shopcar"><i className="iconfont icon-bao"></i><span>购物车</span></NavLink >
                <NavLink to="/index/mine"><i className="iconfont icon-chushimaoline"></i><span>我的</span></NavLink >
            </ul>
        </div>
        </div>
    }
}

export default Tabbar