import React from 'react'
import "./list.css"
import {NavLink} from 'react-router-dom'
class ListRight extends React.Component{
    render(){
        return <div className="list-nav-right">
            <div className="list-nav-right-top">
                <h1>——<span>我厨精选</span>——</h1>
                <ul className="list-nav-right-bottom">
                    <NavLink to="/details">
                        <p><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d78dba5-d085-48e4-a5f7-d60afae06ac4.jpg" /></p>
                        <i>全网抄底</i>
                    </NavLink>
                    <NavLink to="/details">
                        <p><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d78dba5-d085-48e4-a5f7-d60afae06ac4.jpg" /></p>
                        <i>全网抄底</i>
                    </NavLink>
                    <NavLink to="/details">
                        <p><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d78dba5-d085-48e4-a5f7-d60afae06ac4.jpg" /></p>
                        <i>全网抄底</i>
                    </NavLink>
                    <NavLink to="/details">
                        <p><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d78dba5-d085-48e4-a5f7-d60afae06ac4.jpg" /></p>
                        <i>全网抄底</i>
                    </NavLink>
                </ul>
            </div>

            <div className="list-nav-right-top">
                <h1>——<span>我厨精选</span>——</h1>
                <ul className="list-nav-right-bottom">
                    <NavLink to="/details">
                        <p><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d78dba5-d085-48e4-a5f7-d60afae06ac4.jpg" /></p>
                        <i>全网抄底</i>
                    </NavLink>
                    <NavLink to="/details">
                        <p><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d78dba5-d085-48e4-a5f7-d60afae06ac4.jpg" /></p>
                        <i>全网抄底</i>
                    </NavLink>
                    <NavLink to="/details">
                        <p><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d78dba5-d085-48e4-a5f7-d60afae06ac4.jpg" /></p>
                        <i>全网抄底</i>
                    </NavLink>
                    <NavLink to="/details">
                        <p><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d78dba5-d085-48e4-a5f7-d60afae06ac4.jpg" /></p>
                        <i>全网抄底</i>
                    </NavLink>
                </ul>
            </div>
        </div>
    }
}
export default ListRight