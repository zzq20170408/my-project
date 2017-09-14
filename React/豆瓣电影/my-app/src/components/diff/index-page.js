import React,{Component} from 'react';




import Header from '../global/header.js';
import Footer from '../global/footer.js';
import Right from '../global/right.js';
import IndexLeftTop from './index-left-top.js';
import IndexLeftPop from './index-left-pop.js';
import IndexLeftVideo from './index-left-video';
import HotRecommendation from './recommendation';
import FilmCritic from './FilmCritic';
import FootBanner from '../global/foot-banner';





class IndexPage extends Component {
    render(){
        return(
            <div>
                <Header />
                <div className="default-width clearfix">
                    <div className="fl index-left">
                        <IndexLeftTop />
                        <IndexLeftPop />
                        <IndexLeftVideo />
                        <HotRecommendation />
                        <FilmCritic />
                    </div>
                    <Right />
                </div>
                <FootBanner />
                <Footer />
            </div>
        );
    }
}



export default IndexPage;
