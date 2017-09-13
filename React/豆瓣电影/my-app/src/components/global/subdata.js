let buyTicketsHotStr = '北京 上海 广州 深圳 成都 武汉 杭州 重庆 郑州 南京 西安 苏州 天津 长沙 福州 济南 沈阳 合肥 青岛 温州 哈尔滨 厦门 大连 东莞 长春';
let buyTicketsAStr = '安庆 安阳 鞍山 安顺 安康 阿勒泰 阿克苏 阿坝'; 
let buyTicketsBStr = '北京 保定 宝鸡 滨州 包头 蚌埠 亳州 毕节 北海 巴彦淖尔 白银 保山 百色 本溪 巴音郭楞 白山 白城 巴中 保亭';
let buyTicketsCStr = '重庆 成都 长沙 长春 常州 郴州 常德 滁州 沧州 长治 赤峰 承德 朝阳 潮州 昌吉 池州 崇左 楚雄 常熟 澄迈 昌江';
let buyTicketsDStr = '东莞 大连 大庆 东营 德阳 德州 大同 大理 丹东 达州 德宏 定西 儋州 东方 大兴安岭 迪庆';
let buyTicketsEStr = '恩施 鄂尔多斯 鄂州';
let buyTicketsFStr = '佛山 福州 抚州 阜阳 抚顺 防城港 阜新';
let buyTicketsGStr = '广州 赣州 贵阳 桂林 广元 广安 固原 甘南 贵港 甘孜';
let buyTicketsHStr = '杭州 合肥 哈尔滨 惠州 邯郸 湖州 海口 淮安 呼和浩特 衡阳 黄冈 河源 菏泽 呼伦贝尔 黄石 淮南 黄山 红河 衡水 怀化 葫芦岛 汉中 黑河 淮北 鹤壁 河池 贺州 鹤岗 海西 海东 哈密 合肥 海南';
let buyTicketsJStr = '金华 济南 嘉兴 江门 九江 济宁 荆州 吉安 吉林 揭阳 晋中 焦作 荆门 晋城 酒泉 锦州 景德镇 佳木斯 济源 金昌 鸡西 嘉峪关 吉林';
let buyTicketsKStr = '昆明 开封 克拉玛依 喀什 昆山 开平 昆山';
let buyTicketsLStr = '临沂 兰州 洛阳 临汾 丽水 廊坊 六安 娄底 聊城 柳州 吕梁 连云港 乐山 龙岩 漯河 泸州 临夏 辽阳 六盘水 陇南 凉山 来宾 拉萨 辽源 丽江 临沧 莱芜 乐东';
let buyTicketsMStr = '绵阳 梅州 茂名 马鞍山 眉山 牡丹江';
let buyTicketsNStr = '南京 宁波 南通 南昌 南宁 南充 南阳 宁德 南平 内江 怒江';
let buyTicketsPStr = '平顶山 莆田 盘锦 萍乡 平凉 普洱 濮阳 攀枝花';
let buyTicketsQStr = '青岛 泉州 衢州 曲靖 清远 黔东南 黔南 黔西南 秦皇岛 齐齐哈尔 庆阳 钦州 潜江 七台河 琼海';
let buyTicketsRStr = '日照';
let buyTicketsSStr = '海 深圳 苏州 石家庄 沈阳 上饶 绍兴 商丘 汕头 宿迁 韶关 三明 邵阳 三亚 绥化 十堰 汕尾 四平 遂宁 宿州 松原 随州 商洛 石嘴山 三门峡 朔州 双鸭山 石河子';
let buyTicketsTStr = '天津 台州 泰州 唐山 太原 泰安 通辽 铁岭 铜仁 通化 天水 铜陵 铜川 塔城 天门 屯昌';
let buyTicketsWStr = '武汉 温州 无锡 潍坊 芜湖 乌鲁木齐 威海 渭南 梧州 乌兰察布 乌海 文山 吴忠 武威 文昌 万宁 吴江区 五指山';
let buyTicketsXStr = '西安 厦门 徐州 新乡 襄阳 信阳 湘潭 邢台 宣城 许昌 咸宁 西宁 孝感 咸阳 湘西 新余 仙桃 忻州 兴安盟 西双版纳 锡林郭勒 兴安盟';
let buyTicketsYStr = '盐城 烟台 宜春 扬州 银川 运城 宜昌 阳江 宜宾 营口 永州 玉林 延边 益阳 岳阳 榆林 玉溪 延安 鹰潭 伊犁 阳泉 云浮 雅安 伊春 杨凌区';
let buyTicketsZStr = '郑州 中山 镇江 珠海 株洲 湛江 漳州 淄博 张家口 肇庆 遵义 周口 驻马店 枣庄 舟山 自贡 资阳 张家界 张掖 中卫 昭通';



export let data = {
    buyTickets:{
        nav:{
            hot:buyTicketsHotStr.split(' '),
            AG:{
                A:buyTicketsAStr.split(' '),
                B:buyTicketsBStr.split(' '),
                C:buyTicketsCStr.split(' '),
                D:buyTicketsDStr.split(' '),
                E:buyTicketsEStr.split(' '),
                F:buyTicketsFStr.split(' '),
                G:buyTicketsGStr.split(' '),
            },
            HL:{
                H:buyTicketsHStr.split(' '),
                J:buyTicketsJStr.split(' '),
                K:buyTicketsKStr.split(' '),
                L:buyTicketsLStr.split(' ')
            },
            MT:{
                M:buyTicketsMStr.split(' '),
                N:buyTicketsNStr.split(' '),
                P:buyTicketsPStr.split(' '),
                Q:buyTicketsQStr.split(' '),
                R:buyTicketsRStr.split(' '),
                S:buyTicketsSStr.split(' '),
                T:buyTicketsTStr.split(' '),
            },
            WZ:{
                W:buyTicketsWStr.split(' '),
                X:buyTicketsXStr.split(' '),
                Y:buyTicketsYStr.split(' '),
                Z:buyTicketsZStr.split(' '),
            }
        },
    }
};