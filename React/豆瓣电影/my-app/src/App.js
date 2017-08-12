import React, { Component } from 'react';
import Header from './components/global/header.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Header}/>
        </Router>
      </div>
    );
  }
}

export default App;
