import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {store} from '../../App';
import Move from '../global/move';









export default class IndexLeftPop extends Component {
    constructor(){
        super();
        this.state={
            more:'热门',
            hotData:null,
            orderData:null,
            optionData:null,
        };
    }
    // 轮播图定时器
    timer = null;
    // 详情框出现延迟定时器
    optionTimer = null;
    // 详情框移除消失延迟定时器
    leaveTimer = null;
    //判断导航是否被点过
    activeOnOff = true;
    // 导航的dom
    navDom = [];
    // 点击图片跳转时的href参数
    navcont = '热门';
    // 轮播图box的dom
    viewDom = null;
    // 详情框的dom
    optionDom = null;
    // btnSpan  dom
    btnSpan = [];
    //  orderIndex
    orderIndex = 0;
    // 限定点击事件的开关
    onOff = false;
    //自动轮播定时器
    autoTimer = null;


// 自动轮播函数
autoPlay = ()=>{
    if(!this.btnSpan.length)return;
    this.autoTimer = setInterval(()=>{
        this.btnSpan.length = 5;
        this.orderIndex++;
        if(this.orderIndex<5){
            if(!this.viewDom)return;
            Move({
                el:this.viewDom,
                time:600,
                target:{
                    tar:-(this.orderIndex+1)*593,
                    attr:'marginLeft'
                },
                callback:()=>{
                    this.btnSpan.map((e)=>{
                        return e.className = 'fl';
                    })
                    this.btnSpan[this.orderIndex].className = 'fl active';
                }
            });
        }else{
            Move({
                el:this.viewDom,
                time:600,
                target:{
                    tar:-(this.orderIndex+1)*593,
                    attr:'marginLeft'
                },
                callback:()=>{
                    this.viewDom.style.marginLeft = '-593px';
                    this.btnSpan.map((e)=>{
                        return e.className = 'fl';
                    })
                    this.orderIndex = 0;
                    this.btnSpan[this.orderIndex].className = 'fl active';
                    
                }
            });
        }
    },60000)
}













    // 声明周期函数    获取数据
    componentDidMount(){
        // 清除定时器
        if(this.timer){
            clearInterval(this.timer)
        };
        clearInterval(this.optionTimer)
        // redux  获取数据
        store.subscribe(()=>{
            const state = store.getState();
            const hotData = state.hotData;
            const popData = state.popData;
            if(hotData && popData){
                if(this.state.hotData)return;
                this.setState({
                    hotData:[...hotData,...popData],
                    orderData:[...hotData,...popData],
                })
            }
        });
        if(this.viewDom){
            clearInterval(this.autoTimer);
            this.autoPlay();  
        }
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
                            if(m%4 !== 3){
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
                                                onMouseEnter={()=>{
                                                    clearTimeout(this.optionTimer);
                                                    clearInterval(this.autoTimer);
                                                    const l = (m%4+1)*151+'px';
                                                    const t = m/4<1?'69px':'328px';
                                                    this.optionTimer = setTimeout(()=>{
                                                        this.setState({
                                                            optionData:Object.assign({},e)
                                                        })
                                                        this.optionDom.style.left = l;
                                                        this.optionDom.style.top = t;
                                                        this.optionDom.style.display = 'block';   
                                                    },1000)
                                                }}
                                                onMouseLeave={()=>{
                                                    clearTimeout(this.leaveTimer);
                                                    clearTimeout(this.optionTimer);
                                                    this.autoPlay();  
                                                    this.leaveTimer = setTimeout(()=>{
                                                        this.optionDom.style.display = 'none';
                                                    },30)
                                                }}
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
            <ul 
                ref={(e)=>this.viewDom = e}
                className="clearfix index-left-pop-show"
            >
                {arr}
            </ul>
        );
    };























    // 星级评分渲染函数
    starShow=(data)=>{
        let Data = data.rating;
        const total = 5;
        let full,half,empty;
        let arr = [];
        if(Data.average*1){
            full = Math.floor(Data.stars/10);
            half = Math.ceil(Data.stars/10) - full;
            empty = total - full - half;
            for(let i = 0;i<full;i++){
                arr.push(
                    <img 
                    className="fl"
                    key={'full'+i}
                    alt=""
                    src={require('../../images/left/full-star.png')} />
                ); 
            }
            if(half){
                for(let i = 0;i<half;i++){
                    arr.push(
                        <img 
                        className="fl"
                        key={'half'+i}
                        alt=""
                        src={require('../../images/left/half-star.png')} />
                    ); 
                }
            }
            if(empty){
                for(let i = 0;i<empty;i++){
                    arr.push(
                        <img 
                        className="fl"
                        key={'empty'+i}
                        alt=""
                        src={require('../../images/left/empty-star.png')} />
                    ); 
                } 
            }
            arr.push(
                <span 
                key={'span'}
                className="fl">
                    {Data.average}
                </span>
            )
            return arr;
        }else{
            return(
              '暂无评分'  
            );
        }
        
    }















    // 详情提示框
    option=(data)=>{
        if(data){
            let arr = [];
            arr.push()
            return(
                <div
                    key={data.id}
                >
                    <h3
                        key={data.id+'h3'}
                    >
                        {data.title+'('+data.year+')'}
                    </h3>
                    <p
                        key={'p1'}
                        className="clearfix"
                    >
                        {this.starShow(data)}
                    </p>
                    <p
                        key={'p2'}
                        className="clearfix"
                    >
                        {
                            data.genres.map((e,i)=>{
                                return (
                                    <span
                                        className="fl"
                                        key={'span1'+i}
                                    >
                                        {e}
                                    </span>)
                            })
                        }
                        {
                            data.casts.map((e,i)=>{
                                return (
                                    <span
                                        className="fl"
                                        key={'span2'+i}
                                    >
                                        {e.name}
                                    </span>)
                            })
                        }
                    </p>
                </div> 
            )
        }else{
            return null;
        }
    }







    







    // 选择按钮点击函数
    btnClick = (index)=>{
        if(!this.viewDom)return;
        clearInterval(this.autoTimer);
        this.btnSpan.length = 5;
        this.orderIndex = index;
        Move({
            el:this.viewDom,
            time:600,
            target:{
                tar:-(index+1)*593,
                attr:'marginLeft'
            },
            callback:()=>{
                this.btnSpan.map((e)=>{
                    return e.className = 'fl';
                })
                this.btnSpan[index].className = 'fl active';
                this.autoPlay();
            }
        });
    }




























    
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
                    to={'/explore#!type=movie&tag='+this.navcont}
                    className="fr">
                        更多»
                    </Link>
                </h2>
                <div className="index-left-pop-show-box">
                    {this.show()}
                </div>
                <div
                    className="position-a index-left-pop-option"
                    ref = {(e)=>this.optionDom = e}
                    onMouseEnter={()=>{
                        clearTimeout(this.leaveTimer);
                        clearInterval(this.autoTimer);
                        this.optionDom.style.display = 'block';
                    }}
                    onMouseLeave={()=>{
                        this.optionDom.style.display = 'none';
                        this.autoPlay();  
                    }}
                >
                    {this.state.optionData?this.option(this.state.optionData):null}
                </div>
                
                <div
                    className="index-left-pop-btn clearfix"
                >
                    <strong 
                        onClick={()=>{
                            if(this.onOff)return;
                            clearInterval(this.autoTimer);
                            this.onOff = true;
                            this.btnSpan.length = 5;
                            if(this.orderIndex){
                                this.orderIndex--;
                                Move({
                                    el:this.viewDom,
                                    time:600,
                                    target:{
                                        tar:-(this.orderIndex+1)*593,
                                        attr:'marginLeft'
                                    },
                                    callback:()=>{
                                        this.btnSpan.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        this.btnSpan[this.orderIndex].className = 'fl active';
                                        this.onOff = false;
                                        this.autoPlay();  
                                    }
                                });
                            }else{
                                Move({
                                    el:this.viewDom,
                                    time:600,
                                    target:{
                                        tar:0,
                                        attr:'marginLeft'
                                    },
                                    callback:()=>{
                                        this.orderIndex = 4;
                                        this.viewDom.style.marginLeft = -(this.orderIndex+1)*593+'px';
                                        this.btnSpan.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        this.btnSpan[this.orderIndex].className = 'fl active';
                                        this.onOff = false;
                                        this.autoPlay();  
                                    }
                                });
                            }
                        }}
                        className="fl prev"
                    ></strong>
                    <span 
                        ref={(el)=>{
                            if(this.btnSpan.length<6){
                                this.btnSpan.push(el);
                            }
                        }}
                        onClick={()=>this.btnClick(0)}
                        className="fl active"
                    >
                    </span>
                    <span 
                        ref={(el)=>{
                            if(this.btnSpan.length<6){
                                this.btnSpan.push(el);
                            }
                        }}
                        onClick={()=>this.btnClick(1)}
                        className="fl"
                    >
                    </span>
                    <span 
                        ref={(el)=>{
                            if(this.btnSpan.length<6){
                                this.btnSpan.push(el);
                            }
                        }}
                        onClick={()=>this.btnClick(2)}
                        className="fl"
                    >
                    </span>
                    <span 
                        ref={(el)=>{
                            if(this.btnSpan.length<6){
                                this.btnSpan.push(el);
                            }
                        }}
                        onClick={()=>this.btnClick(3)}
                        className="fl"
                    >
                    </span>
                    <span 
                        ref={(el)=>{
                            if(this.btnSpan.length<6){
                                this.btnSpan.push(el);
                            }
                        }}
                        onClick={()=>this.btnClick(4)}
                        className="fl"
                    >
                    </span>
                    <strong 
                        onClick={()=>{
                            if(this.onOff)return;
                            clearInterval(this.autoTimer);
                            this.onOff = true;
                            this.btnSpan.length = 5;
                            if(this.orderIndex<4){
                                this.orderIndex++;
                                console.log(this.orderIndex)
                                Move({
                                    el:this.viewDom,
                                    time:600,
                                    target:{
                                        tar:-(this.orderIndex+1)*593,
                                        attr:'marginLeft'
                                    },
                                    callback:()=>{
                                        this.btnSpan.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        this.btnSpan[this.orderIndex].className = 'fl active';
                                        this.onOff = false;
                                        this.autoPlay();  
                                    }
                                });
                            }else{
                                this.orderIndex = 5;
                                Move({
                                    el:this.viewDom,
                                    time:600,
                                    target:{
                                        tar:-(this.orderIndex+1)*593,
                                        attr:'marginLeft'
                                    },
                                    callback:()=>{
                                        this.orderIndex = 0;
                                        this.viewDom.style.marginLeft = -(this.orderIndex+1)*593+'px';
                                        this.btnSpan.map((e)=>{
                                            return e.className = 'fl';
                                        })
                                        this.btnSpan[this.orderIndex].className = 'fl active';
                                        this.onOff = false;
                                        this.autoPlay();  
                                    }
                                });
                            }
                        }}
                        className="fl next"
                    ></strong>
                </div>
            </div>

        );
    }
}