import React,{Component} from 'react';
import {createStore} from 'redux';



import Header from '../global/header.js';
import Footer from '../global/footer.js';
import Right from '../global/right.js';


export let counter = (state=0,action) =>{
    let {type} = action;
    switch(type){
        case 'CONT':
            return ++state;
        default:
            return state;
    }
}

export let store = createStore(counter);
export let state = 0;
store.subscribe(()=>{
    state = store.getState();
    console.log(state)
})


class IndexPage extends Component {
    render(){
        return(
            <div>
                <Header />
                <div className="default-width clearfix">
                    <div className="fl"></div>
                    <Right />
                </div>
                <Footer />
            </div>
        );
    }
}



export default IndexPage;
