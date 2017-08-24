import React, { Component } from 'react';
import IndexPage from './components/diff/index-page.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={IndexPage}/>
          </div>
         
        </Router>
      </div>
    );
  }
}

export default App;
