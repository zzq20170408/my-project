import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {store} from './index-page.js';









export default class IndexLeftPop extends Component {
    constructor(){
        super();
        this.state={
            more:'热门',
            hotData:null,
            orderData:null,
        };
    }
    timer = null;
    activeOnOff = true;
    navDom = [];
    navcont = '热门';
















    // 声明周期函数    获取数据
    componentDidMount(){
        if(this.timer){
            clearInterval(this.timer)
        };
        store.subscribe(()=>{
            let state = store.getState();
            let hotData = state.hotData;
            let popData = state.popData;
            if(hotData && popData){
                if(this.state.hotData)return;
                console.log([...hotData,...popData])
                this.setState({
                    hotData:[...hotData,...popData],
                    orderData:[...hotData,...popData],
                })
            }
        });
    }














    // 导航按钮事件管理
    navMethods = (model) => {
        if(model === 'enter'){
            return this.navMouseEnter = (ev)=>{
                const e = ev.target;
                if(this.activeOnOff){
                    this.navDom[0].onOff = true;
                }
                if(!e.onOff){
                    e.className = "fl mouseEnter"
                }
            }
        }else 
        if(model === 'leave'){
            return this.navMouseLeave=(ev)=>{
                const e = ev.target;
                if(!e.onOff){
                    e.className = "fl"
                }
            }
        }else 
        if(model === 'click'){
            return this.navClick=(ev)=>{
                    const e = ev.target;
                    const data = this.state.hotData.sort((e)=>{
                        return Math.random - 0.5;
                    });
                    const Data = data.slice();
                    this.navDom.length = 8;
                    this.navDom.map((el)=>{
                        return(
                            el.className = 'fl',
                            el.onOff = false
                        )
                        
                    });
                    e.onOff = true;
                    e.className = 'fl active';
                    this.navcont = e.innerText;
                    this.activeOnOff = false;
                    if(e.innerText === '热门'){
                        this.setState({
                            hotData:this.state.orderData.slice()
                        })
                    }else{
                        this.setState({
                            hotData:Data.reverse()
                        })
                    }
                    
                }
        }   
    };










    // 视图渲染函数
    show = () =>{
        const Data = this.state.hotData;
        if(!Data)return;
        const num = Math.round(Data.length/8)+2;
        let arr = [];
        if(Data){
            let start,end;
            for(let i=0;i<num;i++){
                if(i){
                    if(i<num-1){
                        start = (i-1)*8;
                        end = i*8;
                    }else{
                        start = 0;
                        end = 8;
                    }
                }else{
                    start = (num-3)*8;
                    end = (num-2)*8;
                }
                let data = Data.slice(start,end);
                arr.push(
                    <li
                        className="fl"
                        key={'li'+i}
                    >
                    {
                        data.map((e,m)=>{
                            let name = null;
                            if(m%4 != 3){
                                name = 'marginRight'
                            }
                            return(
                                    <a
                                        className={'fl '+name}
                                        key = {'li'+(i+m)+'a'+m}
                                        href = {'https://movie.douban.com/subject/'+e.id+'/?tag='+this.navcont+'&from=gaia'}
                                        target="_blank"
                                        rel=" noopener noreferrer"
                                    >
                                        <div>
                                            <img
                                                src={e.images.large}
                                                alt={e.alt}
                                            />
                                        </div>
                                        <p>
                                            <strong>
                                                {e.title.length<10?e.title:e.title.substring(0,9)}
                                            </strong>
                                            <span>
                                                {e.rating.average*1?e.rating.average:null}
                                            </span>
                                        </p>
                                    </a>
                            )
                        }) 
                    }
                    </li>
                    
                )
            }
        }
        return(
            <ul className="clearfix index-left-pop-show">
                {arr}
            </ul>
        );
    };
















    


































    
    render(){
        return (
            <div className="index-left-pop position-r">
                <h2 className="index-left-pop-h2 clearfix">
                    <strong className="fl">
                        最近热门电影
                    </strong>
                    <span 
                        ref={(el)=>{
                                if(this.navDom.length<9){
                                    this.navDom.push(el);
                                };
                            }
                        }
                        onClick={(ev)=>{
                            this.navMethods('click')(ev);
                        }}
                        onMouseEnter={(ev)=>{
                            this.navMethods('enter')(ev);
                        }}
                        onMouseLeave={(ev)=>{
                            this.navMethods('leave')(ev);
                        }}
                        className="fl active"
                    >
                        热门
                    </span>
                    <span 
                        ref={(el)=>{
                                if(this.navDom.length<9){
                                    this.navDom.push(el);
                                };
                            }
                        }
                        onClick={(ev)=>{
                            this.navMethods('click')(ev);
                        }}
                        onMouseEnter={(ev)=>{
                            this.navMethods('enter')(ev);
                        }}
                        onMouseLeave={(ev)=>{
                            this.navMethods('leave')(ev);
                        }}
                        className="fl"
                    >
                        最新
                    </span>
                    <span 
                        ref={(el)=>{
                                if(this.navDom.length<9){
                                    this.navDom.push(el);
                                };
                            }
                        }
                        onClick={(ev)=>{
                            this.navMethods('click')(ev);
                        }}
                        onMouseEnter={(ev)=>{
                            this.navMethods('enter')(ev);
                        }}
                        onMouseLeave={(ev)=>{
                            this.navMethods('leave')(ev);
                        }}
                        className="fl"
                    >
                        豆瓣高分
                    </span>
                    <span 
                        ref={(el)=>{
                                if(this.navDom.length<9){
                                    this.navDom.push(el);
                                };
                            }
                        }
                        onClick={(ev)=>{
                            this.navMethods('click')(ev);
                        }}
                        onMouseEnter={(ev)=>{
                            this.navMethods('enter')(ev);
                        }}
                        onMouseLeave={(ev)=>{
                            this.navMethods('leave')(ev);
                        }}
                        className="fl"
                    >
                        冷门佳片
                    </span>
                    <span 
                        ref={(el)=>{
                                if(this.navDom.length<9){
                                    this.navDom.push(el);
                                };
                            }
                        }
                        onClick={(ev)=>{
                            this.navMethods('click')(ev);
                        }}
                        onMouseEnter={(ev)=>{
                            this.navMethods('enter')(ev);
                        }}
                        onMouseLeave={(ev)=>{
                            this.navMethods('leave')(ev);
                        }}
                        className="fl"
                    >
                        华语
                    </span>
                    <span 
                        ref={(el)=>{
                                if(this.navDom.length<9){
                                    this.navDom.push(el);
                                };
                            }
                        }
                        onClick={(ev)=>{
                            this.navMethods('click')(ev);
                        }}
                        onMouseEnter={(ev)=>{
                            this.navMethods('enter')(ev);
                        }}
                        onMouseLeave={(ev)=>{
                            this.navMethods('leave')(ev);
                        }}
                        className="fl"
                    >
                        欧美
                    </span>
                    <span 
                        ref={(el)=>{
                                if(this.navDom.length<9){
                                    this.navDom.push(el);
                                };
                            }
                        }
                        onClick={(ev)=>{
                            this.navMethods('click')(ev);
                        }}
                        onMouseEnter={(ev)=>{
                            this.navMethods('enter')(ev);
                        }}
                        onMouseLeave={(ev)=>{
                            this.navMethods('leave')(ev);
                        }}
                        className="fl"
                    >
                        韩国
                    </span>
                    <span 
                        ref={(el)=>{
                                if(this.navDom.length<9){
                                    this.navDom.push(el);
                                };
                            }
                        }
                        onClick={(ev)=>{
                            this.navMethods('click')(ev);
                        }}
                        onMouseEnter={(ev)=>{
                            this.navMethods('enter')(ev);
                        }}
                        onMouseLeave={(ev)=>{
                            this.navMethods('leave')(ev);
                        }}
                        className="fl"
                    >
                        日本
                    </span>
                    <Link 
                    to=""
                    className="fr">
                        更多»
                    </Link>
                </h2>
                <div className="index-left-pop-show-box">
                    {this.show()}
                </div>
                <div
                    className="position-a"
                ></div>
            </div>

        );
    }
}