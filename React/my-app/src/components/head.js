import '../css/Head.css';
import '../css/reset.css';
import React, { Component } from 'react';

class Head extends Component{
    constructor(){
        super();
        this.state={
            onOff:'',
        }
    }
    click=()=>{
        if(!this.state.onOff){
            this.setState({
                 onOff:'active',
            })
        }else{
            this.setState({
                 onOff:'',
            })
        }
    }
    render(){
        return(
            <div className="box">
                <ul className="Head clearfix">
                    <li>
                        <a href="https://www.douban.com/" target="blank">豆瓣</a>
                    </li>
                    <li>
                        <a href="https://book.douban.com/" target="blank" >读书</a>
                    </li>
                    <li>
                        <a href="https://movie.douban.com/" target="blank" >电影</a>
                    </li>
                    <li>
                        <a href="https://music.douban.com/" target="blank" >音乐</a>
                    </li>
                    <li>
                        <a href="https://beijing.douban.com/" target="blank" >同城</a>
                    </li>
                    <li>
                        <a href="https://www.douban.com/group/explore" target="blank" >小组</a>
                    </li>
                    <li>
                        <a href="https://read.douban.com/?dcs=top-nav&dcm=douban" target="blank" >阅读</a>
                    </li>
                    <li>
                        <a href="https://douban.fm/?from_=shire_top_nav" target="blank" >FM</a>
                    </li>
                    <li>
                        <a href="https://dongxi.douban.com/?dcs=top-nav&dcm=douban" target="blank" >东西</a>
                    </li>
                    <li>
                        <a href="https://market.douban.com/?utm_campaign=douban_top_nav&utm_source=douban&utm_medium=pc_web" target="blank" >市集</a>
                    </li>
                    <li className="active">
                        <a 
                            href="javascript:;" 
                            className={this.state.onOff}
                            onClick={this.click}
                        >更多</a>
                        <div className={this.state.onOff}>
                            <p>
                                <a href="https://moment.douban.com/app/" target="blank">一刻</a>
                            </p>
                            <p>
                                <a href="https://ypy.douban.com/"  target="blank">豆瓣摄影</a>
                            </p>
                        </div>
                    </li> 
                </ul>
                <div className="right">
                        <a href="https://www.douban.com/doubanapp/frodo?channel=top-nav&referer=https%3A%2F%2Fmovie.douban.com%2F&wechat=0&os=Windows" target="blank">下载豆瓣客户端</a>
                        <a href="https://www.douban.com/accounts/login?source=movie" target="blank">登陆</a>
                        <a href="https://accounts.douban.com/register?source=movie" target="blank">注册</a>
                </div>
            </div>
        );
    }
}

export default Head;