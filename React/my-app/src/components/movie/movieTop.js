import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class MovieTop extends Component{
    state={
        val:''
    }
    el=null;
     render(){
        return(
            <div className="movie_top">
                <div className="search">
                    <div className="search_child  .clearfix">
                        <h2 className="fl">
                            豆瓣电影
                        </h2>
                        <div className="fl">
                            <input 
                                type="text" 
                                placeholder="电影、影人、影院、电视剧"
                                ref={(e)=>this.el=e}
                                onInput={()=>{
                                    this.setState({
                                        val:this.el.value,
                                    })
                                }}
                            />
                            <a 
                            href={`https://movie.douban.com/subject_search?search_text=${this.state.val}`}></a>
                        </div>
                    </div>
                </div>
                <div className="leader">
                    <ul className="clearfix">
                        <li className="fl">
                            <span>
                                <Link to="/Ticket">影讯&购票</Link>
                            </span>
                        </li>
                        <li className="fl">
                            <span>
                                <Link to="/Filmselection">选电影</Link>
                            </span>
                        </li>
                        <li className="fl">
                            <span>
                                <Link to="/TVplay">电视剧</Link>
                            </span>
                        </li>
                        <li className="fl">
                            <span>
                                <Link to="/RankingList">排行榜</Link>
                            </span>
                        </li>
                        <li className="fl">
                            <a href="https://movie.douban.com/tag/">
                                分类
                            </a>
                        </li>
                        <li className="fl">
                            <a href="https://movie.douban.com/review/best/">
                                影评
                            </a>
                        </li>
                        <li className="fl">
                            <a href="https://movie.douban.com/annual2016/?source=navigation">
                                2016年度榜单
                            </a>
                        </li>
                        <li className="fl">
                            <a href="https://movie.douban.com/standbyme/2016/share">
                                2016观影报告
                            </a>
                        </li>
                    </ul>
                </div>
            </div>    
        );
    }
}