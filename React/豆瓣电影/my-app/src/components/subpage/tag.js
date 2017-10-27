import React,{Component} from 'react';
import {store} from '../../App';
import Header from '../global/header';
import Right from '../global/right';
import Footer from '../global/footer';
import FootBanner from '../global/foot-banner';


export default class Tag extends Component{
    constructor(){
        super();
        this.state={
            data:null,
        }
    }
    navDom1 = [];
    navDom2 = [];
    navDom3 = [];
    navDom4 = [];
    navDom5 = [];









    componentDidMount(){
        const state = store.getState();
        const {hotData,comingData,popData} = state;
        if(hotData && comingData && popData){
            const data = [...hotData,...popData,...comingData];
            this.setState({
                data:data,
                onOff:true,
            });
        }
    }









    viewInit = ()=>{
        if(!this.state.data)return;
        let data = null;
        if(this.state.onOff){
            data = this.state.data.slice(0,20);
        }else{
            data = this.state.data.slice();
        }
        return data.map((e,i)=>{
            return (
                <a 
                    href={'https://movie.douban.com/subject/'+e.id+'/'}
                    target = "_blank"
                    rel="noopener noreferrer"
                    className="fl"
                    key={e.id+Math.random()}
                >
                    <div>
                        <img
                            alt={e.alt}
                            src={e.images.large}
                        />
                    </div>
                    <p 
                        style={{width:'115px',color:'#333333',paddingTop:'7px',lineHeight:'18px',fontSize:'12px',minHeight:'57px'}}
                    >
                        <span
                            style={{marginRight:'9px'}}
                            key="span1"
                        >
                            {e.title}
                        </span>
                        <span
                            key="span2"
                            style={{color:'#ffac2d'}}
                        >
                            {e.rating.average}
                        </span>
                    </p>
                </a>
            );
        })
    }












    render(){
        return(
            <div
                className="Tag"
            >
                <Header />
                <div 
                    className="default-width clearfix"
                >
                    
                    <div className="fl index-left position-r">
                        <h2 className="Tag-h2">选电影</h2>
                        <div className="Tag-nav">
                            <h3 className="Tag-h3 clearfix">
                                <span 
                                    className="fl active"
                                    ref={(el)=>this.navDom1.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom1.length = 7;
                                        this.navDom1.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >
                                    全部形式
                                </span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom1.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom1.length = 7;
                                        this.navDom1.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >电影</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom1.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom1.length = 7;
                                        this.navDom1.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >电视剧</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom1.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom1.length = 7;
                                        this.navDom1.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >综艺</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom1.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom1.length = 7;
                                        this.navDom1.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >动画</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom1.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom1.length = 7;
                                        this.navDom1.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >纪录片</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom1.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom1.length = 7;
                                        this.navDom1.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >短片</span>
                            </h3>
                            <h4 className="Tag-h4 clearfix">
                                <span 
                                    className="fl active"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >全部类型</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >剧情</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >爱情</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >喜剧</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >科幻</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >动作</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >悬疑</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >犯罪</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >恐怖</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >青春</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >励志</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >战争</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >文艺</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >黑色幽默</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >传记</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >情色</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >暴力</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >音乐</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom2.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom2.length = 19;
                                        this.navDom2.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >家庭</span>
                            </h4>
                            <h5 className="Tag-h5 clearfix">
                                <span 
                                    className="fl active"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >全部地区</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >大陆</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >美国</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >香港</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >台湾</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >日本</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >韩国</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >英国</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >法国</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >德国</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >意大利</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >西班牙</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >印度</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >泰国</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >俄罗斯</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >伊朗</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >加拿大</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >澳大利亚</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >爱尔兰</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >瑞典</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >巴西</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom3.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom3.length = 22;
                                        this.navDom3.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >丹麦</span>
                            </h5>
                            <h6 className="Tag-h6 clearfix">
                                <span 
                                    className="fl active"
                                    ref={(el)=>this.navDom4.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom4.length = 6;
                                        this.navDom4.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >全部特色</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom4.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom4.length = 6;
                                        this.navDom4.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >热门</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom4.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom4.length = 6;
                                        this.navDom4.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >最新</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom4.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom4.length = 6;
                                        this.navDom4.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >经典</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom4.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom4.length = 6;
                                        this.navDom4.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >豆瓣高分</span>
                                <span 
                                    className="fl"
                                    ref={(el)=>this.navDom4.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom4.length = 6;
                                        this.navDom4.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >冷门佳片</span>
                            </h6>
                            <h6 className="Tag-h6-1 clearfix">
                                <strong 
                                    className="fl active"
                                    ref={(el)=>this.navDom5.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom5.length = 3;
                                        this.navDom5.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >按热度排序</strong>
                                <strong 
                                    className="fl"
                                    ref={(el)=>this.navDom5.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom5.length = 3;
                                        this.navDom5.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >按时间排序</strong>
                                <strong 
                                    className="fl"
                                    ref={(el)=>this.navDom5.push(el)}
                                    onClick={(ev)=>{
                                        this.navDom5.length = 3;
                                        this.navDom5.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        ev.target.className = 'fl active';
                                        if(!this.state.data)return;
                                        const Data = this.state.data.slice().reverse();
                                        const data = Data.sort(()=>{
                                            return Math.random() - 0.5;
                                        })
                                        this.setState({
                                            data:data,
                                        })
                                    }}
                                >按评价排序</strong>
                            </h6>
                        </div>
                        <div className="Tag-content clearfix">
                            {
                                this.viewInit()
                            }
                        </div>
                        {
                            this.state.onOff && 
                            <div 
                                className="Tag-content-addmore"
                                onClick={()=>{
                                    this.setState({
                                        onOff:false,
                                    })
                                }}
                            >
                                加载更多
                            </div>
                        }
                    </div>
                    <Right />
                </div>
                <FootBanner />
                <Footer />
            </div>
        );
    }
}