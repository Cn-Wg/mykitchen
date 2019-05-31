import React from 'react'
import './login.css'
class Login extends React.Component{
    back(){
        this.props.history.go(-1)
    }
    render(){
        return <div className="login">
            <div className="login-top">
                <img src="http://wmall.wochu.cn/h5/img/vueLogin/loginTop.gif"/>
                <img onClick={this.back.bind(this)} src="http://wmall.wochu.cn/h5/img/vueLogin/close.png"/>
            </div>
            <div className="login-info">
                <div className="login-info-tel">
                    <input type="text" placeholder="请输入账号"/>
                </div>
                <div className="login-info-pwd">
                    <input type="password" placeholder="请输入密码"/>
                </div>
                <a href="/index/home">登录</a>
                
            </div>
            <div className="login-white"><p>查看<a href="./setUp/serviceProtocol.html">《我厨服务协议及隐私政策》</a></p>
                <p><a href="http://wmall.wochu.cn/h5/user/registerPage.html">免费注册</a></p></div>
        </div>
    }
}
export default Login