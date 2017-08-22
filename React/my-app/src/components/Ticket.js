import React,{Component} from 'react';
//右侧边内容
import MovieRight from './movie/MovieRight.js';
//左侧组件
import TicketLeft from './Ticket/TicketLeft.js';

export default class Ticket extends Component{
    render(){
        return(
            <div className="Ticket">
                <div className="clearfix content">
                    <div className="left_content fl">
                        <TicketLeft />
                    </div>
                    <div className="right_content fl">
                        <MovieRight />
                    </div>
                </div>
                <div className="footer_banner">
                    <a href="https://www.douban.com/note/621503914/">
                        <img 
                        src={require('../images/footer_banner.png')}
                        alt=""/>
                    </a>
                </div>
            </div>
        );
    }
}