import React,{Component} from 'react';

export default class Right extends Component{
    state={
        location:'',
        val:'',
    }
    elSlect=null;
    elText = null;
    render(){
        return(
            <div className="Right fl">
                <h5>
                    豆瓣电影评分八问
                </h5>
                <div
                    className="search-film"
                >
                    <select
                        ref={(e)=>this.elSlect=e}
                    >
                        <option>北京</option>
                        <option>上海</option>
                        <option>广州</option>
                        <option>深圳</option>
                    </select>
                    <input 
                        type="text" 
                        ref={(e)=>this.elText=e}
                        placeholder="搜索本地影院"
                        onInput={
                            ()=>{
                                this.setState({
                                    location:this.elSlect.value,
                                    val:this.elText.value,
                                })
                            }
                        }
                    />
                    <a 
                    href={`https://movie.douban.com/cinema/search/108288/?q=${this.state.val}`}>
                        <img alt=""
                            src={require('../../images/right/search2.png')}
                        />
                    </a>
                </div>
                <div>
                    <a href="https://cn.student.com/?dmp=pmp&utm_source=youdao&utm_medium=cpc&utm_campaign=pc_douban&utm_content=pricematch_creative2_banner_300*250_dianyingshouye#entry">
                        <img
                            alt=""
                            src={require('../../images/right/banner2.png')}
                        />
                    </a>
                </div>
                <div className="film_activity">
                    <h6>
                        电影活动...
                    </h6>
                    <p>
                        <a 
                            rel="noopener"
                            href="https://www.douban.com/note/625731372/"
                        >
                            未来你会看到一个「变形金刚宇宙」
                        </a>
                    </p>
                    <p>
                        <a 
                            rel="noopener"
                            href="https://m.douban.com/page/53b57wz"
                        >
                            瓣嘴2丨郭京飞似磨人的小妖精，帅不过三秒
                        </a>
                    </p>
                    <p>
                        <a 
                            rel="noopener"
                            href="https://www.douban.com/note/621503914/"
                        >
                            专题丨异形在豆瓣是如何一步步走到今天的？
                        </a>
                    </p>
                </div>
                <ul className="kb_list_box">
                    <li>
                        <h5 className="kb_list clearfix">
                            <strong className="fl">
                                本周口碑榜
                            </strong>
                            <a 
                             className="fl"
                            href="https://movie.douban.com/chart">
                                更多榜单»
                            </a>
                        </h5>
                    </li>
                    <li className="clearfix li1">
                        <span className="fl">1</span>
                        <a 
                         className="fl"
                        href="https://movie.douban.com/subject/26798437/">
                            深夜食堂电影版2
                        </a>
                    </li>
                    <li className="clearfix li1">
                        <span className="fl">2</span>
                        <a
                        className="fl"
                        href="">
                            心之石
                        </a>
                    </li>
                    <li className="clearfix li1">
                        <span className="fl">3</span>
                        <a 
                         className="fl"
                        href="">
                            一夜到永远？
                        </a>
                    </li>
                    <li className="clearfix li1">
                        <span className="fl">4</span>
                        <a 
                         className="fl"
                        href="">
                            异形：契约
                        </a>
                    </li>
                    <li className="clearfix li1">
                        <span className="fl">5</span>
                        <a 
                         className="fl"
                        href="">
                            忠爱无言
                        </a>
                    </li>
                    <li className="clearfix li1">
                        <span className="fl">6</span>
                        <a 
                         className="fl"
                        href="">
                            天梯：蔡国强的艺术
                        </a>
                    </li>
                    <li className="clearfix li1">
                        <span className="fl">7</span>
                        <a 
                         className="fl"
                        href="">
                            重返·狼群
                        </a>
                    </li>
                    <li className="clearfix li1">
                        <span className="fl">8</span>
                        <a 
                         className="fl"
                        href="">
                            明日的我与昨日的你约会
                        </a>
                    </li>
                    <li className="clearfix li1">
                        <span className="fl">9</span>
                        <a 
                         className="fl"
                        href="">
                            宝拉
                        </a>
                    </li>
                    <li className="clearfix li1">
                        <span className="fl">10</span>
                        <a 
                         className="fl"
                        href="">
                            时间之旅
                        </a>
                    </li>
                </ul>
                <div>
                    <a href="https://www.airbnbchina.cn/?af=128945260&c=CBL17_maincampaignKV_banner_default&cblcity=default">
                        <img
                            alt=""
                            src={require('../../images/right/banner3.png')}
                        />
                    </a>
                </div>
                <div className="tongdui">
                    <a href="https://movie.douban.com/ticket/redeem/">
                        > 通兑券换票
                    </a>
                </div>
                <div className="doulie">
                    <h6>
                        热门豆列
                    </h6>
                    <div className="clearfix">
                        <p className="fl">
                            <a 
                            href="https://www.douban.com/doulist/13922/">
                                【豆瓣冷门佳片】评分人数﹤2000｜10-8.5分
                            </a>
                        </p>
                        <p className="fr">
                            <span>
                                3850推荐
                            </span>
                        </p>   
                    </div>
                    <div className="clearfix">
                        <p
                        className="fl"
                        >
                            <a 
                            href="https://www.douban.com/doulist/13922/">
                                【你连名字都那么牛逼】
                            </a>
                        </p>
                        <p className="fr">
                            <span>
                                6081推荐
                            </span>
                        </p> 
                    </div>
                </div>
                <div className="cooperation">
                    <h6>
                        合作联系
                    </h6>
                    <p>
                        <a href="https://movie.douban.com/cinema/movie_site/apply_form">
                            申请开通影片小站
                        </a>
                    </p>
                    <p>
                        <a href="https://movie.douban.com/cinema/apply">
                            申请开通电影院小站
                        </a>
                    </p>
                    <p>
                        <span>
                            通兑券咨询及购买：movie-bd@douban.com
                        </span>
                    </p>
                    <p>
                        <span>
                            电影合作邮箱：movie@douban.com
                        </span>
                    </p>
                    <p>
                        <span>
                            电视剧合作邮箱：tv@douban.com    
                        </span>
                    </p>   
                </div>
                <ul className="follow_us clearfix">
                    <li>
                        关注我们
                    </li>
                    <li className="fl">
                        <a href="http://weibo.com/login.php">
                            <img 
                            alt=""
                            src={require('../../images/right/follow_us1.png')}
                            />
                        </a>
                        <a href="http://weibo.com/login.php">
                            微博
                        </a>
                    </li>
                    <li className="fl">
                        <a href="####">
                            <img 
                            alt=""
                            src={require('../../images/right/follow_us2.png')}
                            />
                        </a>
                        <a href="####">
                            微信
                        </a>
                    </li>
                    <li className="fl">
                        <a href="https://site.douban.com/doubanfilmawards/">
                            <img 
                            alt=""
                            src={require('../../images/right/follow_us3.png')}
                            />
                        </a>
                        <a href="https://site.douban.com/doubanfilmawards/">
                            鑫像奖小站
                        </a>
                    </li>
                    <li className="fl">
                        <a href="https://site.douban.com/movieclub/">
                            <img 
                            alt=""
                            src={require('../../images/right/follow_us4.png')}
                            />
                        </a>
                        <a href="https://site.douban.com/movieclub/">
                            观影club
                        </a>
                    </li>
                </ul>
                <div className="dacu">
                    <a href="https://read.douban.com/event/June_2017?icn=douban-web-ad">
                        <img 
                        alt=""
                        src={require('../../images/right/banner4.png')}
                        />
                    </a>
                </div>
                <div className="download">
                    <a href="https://www.douban.com/doubanapp/frodo?channel=Db_Homepage_Bar&direct_dl=1&referer=https%3A%2F%2Fmovie.douban.com%2F&wechat=0&os=Windows">
                        <img 
                        src={require('../../images/right/download.png')} 
                        alt=""/>
                    </a>
                </div>




            </div>
        );
    }
}