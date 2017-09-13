import React,{Component} from 'react';
import {store} from './index-page.js';
import Move from '../global/move.js';
import {Link} from 'react-router-dom';




export default class IndexLeftTop extends Component{
    constructor(){
        super();
        this.state={
            hotData:null,
            model:'next',
            opation:null,
            num:1
        }
    }
    animationEL=null;
    timer = null;
    opationTimer = null;
    onOff = false;
    componentDidMount(){
        if(this.timer)clearInterval(this.timer);
        store.subscribe(()=>{
            let state = store.getState();
            let hotData = state.hotData;
            if(hotData){
                if(this.state.hotData)return;
                this.setState({
                    hotData:hotData,
                })
            }
        });
        this.timer = setInterval(()=>{
            if(this.animationEL){
                this.animationEL.style.marginLeft = 0;
                Move({
                    el:this.animationEL,
                    time:800,
                    target:{
                        tar:-590,
                        attr:'marginLeft'
                    },
                    callback:()=>{
                        const num = this.state.num%5;
                        this.setState({
                           num: num+1, 
                        });
                        this.animationEL.style.marginLeft = 0;
                    }
                });
            }
        },60000)
    }
    starShow=(data)=>{
        let Data = data.rating;
        const total = 5;
        let full,half,empty;
        let arr = [];
        if(Data.average*1){
            full = Math.floor(Data.stars/10);
            half = Math.ceil(Data.stars/10) - full;
            empty = total - full - half;
            for(let i = 0;i<full;i++){
                arr.push(
                    <img 
                    className="fl"
                    key={'full'+i}
                    alt=""
                    src={require('../../images/left/full-star.png')} />
                ); 
            }
            if(half){
                for(let i = 0;i<half;i++){
                    arr.push(
                        <img 
                        className="fl"
                        key={'half'+i}
                        alt=""
                        src={require('../../images/left/half-star.png')} />
                    ); 
                }
            }
            if(empty){
                for(let i = 0;i<empty;i++){
                    arr.push(
                        <img 
                        className="fl"
                        key={'empty'+i}
                        alt=""
                        src={require('../../images/left/empty-star.png')} />
                    ); 
                } 
            }
            arr.push(
                <span 
                key={'span'}
                className="fl">
                    {Data.average}
                </span>
            )
            return arr;
        }else{
            return(
              '暂无评分'  
            );
        }
        
    }
    optionShow=(e,i)=>{
        return(
            <div
            key={e.id+Math.random()+'opation'}
            className={'hot-img-show-opation hot-img-show-opation'+(i+1)}>
                <h6 key={'h6'}>
                    <strong>
                        {e.title}
                    </strong>
                    <span>
                        {e.year}
                    </span>
                </h6>
                <p 
                className="clearfix"
                key={'p1'}>
                    {this.starShow(e)}
                </p>
                <p key={'p2'}>
                    <span>
                        导演
                    </span>
                    <span>
                        {e.directors[0].name}
                    </span>
                </p>
                <p key={'pp3'}>
                    <span>主演</span>
                    <span>
                        {
                            e.casts.map((e,i)=>{
                                return '/'+e.name;
                            })
                        }
                    </span>
                </p>
            </div>
        );
    }
    imgShow=(data,num,model)=>{
        let start,end;
        model = this.state.model;
        if(model === 'next'){
            start = data.slice((num-1)*4,num*4);
            end = data.slice(num*4,(num+1)*4).length?data.slice(num*4,(num+1)*4):data.slice(0,4);
        }else if(model === 'prev'){
            start = num-2>=0?data.slice((num-2)*4,(num-1)*4):data.slice(16,20);
            end = data.slice((num-1)*4,num*4);
        }
        return(
            <ul 
            ref={(el)=>this.animationEL = el}
            className="clearfix hot-img-show">
                <li 
                key={'li1'}
                className="fl">
                    {
                        start.map((e,i)=>{
                            return (
                                <dl
                                key={e.id+Math.random()}
                                className="fl">
                                    <dt
                                    onMouseEnter={()=>{
                                        clearTimeout(this.opationTimer);
                                        this.opationTimer = setTimeout(()=>{
                                            this.setState({
                                                opation : this.optionShow(e,i),
                                            });
                                        },300);
                                    }}
                                    onMouseLeave={()=>{
                                        clearTimeout(this.opationTimer);
                                        this.setState({
                                            opation : null,
                                        });
                                    }}
                                    >
                                        <Link
                                        to={`/subject/${e.id}/?from=showing`}>
                                            <img 
                                            className="hot-img-show-dt"
                                            alt={e.alt}
                                            src={e.images.large} />
                                        </Link>
                                    </dt>
                                    <dd 
                                    className="hot-img-show-dd1"
                                    key={'dd1'}>
                                        <Link to={`/subject/${e.id}/?from=showing`}>
                                            {e.title.length>7?e.title.substring(0,7)+'...':e.title}
                                        </Link>
                                    </dd>
                                    <dd 
                                    className="clearfix hot-img-show-dd2"
                                    key={'dd2'}>
                                        {this.starShow(e)}
                                    </dd>
                                    <dd 
                                        className="hot-img-show-dd3"
                                        key={'dd3'}
                                    >
                                        <Link to={`/subject/${e.id}/cinema/beijing/`}>
                                            选座购票
                                        </Link>
                                    </dd>
                                </dl>
                            )
                        })
                    }
                </li>
                <li 
                key={'li2'}
                className="fl">
                    {
                        end.map((e,i)=>{
                            return (
                                <dl
                                key={e.id+Math.random()}
                                className="fl">
                                    <dt>
                                        <Link to={`/subject/${e.id}/?from=showing`}>
                                            <img 
                                            className="hot-img-show-dt"
                                            alt={e.alt}
                                            src={e.images.large} />
                                        </Link>
                                    </dt>
                                    <dd 
                                    className="hot-img-show-dd1"
                                    key={'dd1'}>
                                        <Link to={`/subject/${e.id}/?from=showing`}>
                                            {e.title.length>7?e.title.substring(0,7)+'...':e.title}
                                        </Link>
                                    </dd>
                                    <dd 
                                    className="clearfix  hot-img-show-dd2"
                                    key={'dd2'}>
                                        {this.starShow(e)}
                                    </dd>
                                    <dd 
                                    className="hot-img-show-dd3"
                                    key={'dd3'}>
                                        <Link to={`/subject/${e.id}/cinema/beijing/`}>
                                            选座购票
                                        </Link>
                                    </dd>
                                </dl>
                            )
                        })
                    }
                </li>
            </ul>
        );
    }
    show=(data,num) =>{
        num = this.state.num;
        return(
            <div className="hot">
                <h2 className="clearfix hot-h2">
                    <strong className="fl">正在热映</strong>
                    <Link 
                    className="fl bg-color-hover"
                    to="/cinema/nowplaying/">
                        全部正在热映»
                    </Link>
                    <Link 
                    className="fl bg-color-hover"
                    to="/cinema/later/">
                        即将上映»
                    </Link>







                    {/* 下一页轮播切换功能 */}
                    <span  
                    onClick={()=>{
                        clearInterval(this.timer);
                        if(this.onOff)return;
                        this.onOff = true;
                        this.setState({
                            model:'next',
                        });
                        this.animationEL.style.marginLeft = 0;
                        Move({
                            el:this.animationEL,
                            time:800,
                            target:{
                                tar:-590,
                                attr:'marginLeft'
                            },
                            callback:()=>{
                                const num = this.state.num%5;
                                this.setState({
                                num: num+1, 
                                });
                                this.animationEL.style.marginLeft = 0;
                                this.onOff = false;
                            }
                        });
                    }}
                    className="fr next"></span>












                    {/* 上一页轮播切换功能 */}
                    <span 
                    onClick={()=>{
                        clearInterval(this.timer);
                        if(this.onOff)return;
                        this.onOff = true;
                        this.setState({
                            model:'prev',
                        });
                        this.animationEL.style.marginLeft = '-590px';
                        Move({
                            el:this.animationEL,
                            time:800,
                            target:{
                                tar:0,
                                attr:'marginLeft'
                            },
                            callback:()=>{
                                const num = this.state.num-1>=1?this.state.num-1:5;
                                this.setState({
                                    num: num, 
                                });
                                this.animationEL.style.marginLeft = '-590px';
                                this.onOff = false;
                            }
                        });
                    }}
                    className="fr prev"></span>













                    
                    <span className="fr">
                        {num+'/'+data.length/4}
                    </span>
                </h2>
                <div className="hot-img-show-box">
                    {this.imgShow(data,num)}
                </div>
            </div>
        );
    }
    render(){
        return(
            <div className="index-left-top">
                {this.state.hotData?this.show(this.state.hotData):''}
                {this.state.opation?
                    this.state.opation
                    :
                    ''
                }
                <div className="left-banner">
                    <a 
                    rel="noopener noreferrer"
                    target="_blank">
                        <img 
                        alt=""
                        src={require('../../images/left/left-banner.png')}
                        />
                    </a>
                </div>
            </div>
        )
    }
}