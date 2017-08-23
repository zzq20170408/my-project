import React,{Component} from 'react';
import {store} from './header.js';



class R extends Component {
    constructor(){
        super();
        this.state = {
            val : 0,
        };
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                val:store.getState(),
            })
        })
    }
    render(){
        return(
            <div>
                {this.state.val}
            </div>
        );
    }
}
export default R;