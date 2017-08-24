import React,{Component} from 'react';
import {store} from './index-page.js';
import Move from '../global/move.js';
import {Link} from 'react-router-dom';
import '../../index.css';




export default class IndexLeftTop extends Component{
    constructor(){
        super();
        this.state={
            hotData:''
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
    imgShow=(data,num,model)=>{
        return(
            <ul>
                <li></li>
                <li></li>
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
                <div className="hot-img-show">

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