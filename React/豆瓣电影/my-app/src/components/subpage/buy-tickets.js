import React,{Component} from 'react';
import {store} from '../diff/index-page';
import Header from '../global/header.js';
import Footer from '../global/footer.js';
import Right from '../global/right.js';
import {data} from '../global/subdata';
import FootBanner from '../global/foot-banner';


let Data = data.buyTickets;


export default class BuyTickets extends Component{
    constructor(){
        super();
        this.state = {
            hotData:null,
            location:null,
            navOrder:'hot',
            onOff:true,
        }
    }
    opationDom = null;
    prevDom = [];
    onOff = true;






    componentDidMount(){
        if(this.timer)clearInterval(this.timer);
        store.subscribe(()=>{
            const state = store.getState();
            const hotData = state.hotData;
            const popData = state.popData;
            const location = state.location;
            if(hotData && popData && location){
                if(this.state.hotData)return;
                this.setState({
                    hotData:[...hotData,...popData],
                    location:location,
                })
            }   
        });
    }





    
    showNav=(data)=>{
        let arr = [];
        for(let key in data){
            arr.push(
                <li 
                    key = {key+Math.random()}
                >
                    <h6>{key}</h6>
                    <div className="clearfix">
                        {
                            
                            data[key].map((e,i)=>{
                                return (
                                    <span 
                                        key={key+i}
                                        className="fl"
                                    >
                                        {e}
                                    </span>
                                )
                            })
                        }
                    </div>
                </li>
            )
        }
        return arr;
    }











starShow=(data)=>{
    const total = 5;
    const {average,stars} = data.rating;
    const full = Math.floor(stars/10);
    const half = Math.ceil(stars/10)-full;
    const empty = total -full -half;
    let arr = [];
    if(!(stars*1)){
        return '暂无评分';
    }
    for(let i=0;i<full;i++){
        arr.push(
            <img 
                className="fl star"
                key={'full'+i}
                alt=""
                src={require('../../images/left/full-star.png')}
            />
        );
    }
    if(half){
        for(let i=0;i<half;i++){
            arr.push(
                <img 
                    className="fl star"
                    key={'half'+i}
                    alt=""
                    src={require('../../images/left/half-star.png')}
                />
            );
        }
    }
    if(empty){
        for(let i=0;i<empty;i++){
            arr.push(
                <img 
                    className="fl star"
                    key={'empty'+i}
                    alt=""
                    src={require('../../images/left/empty-star.png')}
                />
            );
        }
    }
    return arr;
}









    imgShow=(model)=>{
        if(!this.state.hotData)return'';
        if(model){
            let Data = this.state.hotData.slice();
            data = Data.reverse().slice(0,12);
            return data.map((e,i)=>{
                let l;
                const time = new Date();
                let M = time.getMonth();
                M = M*1+1<10?'0'+(M+1):M+1;
                let d = time.getDate();
                d = d*1<10?'0'+d:d;
                if(i%4===3){
                    l=0;
                }else{
                    l = '25px';
                }
                return(
                    <dl
                        className="fl"
                        key={e.id}
                        style={{textAlign:'center',marginRight:l}}
                    >
                        <dt>
                            <img 
                                alt={e.alt}
                                src={e.images.large}
                                style={{marginBottom:'15px'}}
                            />
                        </dt>
                        <dd 
                            key='dd1'
                            style={{marginBottom:'9px'}}
                        >
                            {e.title.length<7?e.title:e.title.substring(0,7)+'...'}
                        </dd>
                        <dd 
                            key='dd2'
                            style={{marginBottom:'42px',color:'#afacaa'}}
                        >
                            {M + '月' + d + '日上映'}
                        </dd>
                    </dl>
                );
            })
        }
        let data = this.state.onOff?this.state.hotData.slice(0,12):this.state.hotData;
        return data.map((e,i)=>{
            let l;
            if(i%4===3){
                l=0;
            }else{
                l = '25px';
            }
            return (
                <dl
                    className="fl"
                    key={e.id}
                    style={{textAlign:'center',marginRight:l}}
                >
                    <dt>
                        <img 
                            alt={e.alt}
                            src={e.images.large}
                            style={{marginBottom:'15px'}}
                        />
                    </dt>
                    <dd 
                        key='dd1'
                        style={{marginBottom:'9px'}}
                    >
                        {e.title.length<7?e.title:e.title.substring(0,7)+'...'}
                    </dd>
                    <dd 
                        key='dd2'
                        className="clearfix"
                        style={{paddingLeft:'26px',marginBottom:'10px'}}
                    >
                        {this.starShow(e)}
                    </dd>
                    <dd 
                        key='dd3'
                        style={{width:'106px',height:'24px',background:'#eeeeee',border:'1px solid #d9d9d9',lineHeight:'24px',margin:'0 auto 32px'}}
                    >
                        选座购票
                    </dd>
                </dl>
            )
        })
    }



    render(){
        return(
            <div 
                className="buy-tickets"
                onClick={()=>{
                    if(this.opationDom)this.opationDom.style.display = 'none';
                }}
            >
                <Header />
                <div className="default-width clearfix">
                    <div className="fl index-left position-r">
                        <div className="buy-tickets-left-top">
                            <h2 className="buy-tickets-left-top-h2 clearfix">
                                <strong className="fl">
                                    {'电影票 - '+(this.state.location?this.state.location:'')}
                                </strong>
                                <span 
                                    className="fl"
                                    onClick={(ev)=>{
                                        if(this.opationDom){
                                            if(this.onOff){
                                                this.opationDom.style.display = 'block';
                                            }else{
                                                this.opationDom.style.display = 'none';
                                            }
                                            this.onOff = !this.onOff;
                                            ev.stopPropagation();
                                        }
                                    }}
                                >
                                    [切换城市]
                                </span>
                            </h2>
                            <div 
                                className="buy-tickets-left-top-opation position-a"
                                ref={(el)=>this.opationDom=el}
                            >
                                <div className="buy-tickets-let-top-nav clearfix">
                                    <span 
                                        className="fl active"
                                        ref={(el)=>this.prevDom.push(el)}
                                        onClick={(ev)=>{
                                            ev.stopPropagation();
                                            if(this.prevDom.length){
                                                this.prevDom.length = 5;
                                                this.prevDom.map((e)=>{
                                                    return e.className = 'fl';
                                                })
                                            }
                                            ev.target.className = 'fl active';
                                            this.setState({
                                                navOrder:'hot'
                                            })
                                        }}
                                    >
                                        热门
                                    </span>
                                    <span 
                                        className="fl"
                                        ref={(el)=>this.prevDom.push(el)}
                                        onClick={(ev)=>{
                                            ev.stopPropagation();
                                            if(this.prevDom.length){
                                                this.prevDom.length = 5;
                                                this.prevDom.map((e)=>{
                                                    return e.className = 'fl';
                                                })
                                            }
                                            ev.target.className = 'fl active';
                                            this.setState({
                                                navOrder:'AG'
                                            })
                                        }}
                                    >
                                        A - G
                                    </span>
                                    <span 
                                        className="fl"
                                        ref={(el)=>this.prevDom.push(el)}
                                        onClick={(ev)=>{
                                            ev.stopPropagation();
                                            if(this.prevDom.length){
                                                this.prevDom.length = 5;
                                                this.prevDom.map((e)=>{
                                                    return e.className = 'fl';
                                                })
                                            }
                                            ev.target.className = 'fl active';
                                            this.setState({
                                                navOrder:'HL'
                                            })
                                        }}
                                    >
                                        H - L
                                    </span>
                                    <span 
                                        className="fl"
                                        ref={(el)=>this.prevDom.push(el)}
                                        onClick={(ev)=>{
                                            ev.stopPropagation();
                                            if(this.prevDom.length){
                                                this.prevDom.length = 5;
                                                this.prevDom.map((e)=>{
                                                    return e.className = 'fl';
                                                })
                                            }
                                            ev.target.className = 'fl active';
                                            this.setState({
                                                navOrder:'MT'
                                            })
                                        }}
                                    >
                                        M - T
                                    </span>
                                    <span 
                                        className="fl"
                                        ref={(el)=>this.prevDom.push(el)}
                                        onClick={(ev)=>{
                                            ev.stopPropagation();
                                            if(this.prevDom.length){
                                                this.prevDom.length = 5;
                                                this.prevDom.map((e)=>{
                                                    return e.className = 'fl';
                                                })
                                            }
                                            ev.target.className = 'fl active';
                                            this.setState({
                                                navOrder:'WZ'
                                            })
                                        }}
                                    >
                                        W - Z
                                    </span>
                                </div>
                                <ul className="clearfix buy-tickets-let-top-cont">
                                    {
                                        
                                        Data.nav[this.state.navOrder].constructor === Array?
                                        <li 
                                        key = {this.state.navOrder}
                                        className="fl li1">
                                            {
                                                Data.nav[this.state.navOrder].map((e,i)=>{
                                                    return (
                                                    <span 
                                                        className="fl"
                                                        key={i}
                                                    >
                                                        {e}
                                                    </span>
                                                    )
                                                })
                                            }
                                        </li>
                                        :
                                        this.showNav(Data.nav[this.state.navOrder])
                                    }
                                </ul>
                            </div>
                            <div>
                                <a
                                    href="https://www.douban.com/note/636387412/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img 
                                        alt=""
                                        src={require('../../images/subpage/buy-tickets/banner.png')}
                                    />
                                </a>
                            </div>
                        </div>








                        <div className="buy-tickets-left-middle">
                            <h4 className="buy-tickets-left-middle-h4">
                                正在上映
                            </h4>
                            <div
                                className="clearfix"
                            >
                                {this.imgShow()}
                            </div>
                            {this.state.onOff &&
                                <div
                                    className="buy-tickets-left-middle-more"
                                    onClick={()=>{
                                        this.setState({
                                            onOff:false
                                        })
                                    }}
                                >
                                    显示全部影片
                                </div>
                            }
                        </div>




                        <div
                            className="buy-tickets-left-bottom clearfix"
                        >
                            <h4 
                                className="buy-tickets-left-middle-h4"
                            >
                                即将上映
                            </h4>
                            {this.imgShow(1)}
                        </div> 
                    </div>
                    <Right />
                </div>
                <FootBanner />
                <Footer />
            </div>
        )
    }









}