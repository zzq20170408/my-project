import React,{Component} from 'react';
import {store} from '../diff/index-page';




export default class SubPage extends Component{
    constructor(){
        super();
        this.state = {
            url:null
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            let {url} = store.getState();
            this.setState({
                url:url
            })
        })
    }
    render(){
        return (
            <div>
                 <iframe
                    src="https://movie.douban.com/subject/26634179/?from=showing"
                ></iframe> 
            </div>
        )
    }
}
