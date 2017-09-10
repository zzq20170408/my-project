import React,{Component} from 'react';
import {createStore} from 'redux';
import $ from 'jquery';



import Header from '../global/header.js';
import Footer from '../global/footer.js';
import Right from '../global/right.js';
import IndexLeftTop from './index-left-top.js';
import IndexLeftPop from './index-left-pop.js';
import IndexLeftVideo from './index-left-video';
import HotRecommendation from './recommendation';
import FilmCritic from './FilmCritic';


export let counter = (state={hotData:null,popData:null,comingData:null,url:null},action) =>{
    let {type} = action;
    let {val} = action;
    switch(type){
        case 'HOT':
            return Object.assign({},state,{hotData:val});
        case 'POP':
            return Object.assign({},state,{popData:val});
        case 'COMING':
            return Object.assign({},state,{comingData:val});
        case 'URL':
            return Object.assign({},state,{url:val})
        default:
            return state;
    }
}

export let store = createStore(counter);
export let state = null;
store.subscribe(()=>{
    state = store.getState();
    console.log(state)
})


class IndexPage extends Component {
    componentDidMount(){
        $.ajax({
            url:'https://api.douban.com/v2/movie/in_theaters',
            dataType:'jsonp',
            success:(data)=>{
                store.dispatch({type:'HOT',val:data.subjects})
            }
        });
        $.ajax({
            url:'https://api.douban.com/v2/movie/coming_soon',
            dataType:'jsonp',
            success:(data)=>{
                store.dispatch({type:'COMING',val:data.subjects})
            }
        });
        $.ajax({
            url:'https://api.douban.com/v2/movie/top250',
            dataType:'jsonp',
            success:(data)=>{
                store.dispatch({type:'POP',val:data.subjects})
            }
        });
    }
    render(){
        return(
            <div>
                <Header />
                <div className="default-width clearfix">
                    <div className="fl index-left">
                        <IndexLeftTop />
                        <IndexLeftPop />
                        <IndexLeftVideo />
                        <HotRecommendation />
                        <FilmCritic />
                    </div>
                    <Right />
                </div>
                <div className="foot-banner default-width">
                    <a 
                        href="https://www.douban.com/note/635615217/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                        alt=""
                        src={require('../../images/left/banner.png')}
                        />
                    </a>
                </div>
                <Footer />
            </div>
        );
    }
}



export default IndexPage;
