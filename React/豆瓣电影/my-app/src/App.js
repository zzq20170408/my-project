import React, { Component } from 'react';
import IndexPage from './components/diff/index-page.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import BuyTickets from './components/subpage/buy-tickets';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={IndexPage}/>
            <Route  path="/cinema" component={BuyTickets}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
