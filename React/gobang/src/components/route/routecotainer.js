import React,{Component} from 'react';
import fetchJsonp from 'fetch-jsonp';

export default class AppCotainer extends Component{
    state = {
        data: '123'
    }
    componentDidMount(){
    }
    render(){
        return(this.state.data);
    }
}