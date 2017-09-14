import React,{Component} from 'react';
import {data} from '../global/subdata';
import {store} from '../../App';
import Header from '../global/header';
import Right from '../global/right';
import Footer from '../global/footer';
const Data = data.explore.nav;



export default class Explore extends Component {

    constructor(){
        super();
        this.state={
            hotData:null,
            onOff:true,
        }
    }



    componentDidMount(){
        console.log(window.location.hash.split('&'))
        store.subscribe(()=>{
            const state = store.getState();
            const {hotData,comingData,popData} = state;
            if(hotData && comingData && popData){
                if(this.state.hotData)return;
                this.setState({
                    hotData:[...hotData,...comingData,...popData],
                })
            }
        })
    }







    navInit=()=>{
        const hash = window.location.hash.split('&')[0];
        const arr = hash.split('=');
        const h = decodeURI(arr[1]);
        const endStr = window.location.hash.split('&')[1].split('=')[1];
        return Data.map((e,i)=>{
            let name='';
            if(e===h){
                name = 'fl active'
            }else{
                name = 'fl';
            }
            return (
                
                <li
                    className={name}
                    key={'li'+i+Math.random()}
                    onClick={()=>{
                        const str = encodeURI(e);
                        window.location.hash = 'tag='+str+'&sort='+endStr;
                        if(!this.state.hotData)return;
                        const data = this.state.hotData.slice();
                        const data2 = data.sort(()=>Math.random - 0.5);
                        this.setState({
                            hotData:data2.reverse(),
                        })
                    }}
                >
                    {e}
                </li>
            )
        })
    }





    viewInit=()=>{
        let arr =[];
        const data = this.state.hotData;
        if(data){
            let data2;
            if(this.state.onOff){
                data2 = data.slice(0,24);
            }else{
                data2 = data;
            }
            return data2.map((e,i)=>{
                let l = '';
                if(i%4 === 3){
                    l = 0;
                }else{
                    l = '10px';
                }
                return (
                    <a
                        href="####"
                        className="fl"
                        style={{marginRight:l}}
                        key={'explore'+e.id+Math.random()}
                    >
                        <div>
                            <img 
                                src={e.images.large}
                                alt={e.alt}
                            />
                        </div>
                        <p>
                            {e.title}
                            <span>
                                {e.rating.average}
                            </span>
                        </p>
                    </a>
                );
            })
        }
        return arr;
    }





    subNavshow=()=>{
        const hash = window.location.hash.split('&')[1];
        if(!hash)return;
        const arr = hash.split('=');
        const h = decodeURI(arr[1]);
        const arr2 = [
            {
                hash:'recommend',
                val:'按热度排序'
            },
            {
                hash:'time',
                val:'按时间排序'
            },
            {
                hash:'rank',
                val:'按评价排序'
            }
        ];
        return arr2.map((e)=>{
            let name = '';
            let check = false;
            if(e.hash === h){
                name = 'fl active';
                check = true;
            }else{
                name = 'fl';
                check = false;
            }
            return (
                <label
                    key={e.hash}
                    className={name}
                >
                    <input 
                        type="radio" 
                        value={e.hash}
                        name="sort" 
                        defaultChecked={check}
                        onClick={()=>{
                            const hash = window.location.hash.split('&')[0];
                            const str = hash + '&sort=' + e.hash;
                            window.location.hash = str;
                            if(!this.state.hotData)return;
                            const data = this.state.hotData.slice();
                            const data2 = data.sort(()=>Math.random - 0.5);
                            this.setState({
                                hotData:data2.reverse(),
                            })
                        }}
                    />
                    {e.val}
                </label>
            );
        });
    }






    render(){
        return(
            <div
                className="explore"
            >
                <Header />
                <div 
                    className="default-width clearfix"
                >



                    <div className="fl index-left position-r">







                        <div
                            className="explore-left-nav-box"
                        >
                            <h2
                                className="explore-left-nav-h2"
                            >
                                选电影
                            </h2>
                            <ul
                                className="clearfix explore-left-nav"
                            >
                                {this.navInit()}
                            </ul>
                        </div>







                        <div
                            className="explore-left-cont-box clearfix"
                        >
                            <div
                                className="explore-left-cont-nav clearfix"
                                key='explore-left-cont-nav'
                            >
                                {this.subNavshow()}
                            </div>
                            <div
                                className="explore-left-cont clearix"
                                key='explore-left-cont'
                            >
                                {this.viewInit()}
                            </div>
                        </div>

                        {
                            this.state.onOff &&
                            <div
                                className="explore-addMore"
                                onClick={()=>{
                                    this.setState({
                                        onOff:false,
                                    })
                                }}
                            >
                                加载更多
                            </div>
                        }
                        





                    </div>


                    <Right />
                </div>
                <Footer />
            </div>
        );
    }
}