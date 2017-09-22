import React,{Component} from 'react';
import {data} from '../global/subdata';
import Header from '../global/header';
import Right from '../global/right';
import Footer from '../global/footer';
import FootBanner from '../global/foot-banner';
const Data = data.review;






export default class Review extends Component{

    state = {
        data:Data.slice(),
    }
    navDom1 = null;
    navDom2 = null;

    



    viewInit=()=>{
        return this.state.data.map((e)=>{
            return (
                <li className="clearfix">
                    <div 
                        className="fl"
                        style={{marginRight:'20px'}}
                    >
                        <a
                            href={'https://movie.douban.com/subject/'+e.id+'/'}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img　
                                alt=""
                                src={e.src}
                            />
                        </a>
                    </div>
                    <div className="fl">
                        <p className="clearfix">
                            <a
                                className="fl"
                                href={'https://movie.douban.com/review/'+e.opationId+'/'}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {e.title}
                            </a>
                            <span className="fr"></span>
                        </p>
                    </div>
                </li>
            );
        })
    }








    render(){
        return(
            <div
                className="review"
            >
                <Header />
                <div 
                    className="default-width clearfix"
                >



                    <div className="fl index-left">
                        <h2 className="review-h2">豆瓣最受欢迎的影评</h2>
                        <div className="review-nav">
                            <span 
                                className="active"
                                ref={(el)=>this.navDom1=el}
                                onClick={(ev)=>{
                                    if(!this.navDom1 && !this.navDom2)return;
                                        this.navDom2.className = '';
                                        ev.target.className = 'active';
                                        this.setState({
                                            data:Data.slice(),
                                        })
                                }}
                            >
                                最受欢迎的 
                            </span>
                            /
                            <span 
                                ref={(el)=>this.navDom2=el}
                                onClick={(ev)=>{
                                    if(!this.navDom1 && !this.navDom2)return;
                                        this.navDom1.className = '';
                                        ev.target.className = 'active';
                                        this.navPrevDom = ev.target;
                                        this.setState({
                                            data:Data.slice().reverse(),
                                        })
                                }}
                            > 
                                新片评论
                            </span>
                        </div>
                        <ul
                            className="review-content"
                        >
                                {this.viewInit()}
                        </ul>
                    </div>
                    <Right />
                </div>
                <FootBanner />
                <Footer />
            </div>
        );
    }
}