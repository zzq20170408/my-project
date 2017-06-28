import React,{Component} from 'react';
import MovieRight from './movie/MovieRight.js';
import $ from 'jquery';


export default class TVplay extends Component{
    constructor(){
        super();
        this.state={
            data:[],
        }
    }
     componentDidMount(){
        const _this = this;
        $.ajax({
            url:'https://api.douban.com/v2/movie/top250',
            dataType:'jsonp',
            success:(data)=>{
                this.setState({
                    data:data.subjects,
                });
            }
        });
    }
    imgShow=(num)=>{
        let arr=[];
        if(this.state.data.length){
            const start = num*4;
            const end = (num+1)*4;
            const Data = this.state.data.slice(start,end)
            Data.forEach((e,i)=>{
                arr.push(
                    <a
                    className="average_box fl"
                    href={`https://movie.douban.com/subject/${e.id}/?from=showing`}
                    key={e.id}
                    >
                        <img 
                        className="showImg"
                        src={e.images.medium}
                        alt={e.alt}
                        key={e.id+'img'}
                        /><br/>
                        <span
                        className="title"
                        key={e.id+'span1'}
                        >
                            {
                                e.title
                            }
                        </span>
                        {
                            e.rating.average*1?
                            <span 
                                className="average"
                                key = {e.id+'span2'}
                            >
                                { e.rating.average}
                            </span>
                            :
                            <span></span>
                        }
                        
                    </a>
                );
            })
        }
        return arr;
    }
    render(){
        return(
            <div className="Filmselection">
                <div className="content">
                    <ul className="clearfix content_left fl">
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
                    <div className="fl clearfix content_right">
                        <MovieRight />
                    </div>
                </div>
            </div>
        );
    }
}