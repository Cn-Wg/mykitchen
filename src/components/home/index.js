import React from 'react'
import './home.css'
class Home extends React.Component{
    render(){
        return <div className="home">
        {/* 头部 */}
            <div className="top">
                <div className="top-left">
                    <img src="http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png" />
                </div>
                <div className="top-con">
                    <span>请填写地址</span>
                    <i><img src="http://wmall.wochu.cn/h5/home/vueimg/icon.png" /></i>
                </div>
                <div className="top-right">
                    <img src="http://wmall.wochu.cn/h5/home/vueimg/search.png" />
                </div>
            </div>
        {/* 轮播图 */}
            <div className="banner">
                <img src="https://img.wochu.cn/upload/42361356-0aff-4c08-a23e-6f677fdd022f.jpg" />
            </div>
        {/* NAV */}
            <div className="Nav">
                <ul>
                    <li><img src="https://img.wochu.cn/upload/2c16adf3-0d5a-482b-9c09-050884593bd5.jpg" /></li>
                    <li><img src="https://img.wochu.cn/upload/2c16adf3-0d5a-482b-9c09-050884593bd5.jpg" /></li>
                    <li><img src="https://img.wochu.cn/upload/2c16adf3-0d5a-482b-9c09-050884593bd5.jpg" /></li>
                    <li><img src="https://img.wochu.cn/upload/2c16adf3-0d5a-482b-9c09-050884593bd5.jpg" /></li>
                </ul>
                <ul>
                    <li><img src="https://img.wochu.cn/upload/2c16adf3-0d5a-482b-9c09-050884593bd5.jpg" /></li>
                    <li><img src="https://img.wochu.cn/upload/2c16adf3-0d5a-482b-9c09-050884593bd5.jpg" /></li>
                    <li><img src="https://img.wochu.cn/upload/2c16adf3-0d5a-482b-9c09-050884593bd5.jpg" /></li>
                    <li><img src="https://img.wochu.cn/upload/2c16adf3-0d5a-482b-9c09-050884593bd5.jpg" /></li>
                </ul>
            </div>
        {/* 我厨快报 */}
            <div className="news">
                <div className="news-left"><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f58332d2-ad98-4d10-aa96-28d1b8090d37.jpg" /></div>
                <div className="news-right">
                <span>【5折】清美内酯豆腐1.9元/400g</span>
                <i><img src="http://wmall.wochu.cn/h5/home/vueimg/down@3x.png" /></i>
                </div>
            </div>
        {/* img-link */}
            <div className="img-link">
                <img src="https://img.wochu.cn/upload/fff1c408-8401-4a3a-94a9-291deec0f301.gif" />
            </div>
        {/* 限时特惠 */}
            <div className="ltime">
                <div className="ltime-top">
                    ————  <span>限时特惠</span>  ————
                </div>
                <div className="ltime-bottom">
                    <div className="ltime-bottom-left">
                        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/86c3cdd5-c06e-410b-9e11-070693aaeb2c.jpg" />
                    </div>
                    <div className="ltime-bottom-right">
                        <h1>我厨优选小排400g</h1>
                        <h2>不腥不臊，厨艺小白也能做出鲜滋味</h2>
                        <h3><span>￥<b>14</b>.9</span><p>￥24.9</p><i><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></i></h3>
                    </div>
                </div>
            </div>
        {/* 商品 */}
            <div className="goods">
                <div className="goods-con">
                    <div className="goods-con-top"><img src="https://img.wochu.cn/upload/fd2bc74e-6a76-4ac7-9ef8-98d3a8135e82.jpg" /></div>
                    <h1>麒麟瓜1只装(单果2500g以上)</h1>
                    <h2>￥39.9</h2>
                    <h3>￥27.9</h3>
                    <h4><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></h4>
                </div>

                <div className="goods-con">
                    <div className="goods-con-top"><img src="https://img.wochu.cn/upload/fd2bc74e-6a76-4ac7-9ef8-98d3a8135e82.jpg" /></div>
                    <h1>麒麟瓜1只装(单果2500g以上)</h1>
                    <h2>￥39.9</h2>
                    <h3>￥27.9</h3>
                    <h4><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></h4>
                </div>

                <div className="goods-con">
                    <div className="goods-con-top"><img src="https://img.wochu.cn/upload/fd2bc74e-6a76-4ac7-9ef8-98d3a8135e82.jpg" /></div>
                    <h1>麒麟瓜1只装(单果2500g以上)</h1>
                    <h2>￥39.9</h2>
                    <h3>￥27.9</h3>
                    <h4><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></h4>
                </div>

                <div className="goods-con">
                    <div className="goods-con-top"><img src="https://img.wochu.cn/upload/fd2bc74e-6a76-4ac7-9ef8-98d3a8135e82.jpg" /></div>
                    <h1>麒麟瓜1只装(单果2500g以上)</h1>
                    <h2>￥39.9</h2>
                    <h3>￥27.9</h3>
                    <h4><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></h4>
                </div>

                <div className="goods-con">
                    <div className="goods-con-top"><img src="https://img.wochu.cn/upload/fd2bc74e-6a76-4ac7-9ef8-98d3a8135e82.jpg" /></div>
                    <h1>麒麟瓜1只装(单果2500g以上)</h1>
                    <h2>￥39.9</h2>
                    <h3>￥27.9</h3>
                    <h4><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></h4>
                </div>

            </div>
            {/* img-link */}
                <div className="img-link2">
                    <img src="https://img.wochu.cn/upload/3105de89-1538-403b-9771-85fea5587c2a.jpg" />
                </div>

                <div className="img-link3">
                    <img src="https://img.wochu.cn/upload/88bd77a3-2637-43b4-9f7a-637f1cb3edf2.jpg" />
                </div>

            {/* group-list */}
                <div className="group-list">
                    <div className="group-list-left"><img src="https://img.wochu.cn/upload/f4706060-3c5c-4791-beab-6023019856b8.jpg" /></div>
                    <div className="group-list-right"> 
                        <div className="group-list-right-top"><img src="https://img.wochu.cn/upload/6148ed94-ee8f-4076-b238-1382425763bc.jpg" /></div>
                        <div className="group-list-right-top"><img src="https://img.wochu.cn/upload/9c33a199-3bec-4959-9986-9232a943084a.jpg" /></div>
                    </div>
                 
                </div>
            {/* 秒变大厨 */}
                <div className="ltime">
                    <div className="ltime-top">
                        ————  <span>秒变大厨</span>  ————
                    </div>
                    <div className="ltime-bottom">
                        <div className="ltime-bottom-left">
                            <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d7310503-602c-44ab-baa3-b5cf0b6728b3.jpg" />
                        </div>
                        <div className="ltime-bottom-right">
                            <h1>美极时蔬炒牛蛙</h1>
                            <h2>超人气！新鲜活杀牛蛙块，极致细腻嫩滑，爽呆呆</h2>
                            <h3><span>￥<b>38</b>.9</span><p>￥45</p><i><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></i></h3>
                        </div>
                    </div>
                </div>
            {/* 商品 */}
            <div className="goods">
                <div className="goods-con">
                    <div className="goods-con-top"><img src="https://img.wochu.cn/upload/b88273bd-69cf-4c3a-8fde-d83b02c37c3b.jpg" /></div>
                    <h1>麒麟瓜1只装(单果2500g以上)</h1>
                    <h2>￥39.9</h2>
                    <h3>￥27.9</h3>
                    <h4><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></h4>
                </div>

                <div className="goods-con">
                    <div className="goods-con-top"><img src="https://img.wochu.cn/upload/b88273bd-69cf-4c3a-8fde-d83b02c37c3b.jpg" /></div>
                    <h1>麒麟瓜1只装(单果2500g以上)</h1>
                    <h2>￥39.9</h2>
                    <h3>￥27.9</h3>
                    <h4><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></h4>
                </div>

                <div className="goods-con">
                    <div className="goods-con-top"><img src="https://img.wochu.cn/upload/b88273bd-69cf-4c3a-8fde-d83b02c37c3b.jpg" /></div>
                    <h1>麒麟瓜1只装(单果2500g以上)</h1>
                    <h2>￥39.9</h2>
                    <h3>￥27.9</h3>
                    <h4><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></h4>
                </div>

                <div className="goods-con">
                    <div className="goods-con-top"><img src="https://img.wochu.cn/upload/b88273bd-69cf-4c3a-8fde-d83b02c37c3b.jpg" /></div>
                    <h1>麒麟瓜1只装(单果2500g以上)</h1>
                    <h2>￥39.9</h2>
                    <h3>￥27.9</h3>
                    <h4><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></h4>
                </div>

                <div className="goods-con">
                    <div className="goods-con-top"><img src="https://img.wochu.cn/upload/b88273bd-69cf-4c3a-8fde-d83b02c37c3b.jpg" /></div>
                    <h1>麒麟瓜1只装(单果2500g以上)</h1>
                    <h2>￥39.9</h2>
                    <h3>￥27.9</h3>
                    <h4><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" /></h4>
                </div>

            </div>
        </div>
    }
}
export default Home