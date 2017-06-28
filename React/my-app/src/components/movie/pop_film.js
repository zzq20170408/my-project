import React,{Component} from 'react';
import $ from 'jquery';
import Move from '../move.js';



export default class PopFilm extends Component{
    constructor(){
        super();
        this.state={
            pageNum:0,
            data:[],
            onOff:true,
            tabOnOff:false,
        }
    }
     _thisSet=(data)=>{
        this.setState({
            data:data.subjects,
        });
    }
    elArr=[];
    elArr2=[];
    btnNow=0;
    imgBox=null;
    play1=null;
    play2=null;
    componentDidMount(){
        const _this = this;
        $.ajax({
            url:'https://api.douban.com/v2/movie/in_theaters',
            dataType:'jsonp',
            success:function(data){
                _this._thisSet(data);
            }
        });
    }
    //分页按钮点击事件函数
    btnClick = (ev)=>{
        this.elArr2.length = 5;
        this.elArr2.forEach((e,i)=>{
            e.id = i;
            e.style.backgroundColor = '#d8d8d8';
        });
        ev.target.style.backgroundColor = '#6198d7';
        if(ev.target.id<this.btnNow){
            this.btnNow = ev.target.id;
            this.setState({
                tabOnOff:true,
            });
            this.play2.style.left = '-600px';
            Move({
                el:this.play1,
                time:800,
                target:{
                    tar:600,
                    attr:'left'
                }
            });
             Move({
                el:this.play2,
                time:800,
                target:{
                    tar:0,
                    attr:'left'
                },
                callback:()=>{
                    this.setState({
                        pageNum:this.btnNow,
                        onOff:true,
                    })
                    this.play1.style.left=0;
                    this.play2.style.left='600px';
                }
            });
        }else{
            this.btnNow = ev.target.id;
            this.setState({
                tabOnOff:true,
            });
            Move({
                el:this.play1,
                time:800,
                target:{
                    tar:-600,
                    attr:'left'
                }
            });
             Move({
                el:this.play2,
                time:800,
                target:{
                    tar:0,
                    attr:'left'
                },
                callback:()=>{
                    this.setState({
                        pageNum:this.btnNow,
                        onOff:true,
                    })
                    this.play1.style.left=0;
                    this.play2.style.left='600px';
                }
            });
        }
    }
    // 上一个按钮事件函数
    prevClick=()=>{
        --this. btnNow;
        if(this.btnNow<0){
            this.btnNow = 4;
        }
        this.play2.style.left = '-600px';
        this.setState({
            onOff:false,
        });
        Move({
            el:this.play1,
            time:800,
            target:{
                tar:600,
                attr:'left'
            }
        });
        Move({
            el:this.play2,
            time:800,
            target:{
                tar:0,
                attr:'left'
            },
            callback:()=>{
                let page = --this.state.pageNum;
                if(page<0){
                    page=4;
                }
                this.setState({
                    pageNum:page,
                    onOff:true,
                })
                this.play1.style.left=0;
                this.play2.style.left='600px';
                this.elArr2.length = 5;
                this.elArr2.forEach((e,i)=>{
                    e.id = i;
                    e.style.backgroundColor = '#d8d8d8';
                });
                this.elArr2[this.btnNow].style.backgroundColor='#6198d7';
            }
        });
    }

    //下一个按钮点击事件
    nextClick=()=>{
        this. btnNow = (++this.btnNow)%5;
        Move({
            el:this.play1,
            time:800,
            target:{
                tar:-600,
                attr:'left'
            }
        });
        Move({
            el:this.play2,
            time:800,
            target:{
                tar:0,
                attr:'left'
            },
            callback:()=>{
                let page = ++this.state.pageNum;
                if(page>4){
                    page=0;
                }
                this.setState({
                    pageNum:page,
                    onOff:true,
                })
                this.play1.style.left=0;
                this.play2.style.left='600px';
                this.elArr2.length = 5;
                this.elArr2.forEach((e,i)=>{
                    e.id = i;
                    e.style.backgroundColor = '#d8d8d8';
                });
                this.elArr2[this.btnNow].style.backgroundColor='#6198d7';
            }
        });
    }
    //分类导航点击事件函数
    leaderClick=(ev)=>{
        if(this.elArr[0].className == 'fl span1')return;
        if(ev.target.onOff)return;
        this.elArr.length = 8;
        this.elArr.forEach((e)=>{
            e.className = 'fl';
            e.onOff = false;
        });
        ev.target.className= 'fl active';
        ev.target.onOff = true;
        this.setState({
            data:this.state.data.reverse(),
        });
    }
    imgShow=(num)=>{
        let arr=[];
        if(this.state.data.length){
            if(num<0){
                num=4;
            }
            if(num>4){
                num=0;
            }
            const start = num*4;
            const end = (num+1)*4;
            const Data = this.state.data.slice(start,end)
            Data.forEach((e,i)=>{
                arr.push(
                    <a
                    className="average_box fl"
                    href={`https://movie.douban.com/subject/${e.id}/?from=showing`}
                    key={e.id}
                    >
                        <img 
                        className="showImg"
                        src={e.images.medium}
                        alt={e.alt}
                        key={e.id+'img'}
                        /><br/>
                        <span
                        className="title"
                        key={e.id+'span1'}
                        >
                            {
                                (e.title.length>5)?e.title.substring(0,5)+'...'
                                :
                                e.title
                            }
                        </span>
                        <span 
                            className="average"
                        key = {e.id+'span2'}
                        >
                            { e.rating.average}
                        </span>
                    </a>
                );
            })
        }
        return arr;
    }
    render(){
        return(
            <ul className="pop_film">
                <li className="clearfix li1">
                    <strong className="fl">
                        最近热门电影
                    </strong>
                    <span 
                        ref={(e)=>this.elArr.push(e)}
                        onClick={(ev)=>this.leaderClick(ev)}
                        className="fl span1"
                    >
                        热门
                    </span>
                    <span 
                        ref={(e)=>this.elArr.push(e)}
                        onClick={(ev)=>this.leaderClick(ev)}
                        className="fl"
                    >
                        最新
                    </span>
                    <span 
                        ref={(e)=>this.elArr.push(e)}
                        onClick={(ev)=>this.leaderClick(ev)}
                        className="fl"
                    >
                        豆瓣高分
                    </span>
                    <span 
                        ref={(e)=>this.elArr.push(e)}
                        onClick={(ev)=>this.leaderClick(ev)}
                        className="fl"
                    >
                        冷门佳片
                    </span>
                    <span 
                        ref={(e)=>this.elArr.push(e)}
                        onClick={(ev)=>this.leaderClick(ev)}
                        className="fl"
                    >
                        华语
                    </span>
                    <span 
                        ref={(e)=>this.elArr.push(e)}
                        onClick={(ev)=>this.leaderClick(ev)}
                        className="fl"
                    >
                        欧美
                    </span>
                    <span 
                        ref={(e)=>this.elArr.push(e)}
                        onClick={(ev)=>this.leaderClick(ev)}
                        className="fl"
                    >
                        韩国
                    </span>
                    <span 
                        ref={(e)=>this.elArr.push(e)}
                        onClick={(ev)=>this.leaderClick(ev)}
                        className="fl"
                    >
                        日本
                    </span>
                    <a 
                    className="fr"
                    href="https://movie.douban.com/explore#!type=movie&tag=%E5%8D%8E%E8%AF%AD&sort=recommend&page_limit=20&page_start=0">
                        更多》
                    </a>
                </li>
                <li 
                    className="li2"
                >
                    <div 
                        className="img_box"
                    >
                        <div 
                            ref={(e)=>this.play1=e}
                            className="img_play_box clearfix"
                        >
                            {
                                this.imgShow(this.state.pageNum)
                            }
                        </div>
                        <div  
                            ref={(e)=>this.play2=e}
                            className="img_play_box2 clearfix"
                        >
                            {
                                this.state.onOff?
                                this.imgShow(this.state.tabOnOff?this.btnNow:this.state.pageNum+1)
                                :
                                this.imgShow(this.state.pageNum-1)
                            }
                        </div>
                    </div>
                </li>
                <li className="btn_box clearfix">
                    <span 
                        onClick={()=>{this.prevClick()}}
                        className="fl prev"
                    >
                    </span>
                    <span 
                        ref={(e)=>this.elArr2.push(e)}
                        onClick={(ev)=>this.btnClick(ev)}
                        className="fl now">
                    </span>
                    <span 
                        ref={(e)=>this.elArr2.push(e)}
                        onClick={(ev)=>this.btnClick(ev)}
                        className="fl now">
                    </span>
                    <span 
                        ref={(e)=>this.elArr2.push(e)}
                        onClick={(ev)=>this.btnClick(ev)}
                        className="fl now">
                    </span>
                    <span 
                        ref={(e)=>this.elArr2.push(e)}
                        onClick={(ev)=>this.btnClick(ev)}
                        className="fl now">
                    </span>
                    <span 
                        ref={(e)=>this.elArr2.push(e)}
                        onClick={(ev)=>this.btnClick(ev)}
                        className="fl now">
                    </span>
                    <span 
                        onClick={()=>{this.nextClick()}}
                        className="fl next"
                    >
                    </span>
                </li>
            </ul>
        );
    }
}