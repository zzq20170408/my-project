import React, { Component } from 'react';
import IndexPage from './components/diff/index-page.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {createStore} from 'redux';
import $ from 'jquery';








import BuyTickets from './components/subpage/buy-tickets';
import Explore from './components/subpage/explore';
import Tv from './components/subpage/tv';
import Chart from './components/subpage/chart';
import Tag from './components/subpage/tag';
import Review from './components/subpage/review';
import Annual from './components/subpage/annual';






export let counter = (state={hotData:null,popData:null,comingData:null,url:null,location:null},action) =>{
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
          return Object.assign({},state,{url:val});
      case 'location':
          return Object.assign({},state,{location:val})
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

class App extends Component {
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
    $.ajax({
        dataType:'jsonp',
        type:'GET',
        url:'http://chaxun.1616.net/s.php?type=ip&output=json',
        success:(json)=>{
            console.log(json.Isp,json.Isp.indexOf('省'),json.Isp.indexOf('市'))
            let str = '';
            if(json.Isp.indexOf('省') === -1){
                const end = json.Isp.indexOf('市');
                str = json.Isp.substring(0,end);
            }else{
                const start = json.Isp.indexOf('省')*1+1;
                const end = json.Isp.indexOf('市');
                str = json.Isp.substring(start,end);
                console.log(str)
            }
            store.dispatch({type:'location',val:str})
        }
    })
}
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={IndexPage}/>
            <Route  path="/cinema" component={BuyTickets}/>
            <Route path="/explore" component={Explore}/>
            <Route path="/tv" component={Tv}/>
            <Route path="/chart" component={Chart}/>
            <Route path="/tag" component={Tag}/>
            <Route path="/review" component={Review}/>
            <Route path="/annual2016" component={Annual}/>
            <audio 
                autoPlay="autoplay" 
                loop="loop"
                src="https://mr3.doubanio.com/b1dce1982d6f0560234458b32c4c4df3/0/fm/song/p2694025_64k.mp4"
                style={{display:'none'}}
            ></audio>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
