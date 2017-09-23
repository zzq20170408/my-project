import React,{Component} from 'react';
import {Link} from 'react-router-dom';
let onOff = true;




export default class Annual extends Component{
    state={
        imgSrc:'data:image/gif;base64,R0lGODlhHAAcAPABAP///wAAACH5BAkeAAEAIf8LTkVUU0NBUEUyLjADAQAAACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUALAAAAAAcABwAAAJPjI+py+0BIngUyvrkxE3zfn2LJypkiZyooaah0x6x+SazXbsRdd/6RttlcjJiEIgTwowWZVKD/DGgzB41WnT+rNosdFq9grss8ShMXqkZBQAh+QQJHgABACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUALAAAAAAcABwAAAJGjI+py+0PDZggPlptw3rTznCgIo5IaUrYZ67s6E5pnMHxfLe57eL9gjrtEsEDLfQiDoUy4NKYZK6QTdJTVVX+rFlp6qspAAAh+QQJHgABACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUALAAAAAAcABwAAAJQjI+py+1vgAQQTlrdzXrytn1LKCZkeZxooKbe00ZvJzGxOeM1nCO333PtaBjFT1jUXZLAofIGXTqbTGR0ag3KsNulTcuSVrtfaXkc5q7WjAIAOw=='
    }
    audioDom = null;
    render(){
        return (
            <div
                className="annual position-r"
                style={{height:'300px'}}
                onWheel={(ev)=>{
                    console.log(ev.deltaY)
                }}
            >
                <header className="annual-header position-f clearfix">
                    <div className="annual-header-top clearfix">
                        <Link to="/" className="fl">
                            <img 
                            alt=""
                            src={require('../../images/subpage/dou.png')}/>
                            <span>豆瓣</span>
                        </Link>
                        <span className="annual-header-top-span1 fl">
                            2016年度电影榜单
                        </span>
                        <span className="annual-header-top-span2 fl"></span>
                        <span className="annual-header-top-span3 fl">
                            分享给朋友
                        </span>
                        <span className="fl">共9，653，012人访问</span>
                    </div>
                    
                    <div className="clearfix">
                        <div
                            className="annual-menu fr"
                        >
                            目录
                        </div>
                        <div className="fr">
                            <span
                                style={{cursor:'pointer'}}
                                onClick={(ev)=>{
                                    if(this.audioDom){
                                        const e = ev.target;
                                        if(onOff){
                                            this.audioDom.pause();
                                            e.innerText = '播放背景音乐';
                                        }else{
                                            this.audioDom.play();
                                            e.innerText = 'City of Stars';
                                        }
                                        onOff = !onOff;
                                    }
                                }}
                            >City of Stars</span>
                            <audio 
                                autoPlay="autoplay" 
                                loop="loop"
                                src="https://mr3.doubanio.com/b1dce1982d6f0560234458b32c4c4df3/0/fm/song/p2694025_64k.mp4"
                                style={{display:'none'}}
                                ref={(el)=>this.audioDom=el}
                            ></audio>
                        </div>
                        
                        
                    </div>
                    
                </header>
                <div className="annual-content">
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}