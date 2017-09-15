import React,{Component} from 'react';
import {data} from '../global/subdata';
import Header from '../global/header';
import Right from '../global/right';
import Footer from '../global/footer';
import FootBanner from '../global/foot-banner';







let Data = data.chart;




export default class Chart extends Component {

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
                    </div>


                    <Right />
                </div>
                <FootBanner />
                <Footer />
            </div>
        );
    }

}