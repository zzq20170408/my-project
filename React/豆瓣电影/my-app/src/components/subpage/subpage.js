import React,{Component} from 'react';
import {store} from '../diff/index-page';
import Header from '../global/header';




export default class SubPage extends Component{
    constructor(){
        super();
        this.state = {
            url:null,
        }
    }
    componentDidMount(){
        let str = window.location.href;
        let arr = str.split('/').slice(3);
        console.log(arr)
        str = 'https://movie.douban.com/'+arr.join('/');
        this.setState({
            url:str,
        })
    }
    componentShouldUpdata(){
        return true;
    }
    render(){
        return (
            <div className="subpage">
                <iframe src={this.state.url}> </iframe>
            </div>
        )
    }
}
