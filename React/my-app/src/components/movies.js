import React,{Component} from 'react';
import MovieTop from './movie/movieTop.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import MovieContent from './movie/movieContent.js';
import '../css/movie.css';


export default class Movies extends Component{
   render(){
       return(
            <MovieContent />
       );
   }
} 
