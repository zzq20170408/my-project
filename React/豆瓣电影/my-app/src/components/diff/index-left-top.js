import React,{Component} from 'react';
import {store} from './index-page.js';
import Move from '../global/move.js';
import {Link} from 'react-router-dom';
import '../../index.css';




export default class IndexLeftTop extends Component{
    constructor(){
        super();
        this.state={
            hotData:'',
            model:'next'
        }
    }
    componentDidMount(){
        let state = null;
        store.subscribe(()=>{
            state = store.getState();
            let hotData = state.hotData;
            if(hotData){
                this.setState({
                    hotData:hotData
                })
            }
        });
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
                    src={require('../../images/left/full-star.png')} />
                ); 
            }
            if(half){
                for(let i = 0;i<half;i++){
                    arr.push(
                        <img 
                        className="fl"
                        key={'half'+i}
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
    imgShow=(data,num,model)=>{
        let start,end;
        model = this.state.model;
        if(model === 'next'){
            start = data.slice((num-1)*4,num*4);
            end = data.slice(num*4,(num+1)*4)?data.slice(num*4,(num+1)*4):data.slice(0,4);
        }else if(model === 'prev'){
            start = data.slice((num-1)*4,num*4);
            end = data.slice((num-2)*4,(num-1)*4)?data.slice((num-2)*4,(num-1)*4):data.slice(4,5);
        }
        return(
            <ul className="clearfix hot-img-show">
                <li 
                key={'li1'}
                className="fl">
                    {
                        start.map((e,i)=>{
                            return (
                                <div 
                                key={e.id+Math.random()}
                                className="fl">
                                    <dl>
                                        <dt>
                                            <Link to={`/subject/${e.id}`}>
                                                <img 
                                                className="hot-img-show-dt"
                                                alt={e.alt}
                                                src={e.images.large} />
                                            </Link>
                                        </dt>
                                        <dd key={'dd1'}>
                                            <Link to={`/subject/${e.id}`}>
                                                {e.title}
                                            </Link>
                                        </dd>
                                        <dd 
                                        className="clearfix"
                                        key={'dd2'}>
                                            {this.starShow(e)}
                                        </dd>
                                        <dd key={'dd3'}></dd>
                                    </dl>
                                </div>
                            )
                        })
                    }
                </li>
                <li 
                key={'li2'}
                className="fl"></li>
            </ul>
        );
    }
    show=(data,num) =>{
        num = num || 1;
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
                    <span className="fr next"></span>
                    <span className="fr prev"></span>
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
            <div>{this.state.hotData?this.show(this.state.hotData):''}</div>
        )
    }
}