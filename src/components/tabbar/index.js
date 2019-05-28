import React from 'react'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom'
import './tabbar.css'
import Home from '../home/index'
import List from '../list/index'
import Shopcar from '../shopcar/index'
import Mine from '../mine/index'
class Tabbar extends React.Component{
    render(){
        return <div>
             <Switch>
            <Route path="/home" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/shopcar" component={Shopcar} />
            <Route path="/mine" component={Mine} />
            <Redirect from='/' to='/home' exact />
            </Switch>
            <div className="footer">
            <ul>
                <NavLink to="/home">首页</NavLink >
                <NavLink to="/list">列表</NavLink >
                <NavLink to="/shopcar">购物车</NavLink >
                <NavLink to="/mine">我的</NavLink >
            </ul>
        </div>
        </div>
    }
}

export default Tabbar