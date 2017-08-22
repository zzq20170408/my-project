import React,{Component} from 'react';


export default class Foot extends Component{
    render(){
        return(
            <ul  className="clearfix Foot">
                <li className="fl">
                    © 2005－2017 douban.com, all rights reserved 北京豆网科技有限公司
                </li>
                <li className="fr">
                    <a href="https://www.douban.com/about">
                        关于豆瓣 
                    </a>
                    .
                    <a href="https://jobs.douban.com/">
                        在豆瓣工作   
                    </a>
                    .
                    <a href="https://www.douban.com/about/contactus">
                        联系我们 
                    </a>
                    .
                    <a href="https://www.douban.com/about/disclaimer">
                         免责声明 
                    </a>
                    .
                    <a href="https://help.douban.com/?app=movie">
                         帮助中心 
                    </a>
                    .
                    <a href="https://www.douban.com/doubanapp/frodo?referer=https%3A%2F%2Fmovie.douban.com%2F&wechat=0&os=Windows">
                        移动应用 
                    </a>
                    .
                    <a href="https://www.douban.com/partner/">
                        豆瓣广告
                    </a>
                </li>
            </ul>
        );
    }
}