import React,{Component} from 'react';
import {data} from '../global/subdata';
import Header from '../global/header';
import Right from '../global/right';
import Footer from '../global/footer';
import FootBanner from '../global/foot-banner';
const Data = data.review;






export default class Review extends Component{
    opationDom1 = [];
    opationDom2 = [];

    



    viewInit=()=>{
        return Data.map((e,i)=>{
            return (
                <li 
                    className="clearfix"
                    key={e.id+Math.random()}
                >
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
                    <div className="fl review-opation">
                        <p className="clearfix">
                            <a
                                className="fl review-opation-header"
                                href={'https://movie.douban.com/review/'+e.opationId+'/'}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {e.title}
                            </a>
                            <span 
                                className="fr review-opation-btn"
                                onClick={()=>{
                                    if(this.opationDom1.length && this.opationDom2.length){
                                        this.opationDom1.length = 10;
                                        this.opationDom2.length = 10;
                                        this.opationDom1[i].classList.toggle('active');
                                        this.opationDom2[i].classList.toggle('active');
                                    }
                                }}
                            ></span>
                        </p>
                        <div 
                            className="active"
                            ref={(el)=>this.opationDom1.push(el)}
                        >
                            {e.opation.length<150?e.opation:(e.opation.substring(0,150)+'...')}
                        </div>
                        <div 
                            className=""
                            ref={(el)=>this.opationDom2.push(el)}
                        >
                            {e.opation}
                        </div>
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
                    
                        <ul
                            className="review-content"
                        >
                                {this.viewInit()}
                        </ul>
                        <div>
                            <a
                                href="https://movie.douban.com/review/best/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="review-add-more">更多影评请到豆瓣查看</div>
                            </a>
                        </div>
                    </div>
                    <Right />
                </div>
                <FootBanner />
                <Footer />
            </div>
        );
    }
}