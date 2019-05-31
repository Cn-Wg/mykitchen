import React from 'react'
import "./list.css"
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import ListAction from './action'
class List extends React.Component{
    componentDidMount(){
        this.props.getData()
    }
    render(){
        var list = this.props.list ? this.props.list : [] ;
        return <div className="list-nav-right">
          <div className="list-top">
                <NavLink to="/search" className="list-top-con">
                    <div className="search"><img src="http://wmall.wochu.cn/h5/classify/img/icon-search-40@2x.png" /></div>
                    支持首字母搜索
                </NavLink>
            </div>
            {
                list.map((item)=>{
                    return <div className="list-nav-right-top">
                                <h1>——<span>{item.name}</span>——</h1>
                                <ul className="list-nav-right-bottom">
                                {
                                    item.children.map((newitem)=>{
                                        return <NavLink to="/details">
                                                    <p><img src={newitem.imgUrl} /></p>
                                                    <i>{newitem.name}</i>
                                                </NavLink>
                                    })
                                }                                                     
                                </ul>
                            </div>
                })
            }
        </div>
    }
}
var mapState=(state)=>{
    return {
        list : state.list.list,
    }
}

var mapAction = (dispatch)=>{
    return {
        getData(){
            dispatch(ListAction.getData())
        },

    }
}
export default connect(mapState,mapAction)(List)