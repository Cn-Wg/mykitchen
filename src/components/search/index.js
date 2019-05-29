import React from 'react'
import './search.css'
class Search extends React.Component{
    back(){
        console.log(this.props.history.goback)
    }
    render(){
        return <div>
            <div className="search-top">
                <i onClick={this.back.bind(this)}><img src="http://wmall.wochu.cn/h5/hotlist/img/back.png?v=d0c1db9a95" /></i>
                <div className="search-top-con">
                    <b><img src="http://wmall.wochu.cn/h5/classify/img/search-icon.png" /></b>
                    <input type="text" />
                </div>
                <span>搜索</span>
            </div>
            <div className="search-hot">
                <h1>热门搜索</h1>
                <ul>
                    <li>牛排</li>
                    <li>牛排</li>
                    <li>牛排</li>
                    <li>牛排</li>
                    <li>牛排</li>
                    <li>牛排</li>
                </ul>
            </div>
        </div>
    }
}
export default Search