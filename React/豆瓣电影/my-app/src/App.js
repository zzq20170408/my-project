import React, { Component } from 'react';
import IndexPage from './components/diff/index-page.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {createStore} from 'redux';
import $ from 'jquery';








import BuyTickets from './components/subpage/buy-tickets';
import Explore from './components/subpage/explore';
import Tv from './components/subpage/tv';
import Chart from './components/subpage/chart'; 






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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
