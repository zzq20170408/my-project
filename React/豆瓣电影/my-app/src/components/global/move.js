const Move=(init)=>{
    /*init:{
        el:elment， ||运动的元素
        time：duration，  ||  运动持续的时间
        target:{
            tar：target， || 运动的目标值
            attr:cssstyle  || 运动的属性
        }，
        callback:fn || 回调函数
    }*/
	//记录初始时间
	let oldTime = new Date();
    //目标初始值
    let start = getComputedStyle(init.el)[init.target.attr];
	start = parseInt(start);
    //目标元素运动目标值
    let end = init.target.tar;
    //需要运动的距离
    let l = end - start; 

    //定时器
    init.el.timer = null;
    let i=0;
	//运动的速度
    let speed = (l/init.time)*20;
    init.el.timer = setInterval(()=>{
		i++;
		let newTime = new Date();
		let t = newTime-oldTime;
        if(t>=init.time){
            i=l/speed;
        }
        init.el.style[init.target.attr] = (start+speed*i) + 'px';
        if(t>=init.time){
            clearInterval(init.el.timer);
            init.callback && init.callback();
        }
    },20)
}

export default Move;