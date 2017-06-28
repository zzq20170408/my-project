import React,{Component} from 'react';
import $ from 'jquery';
import Move from '../move.js';


export default class HotFilm extends Component{
    constructor(){
        super();
        this.state={
            movie:[],
            pageNum:0,
            num:0,
            li1onOff:true,
            order:true,
        }
    }
    onOff=false;
    li1=null;
    li2=null;
    timer = null;
    clickOn=false;
    componentDidMount(){
        clearInterval(this.timer)
        const _this = this;
        $.ajax({
            url:'https://api.douban.com/v2/movie/in_theaters',
            dataType:'jsonp',
            success:(data)=>{
                this.setState({
                    movie:data.subjects,
                    pageNum:Math.ceil(data.subjects.length/4),
                });
            }
        });
        setTimeout(()=>{
            this.onOff = true;
            if(this.li1 && this.onOff){
                this.timer = setInterval(this.autoPlay,60000)
            }
        },2000)
        
    }
    autoPlay=()=>{
        clearInterval(this.timer)
        if(!this.li1)return;
        Move({
            el:this.li1,
            time:2000,
            target:{
                tar:-584,
                attr:'marginLeft'
            },
            callback:()=>{
                this.setState({
                    li1onOff:false,
                    num:++this.state.num,
                })
                this.li1.style.marginLeft = 0;
            }
        });
        
    }
    handlePlay=()=>{
        if(this.clickOn)return;
        clearInterval(this.timer)
        this.clickOn = true;
        Move({
            el:this.li1,
            time:2000,
            target:{
                tar:-584,
                attr:'marginLeft'
            },
            callback:()=>{
                this.setState({
                    li1onOff:false,
                    num:++this.state.num,
                })
                this.clickOn = false;
                this.li1.style.marginLeft = 0;
            }
        });
    }
    handlePlay2=()=>{
        if(this.clickOn)return;
        clearInterval(this.timer)
        this.clickOn = true;
        Move({
            el:this.li1,
            time:2000,
            target:{
                tar:0,
                attr:'marginLeft'
            },
            callback:()=>{
                let n = --this.state.num;
                    n = (n>=0)?n:4;
                    this.setState({
                        num:n,
                        order:true,
                });
                this.clickOn = false;
                this.li1.style.marginLeft = 0;
            }
        });
    }
    
    imgShow=(num,keyId)=>{
        const conNum = 4;
        keyId=keyId?keyId:'li1';
        if(num<0){
            num = 4;
        }
        let start = (num || this.state.num)%5*conNum;
        if(num==0){
            start = num;
        }
        const end = start + conNum -1;
        if(this.state.pageNum){
            let arr=[];
            const starShow=(e)=>{
                const total = 5;
                let i,j,k,arr1=[];
                const data = e.rating.stars;
                const average = e.rating.average;
                if(data*1){
                    const full = Math.floor(data/10);
                    const half = Math.ceil(data/10)-Math.floor(data/10);
                    const empty = total-full-half;
                    for(i=0;i<full;i++){
                        arr1.push(
                            <img 
                            key={i}
                            src={require('../../images/full-star.png')}
                            alt=""
                            className="fl star" />
                        );
                    }
                    for(j=0;j<half;j++){
                        arr1.push(
                            <img 
                            key={i+j+1}
                            alt=""                            
                            src={require('../../images/half-star.png')} 
                            className="fl star" />
                        );
                    }
                    for(k=0;k<empty;k++){
                        arr1.push(
                            <img 
                            key={i+j+k+2}
                            alt="" 
                            src={require('../../images/empty-star.png')} 
                            className="fl star" />
                        );
                    }
                    arr1.push(
                            <span 
                            key={average}
                            className="fl average">
                                {average}
                            </span>
                    );
                    return arr1;
                }else{
                    arr1.push(
                        <span
                        key={average}
                        className="fl no_average">
                            暂无评分
                        </span>
                    );
                    return arr1;
                }
            }
            this.state.movie.forEach((e,i)=>{
                if(i>=start && i<=end){
                    arr.push(
                        <dl 
                        className="fl"
                        key={e.id+keyId}>
                            <dt>
                                <a 
                                href={`https://movie.douban.com/subject/${e.id}/?from=showing`}>
                                    <img 
                                    src={e.images.large}
                                    alt="" />
                                    <br/>
                                    {(e.title.length>7)?e.title.substring(0,6)+'...':e.title}
                                </a>
                            </dt>
                            <dd 
                            className="star_row clearfix">
                                {starShow(e)}
                            </dd>
                            <dd 
                            className="clearfix slect_row">
                                <a
                                className="fl slect"
                                href={`https://movie.douban.com/subject/${e.id}/cinema/beijing/`}
                                >
                                    选座购票
                                </a>
                            </dd>
                        </dl>
                    )
                }
            });
            return arr; 
        }
    }
    render(){
        return(
            <div 
                className="hot_film"
                key={'hot_film'}
            >
                <h3 className="clearfix">
                    <strong className="fl">
                        正在热映
                    </strong>
                    <a className="fl"
                    href="https://movie.douban.com/cinema/nowplaying/beijing/">
                        全部正在热映》
                    </a>
                    <a className="fl"
                    href="https://movie.douban.com/cinema/later/beijing/">
                        即将上映》
                    </a>
                    <span 
                        onClick={()=>{
                            this.setState(
                                {
                                   order:true,
                                }
                            );
                            this.li1.style.marginLeft= 0;
                            this.handlePlay();
                        }}
                        className="fr next">
                    </span>
                    <span 
                        onClick={()=>{
                            this.setState(
                                {
                                   order:false, 
                                }
                            );
                            this.li1.style.marginLeft= '-584px';
                            this.handlePlay2();
                        }}
                        className="fr prev">
                    </span>
                    <span className="fr page">
                        {this.state.num%5+1}/{this.state.pageNum}
                    </span>
                </h3>
                <div className="img_box">
                    <ul className="clearfix">
                        <li 
                            className="clearfix  li1 fl"
                            key={'li1'}
                            ref={(el)=>{
                                this.li1=el;
                            }}
                        >
                            {
                                this.state.order?
                                this.imgShow()
                                :
                                this.imgShow(this.state.num-1)
                            }
                        </li>
                        <li 
                            key={'li2'}
                            ref={(el)=>{
                                this.li2=el;
                            }}
                            className="clearfix fl"
                        >
                            {
                                this.state.order?
                                this.imgShow((this.state.num+1)%5,'li2')
                                :
                                this.imgShow(null,'li2')
                            }
                        </li>
                    </ul>
                </div>
                <a href="https://www.douban.com/event/28905165/">
                    <img 
                    alt=""
                    src={require('../../images/banner.png')}
                    className="banner" />
                </a>
            </div>
        );
    }
}