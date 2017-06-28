import React, { Component } from 'react';
import './App.css';
import './css/reset.css';
//顶部-g
import Head from './components/head';
//底部-g
import Foot from './components/footer.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
//电影首页
import Movies from './components/movies';
//影讯&购票
import Ticket from './components/Ticket.js';
//选电影
import Filmselection from './components/Filmselection.js';
//头部-g
import MovieTop from './components/movie/movieTop.js';
//电视剧
import TVplay from './components/TVplay.js';
//排行榜
import RankingList from './components/rankingList.js';


class App extends Component {
  render() {
    return (
      <div className="App">
         
          <Router>
            <div>
              <Head />
              <MovieTop />
              <Route exact path="/" component={Movies} />
              <Route exact path="/Ticket" component={Ticket} />
              <Route exact path="/Filmselection" component={Filmselection} />
              <Route exact path="/TVplay" component={TVplay} />
              <Route exact path="/RankingList" component={RankingList} />
            </div>   
          </Router>
          <Foot />
      </div>
    );
  }
}

export default App;
