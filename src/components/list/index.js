import React from 'react'
import {NavLink , Route , Switch} from 'react-router-dom'
import './list.css'
import ListRight from './listright'
class List extends React.Component{
    render(){
        return <div className="list">
            <div className="list-top">
                <NavLink to="/search" className="list-top-con">
                    <div className="search"><img src="http://wmall.wochu.cn/h5/classify/img/icon-search-40@2x.png" /></div>
                    支持首字母搜索
                </NavLink>
            </div>
        {/* 选项卡 */}
            <div className="list-nav">
                <ul className="list-nav-left">
                    <NavLink to="/listright"><span>推荐</span></NavLink>
                    <NavLink to="/listright"><span>我厨优选</span></NavLink>
                    <NavLink to="/listright"><span>餐馆名菜</span></NavLink>
                    <NavLink to="/listright"><span>全部净菜</span></NavLink>
                    <NavLink to="/listright"><span>儿童专区</span></NavLink>
                    <NavLink to="/listright"><span>蔬菜</span></NavLink>
                    <NavLink to="/listright"><span>水果</span></NavLink>
                    <NavLink to="/listright"><span>肉禽蛋</span></NavLink>
                    <NavLink to="/listright"><span>水产海鲜</span></NavLink>
                    <NavLink to="/listright"><span>乳饮西点</span></NavLink>
                    <NavLink to="/listright"><span>点心速食</span></NavLink>
                    <NavLink to="/listright"><span>粮油副食</span></NavLink>
                </ul>
                <Route path="/listright" component={ListRight} />
            </div>
        </div>
    }
}
export default List