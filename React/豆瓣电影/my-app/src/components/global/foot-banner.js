import React,{Component} from 'react';


export default class FootBanner extends Component{
    render(){
        return(
            <div className="foot-banner default-width">
                <a 
                    href="https://www.douban.com/note/635615217/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img 
                    alt=""
                    src={require('../../images/left/banner.png')}
                    />
                </a>
            </div>
        )
    }
}