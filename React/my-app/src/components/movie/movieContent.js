import React,{Component} from 'react';
//正在热映
import HotFilm from './hot_film.js';
//最近热门电影
import PopFilm from './pop_film.js';
//热门推荐
import HotRecommendation from './recommendation.js';
//影评
import FilmCritic from './FilmCritic.js';

//右侧边内容
import MovieRight from './MovieRight.js';




export default class MovieContent extends Component{
    render(){
        return(
            <div className="content">
                <div className="clearfix">
                    <div className="left_content fl">
                        <HotFilm />
                        <PopFilm />
                        <HotRecommendation />
                        <FilmCritic />
                    </div>
                    <div className="right_content fl">
                        <MovieRight />
                    </div>
                </div>
                <div className="footer_banner">
                    <a href="https://www.douban.com/note/621503914/">
                        <img 
                        src={require('../../images/footer_banner.png')}
                        alt=""/>
                    </a>
                </div>
            </div>
        );
    }
}