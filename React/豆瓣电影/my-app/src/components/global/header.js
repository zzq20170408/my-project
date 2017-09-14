import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import codefans_net_CC2PY from  './acsii';
import {store} from '../../App';



class Header extends Component {
    constructor(){
        super();
        this.state={
            show:false,
            showTwo:false,
            location:null,
        }
    }
    timer=null;
    search = {
        val:"电影、影人、影院、电视剧",
        target:null
    };



    // 获取位置信息失败处理函数
    showError = (error) => {
        switch(error.code){
            case error.PERMISSION:
                console.log('定位失败，用户拒绝请求地里定位');
                break;
            case error.POSITION_UNAVAILABLE:   
                console.log("定位失败,位置信息是不可用");   
                break;   
            case error.TIMEOUT:   
                console.log("定位失败,请求获取用户位置超时");   
                break;   
            case error.UNKNOWN_ERROR:   
                console.log("定位失败,定位系统失效");   
                break;   
            default :
                break;
        }
    }




    // 获取位置信息的函数
    showPosition = (position) => {   
        var latlon = position.coords.latitude+','+position.coords.longitude;   
           console.log(111111)
        //baidu   
        var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+latlon+"&output=json&pois=0";   
        $.ajax({    
            type: "GET",    
            dataType: "jsonp",    
            url: url,   
            beforeSend: function(){   
                console.log('正在定位...');   
            },   
            success: function (json) {    
                if(json.status===0){   
                    console.log(json.result.formatted_address);   
                }   
            },   
            error: function (XMLHttpRequest, textStatus, errorThrown) {    
                console.log(latlon+"地址位置获取失败");    
            }   
        });   
    }

     
    componentDidMount(){
        $.ajax({
            dataType:'jsonp',
            type:'GET',
            url:'http://chaxun.1616.net/s.php?type=ip&output=json',
            success:(json)=>{
                console.log(json.Isp,json.Isp.indexOf('省'),json.Isp.indexOf('市'))
                let str = '';
                if(json.Isp.indexOf('省') === -1){
                    str = json.Isp;
                }else{
                    const start = json.Isp.indexOf('省')*1+1;
                    const end = json.Isp.indexOf('市');
                    str = json.Isp.substring(start,end);
                    console.log(str)
                }
                store.dispatch({type:'location',val:str})
                this.setState({
                    location:codefans_net_CC2PY(str)
                })
            }
        })
        
        if(navigator.geolocation){
            console.log(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this.showPosition,this.showError); 
        }
    }




    render(){
        return(
            <div className="header">
                <div className="header-top clearfix">
                    <ul className="header-top-left fl">
                        <li className="fl">
                            <a 
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.douban.com/">豆瓣
                            </a>
                        </li>
                        <li className="fl">
                            <a 
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://book.douban.com/">读书
                            </a>
                        </li>
                        <li className="fl">
                            <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://movie.douban.com/">电影</a>
                        </li>
                        <li className="fl">
                            <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://music.douban.com/">音乐</a>
                        </li>
                        <li className="fl">
                            <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://beijing.douban.com/">同城</a>
                        </li>
                        <li className="fl">
                            <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.douban.com/group/explore">小组</a>
                        </li>
                        <li className="fl">
                            <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://read.douban.com/?dcs=top-nav&dcm=douban">阅读</a>
                        </li>
                        <li className="fl">
                            <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://douban.fm/user-guide">FM</a>
                        </li>
                        <li className="fl">
                            <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.douban.com/time/?dt_time_source=douban-web_top_nav">时间</a>
                        </li>
                        <li className="fl">
                            <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://dongxi.douban.com/?dcs=top-nav&dcm=douban">东西</a>
                        </li>
                        <li className="fl">
                            <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://market.douban.com/?utm_campaign=douban_top_nav&utm_source=douban&utm_medium=pc_web">市集</a>
                        </li>
                        <li className="fl position-r">
                            <div>
                                <a 
                                    onClick={
                                        ()=>{
                                            this.setState({
                                                show:!this.state.show,
                                            });
                                        }
                                    }
                                    href="####">更多
                                </a>
                            </div>
                            <div  
                                style={{display:this.state.show?'block':'none'}}
                                className="position-a clearfix">
                                <a 
                                    className="fl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://moment.douban.com/app/">
                                    一刻
                                </a>
                                <a 
                                    className="fl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://ypy.douban.com/">
                                    豆瓣摄影
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div className="header-top-right fr">
                        <div 
                            onMouseEnter={
                                ()=>{
                                    this.setState({
                                        showTwo:true
                                    });
                                }
                            }
                            onMouseLeave={
                                ()=>{
                                    this.setState({
                                        showTwo:false
                                    });
                                }
                            }
                        className="fl nav-down position-r">
                            <a
                            style={{color:this.state.showTwo?'white':'#d0d1d0'}}
                            href="https://www.douban.com/doubanapp/app?channel=top-nav" 
                            className="nav-download fl">
                                下载豆瓣客户端
                            </a>
                            <div 
                            style={{display:this.state.showTwo?'block':'none'}}
                            className="position-a">
                                <p className="clearfix">
                                    <img 
                                    src={require('../../images/header/nav-down1.png')} 
                                    className="fl"
                                    alt=""/>
                                </p>
                                <p className="clearfix">
                                    <img 
                                    src={require('../../images/header/nav-down2.png')}
                                    className="fl"
                                    alt=""/>
                                </p>
                                <p>
                                    <a 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="">
                                        iPhone
                                    </a>
                                    <span> · </span>
                                    <a 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="">
                                        Android
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="fl nav-info">
                            <a href="https://www.douban.com/accounts/login?source=movie" 
                            className="fl nav-login">
                                登陆
                            </a>
                            <a href="https://accounts.douban.com/register?source=movie" 
                            className="fl nav-register">
                                注册
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header-middle">
                    <div className="default-width clearfix">
                        <div className="fl">
                            <Link to="/">
                                <span className="logo">豆瓣电影</span>
                            </Link>
                        </div>
                        <form className="fl" action="" method="" name="">
                            <input 
                            type="text" 
                            maxLength="60"
                            className="fl" 
                            placeholder="电影、影人、影院、电视剧"
                            ref={(e)=>this.search.target=e}
                            onInput={()=>{
                                this.search.val = this.search.target.value
                            }}
                            />
                            <Link 
                            to={`/subject_search?search_text=${this.search.val}&cat=1002`}
                            className="search fl">
                            </Link>
                        </form>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="default-width clearfix">
                        
                        <Link 
                            className="fl bg-color-change" 
                            to={'/cinema/nowplaying/'+(this.state.location)}
                        >
                            影讯&购票 
                        </Link>
                        
                        <Link className="fl bg-color-change" to={'/explore#tag='+encodeURI('热门')+'&sort=rank'}>
                            选电影 
                        </Link>
                        <Link className="fl bg-color-change" to={'/tv#tag='+encodeURI('热门')+'&sort=rank'}>
                            电视剧 
                        </Link>
                        <Link className="fl bg-color-change" to="/chart">
                            排行榜 
                        </Link>
                        <Link className="fl bg-color-change" to="/tag">
                            分类 
                        </Link>
                        <Link className="fl bg-color-change" to="/review/best/">
                            影评 
                        </Link>
                        <Link className="fl bg-color-change" to="/annual2016">
                            2016年度榜单 
                        </Link>
                        <Link className="fl bg-color-change" to="/standbyme">
                            2016观影报告
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}



export default Header;