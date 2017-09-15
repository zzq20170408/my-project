import React,{Component} from 'react';
import {data} from '../global/subdata';
import Header from '../global/header';
import Right from '../global/right';
import Footer from '../global/footer';
import FootBanner from '../global/foot-banner';







let Data = data.chart;




export default class Chart extends Component {



    starShow=(data)=>{
        const total = 5;
        const {average,star,pl} = data;
        const full = Math.floor(star/10);
        const half = Math.ceil(star/10)-full;
        const empty = total -full -half;
        let arr = [];
        for(let i=0;i<full;i++){
            arr.push(
                <img 
                    className="fl star"
                    key={'full'+i}
                    alt=""
                    src={require('../../images/left/full-star.png')}
                />
            );
        }
        if(half){
            for(let i=0;i<half;i++){
                arr.push(
                    <img 
                        className="fl star"
                        key={'half'+i}
                        alt=""
                        src={require('../../images/left/half-star.png')}
                    />
                );
            }
        }
        if(empty){
            for(let i=0;i<empty;i++){
                arr.push(
                    <img 
                        className="fl star"
                        key={'empty'+i}
                        alt=""
                        src={require('../../images/left/empty-star.png')}
                    />
                );
            }
        }
        arr.push(
            <p
                className="chart-left-r-p2 clearfix"
            >
                <span
                    className="fl star"
                    key='span1'
                    style={{marginLeft:'5px'}}
                >
                    {average}分
                </span>
                <span
                className="fl star"
                key='span2'
                style={{marginLeft:'5px'}}
            >
                {'('+pl+'人评论)'}
            </span>
            </p>
        );
        return arr;
    }


    viewInit=()=>{
        return Data.map((e,i)=>{
            return (
                <li 
                    className="clearfix"
                    key={e.id+Math.random()}
                >
                    <div 
                        className="fl chart-left-l"
                        key={e.id+'div-l'}
                    >
                        <a href="####">
                            <img 
                                alt=""
                                src={e.images}
                            />
                        </a>
                    </div>
                    <div 
                        className="fl chart-left-r"
                        key={e.id+'div-r'}
                    >
                        <h6
                            className="chart-left-r-h6"
                        >
                            <a href="####">{e.title}</a>
                        </h6>
                        <p
                            className="chart-left-r-p1"
                        >
                            {e.opation}
                        </p>
                        
                            {this.starShow(e)}
                        
                    </div>
                </li>
            )
        })
    }

    render(){
        return (
            <div
                className="chart"
            >
                <Header />
                <div 
                    className="default-width clearfix"
                >



                    <div className="fl index-left position-r">
                        <h2
                            className="chart-h2"
                        >
                            豆瓣电影排行榜
                        </h2>
                        <h6
                            className="chart-h6"
                        >
                            豆瓣新片榜 · · · · · ·
                        </h6>
                        <ul
                            className="chart-left-cont"
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