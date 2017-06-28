import React,{Component} from 'react';
import $ from 'jquery';
import Move from '../move.js';



export default class TicketLeft extends Component{
    constructor(){
        super();
        this.state={
            data:[],
        }
    }
    componentDidMount(){
        const _this = this;
        $.ajax({
            url:'https://api.douban.com/v2/movie/in_theaters',
            dataType:'jsonp',
            success:(data)=>{
                this.setState({
                    data:data.subjects,
                });
            }
        });
    }
    imgShow=(num)=>{
        const conNum = 4;
        let start = num*conNum;
        const end = start + conNum -1;
        if(this.state.data.length){
            let arr=[];
            const starShow=(e)=>{
                const total = 5;
                let i,j,k,arr1=[];
                const data = e.rating.stars;
                const average = e.rating.average;
                if(data*1){
                    const full = Math.floor(data/10);
                    const half = Math.ceil(data/10)-Math.floor(data/10);
                    const empty = total-full-half;
                    for(i=0;i<full;i++){
                        arr1.push(
                            <img 
                            key={i}
                            src={require('../../images/full-star.png')}
                            alt=""
                            className="fl star" />
                        );
                    }
                    for(j=0;j<half;j++){
                        arr1.push(
                            <img 
                            key={i+j+1}
                            alt=""                            
                            src={require('../../images/half-star.png')} 
                            className="fl star" />
                        );
                    }
                    for(k=0;k<empty;k++){
                        arr1.push(
                            <img 
                            key={i+j+k+2}
                            alt="" 
                            src={require('../../images/empty-star.png')} 
                            className="fl star" />
                        );
                    }
                    arr1.push(
                            <span 
                            key={average}
                            className="fl average">
                                {average}
                            </span>
                    );
                    return arr1;
                }else{
                    arr1.push(
                        <span
                        key={average}
                        className="fl no_average">
                            暂无评分
                        </span>
                    );
                    return arr1;
                }
            }
            this.state.data.forEach((e,i)=>{
                if(i>=start && i<=end){
                    arr.push(
                        <dl 
                        className="fl"
                        key={e.id}>
                            <dt>
                                <a 
                                href={`https://movie.douban.com/subject/${e.id}/?from=showing`}>
                                    <img 
                                    src={e.images.large}
                                    alt="" />
                                    <br/>
                                    {(e.title.length>7)?e.title.substring(0,6)+'...':e.title}
                                </a>
                            </dt>
                            <dd 
                            className="star_row clearfix">
                                {starShow(e)}
                            </dd>
                            <dd 
                            className="clearfix slect_row">
                                <a
                                className="fl slect"
                                href={`https://movie.douban.com/subject/${e.id}/cinema/beijing/`}
                                >
                                    选座购票
                                </a>
                            </dd>
                        </dl>
                    )
                }
            });
            return arr; 
        }
    }
    render(){
        return(
            <ul className="TicketLeft">
                <li className="clearfix">
                    {this.imgShow(0)}
                </li>
                <li className="clearfix">
                    {this.imgShow(1)}
                </li>
                <li className="clearfix">
                    {this.imgShow(2)}
                </li>
                <li className="clearfix">
                    {this.imgShow(3)}
                </li>
                <li className="clearfix">
                    {this.imgShow(4)}
                </li>
            </ul>
        );
    }
}