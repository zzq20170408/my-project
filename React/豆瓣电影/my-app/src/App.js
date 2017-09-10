import React, { Component } from 'react';
import IndexPage from './components/diff/index-page.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import SubPage from './components/subpage/subpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={IndexPage}/>
            <Route  path="/*" component={SubPage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
