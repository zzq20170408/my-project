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



let exploreStr = '热门  最新  经典  可播放  豆瓣高分  冷门佳片  华语  欧美  韩国 日本  动作  喜剧  爱情  科幻  悬疑  恐怖  动画';




let tvStr = '热门  美剧  英剧  韩剧  日剧  国产剧  港剧  日本动画  综艺';


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
    },
    explore:{
        nav:exploreStr.split(' '),
    },
    tv:{
        nav:tvStr.split(' '),
    },
    chart:[
        {
            images:'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2498055621.webp',
            title:'王牌保镖 / 杀手的保镖 / 杀手保镖(台)',
            opation:'2017-08-18(美国) / 2017-09-22(中国大陆) / 瑞恩·雷诺兹 / 塞缪尔·杰克逊 / 加里·奥德曼 / 萨尔玛·海耶克 / 艾洛蒂·袁 / 乔昆姆·德·阿尔梅达 / 克里斯蒂·米切尔 / 约瑟芬·德·拉·波美 / 山姆·哈兹尔丁 / 巴里·阿茨玛 / 艾比·侯斯 / 米哈伊尔·戈尔沃伊...',
            plot:'影片讲述职业杀手（塞缪尔·杰克逊 Samuel L. Jackson 饰）为了解救妻子（萨尔玛·海耶克 Salma Hayek 饰）自愿成为法庭审判一名超级罪犯（加里·奥德曼 Gary Oldman 饰）的关键证人，被警方派重兵护送出庭作证。罪犯为杀人灭口派出 雇佣兵全歼了护送部队。侥幸逃生的女探员（艾洛蒂·袁 Elodie Yung 饰）只能避开警方既定路线请来私人保镖（瑞恩·雷诺兹 Ryan Reynolds 饰）继续护送证人。殊不知二人是多年的死对头，现在却要共同抵抗雇佣兵的截杀和警方的追捕并在24小时之内从英国伦敦抵达荷兰海牙出庭作证。两人冤家聚头火花四溅，为全球观众献上一场爆笑不断的动作大片版“尖峰时刻”。',
            relevant:{
                genres:['喜剧',' 动作',' 犯罪'],
                director:['帕特里克·休斯'],
                performer:['瑞恩·雷诺兹','塞缪尔·杰克逊','加里·奥德曼','萨尔玛·海耶克','艾洛蒂·袁'],
                screenwriter:['汤姆·奥康纳'],
            },
            average:7.2,
            star:35,
            id:22266126,
            pl:14508
        },
        {
            images:'https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2494647817.webp',
            title:'目击者之追凶 / Who Killed Cock Robin',
            opation:'2017-03-31(台湾) / 2017-06-21(上海电影节) / 庄凯勋 / 许玮甯 / 柯佳嬿 / 李铭顺 / 李淳 / 陈彦允 / 郑志伟 / 汤志伟 / 卜国耕 / 台湾 / 程伟豪 / 117分钟 / 目击者之追凶 / 犯罪 / 悬疑 / 惊悚 / 程伟豪 Wei-hao Cheng / 陈昱俐 / 陈彦齐 / 汉语普通话...',
            relevant:{
                genres:['悬疑' ,'惊悚' ,'犯罪'],
                director:['程伟豪'],
                performer:[ '庄凯勋' , '许玮甯' ,'柯佳嬿' , '李铭顺' , '李淳'  ],
                screenwriter:['程伟豪 ',' 陈昱俐 ',' 陈彦齐'],
            },
            plot:'冲劲十足、富有野心的社会线记者小齐，在报导一则事故车还魂新闻时，意外发现9年前一宗肇事逃逸命案并不单纯，虽然提案不被长官邱哥重视，但相信直觉的小齐找上菜鸟警员阿纬帮忙，并说服女主管Maggie连手调查当年的真相。当小齐、Maggie 好不容易找到命案中唯一生还的受害者徐爱婷，并取得采访同意后 ，徐爱婷却无故失踪了…到底九年前被隐瞒的真相是什么？',
            average:8.1,
            star:40,
            id:11600078,
            pl:36227
        },
        {
            images:'https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2494970558.webp',
            title:'猎杀星期一 / 超生游击队(豆友译名) / 星期一怎么了',
            opation:'2017-08-06(洛迦诺电影节) / 2017-08-18(英国) / 劳米·拉佩斯 / 格伦·克洛斯 / 威廉·达福 / 马尔万·肯扎里 / 克里斯蒂安·鲁贝克 / 帕尔·斯维尔·哈根 / 托米瓦·埃敦 / 凯西·克莱尔 / 卡梅伦·杰克 / 柯尔斯蒂·阿弗顿 / 维加·霍尔 / 马达林·德拉甘...',
            relevant:{
                genres:['科幻' , '惊悚'],
                director:['托米·维尔科拉'],
                performer:['劳米·拉佩斯' , '格伦·克洛斯' , '威廉·达福' , '马尔万·肯扎里' , '克里斯蒂安·鲁贝克'],
                screenwriter:['麦克斯·博特金' , '凯丽·威廉逊'],
            },
            plot:'故事设定在近未来，由于人口过剩和饥荒，政府不得不实行“独生子女”政策。正因为这个严格的计划生育议程，姐妹们必须轮流使用一个人的身份Karen Settman(拉佩斯饰)。她们的祖父(达福饰)给其命名为周一、周二、周三、周四、周五、周六和周日。每个人都可以每周外出一次。姐妹们只有在自己的公寓里才可以自在生活。直到有一天，“星期一”没回家......',
            average:6.7,
            star:35,
            id:7154408,
            pl:9115
        },
        {
            images:'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2469070974.webp',
            title:'神偷奶爸3 / 卑鄙的我3 / 坏蛋奖门人3(港)',
            opation:'2017-06-14(安锡动画电影节) / 2017-06-30(美国) / 2017-07-07(中国大陆) / 史蒂夫·卡瑞尔 / 克里斯汀·韦格 / 崔·帕克 / 米兰达·卡斯格拉夫 / 达纳·盖尔 / 内芙·沙雷尔 / 皮埃尔·科凡 / 史蒂夫·库根 / 朱莉·安德鲁斯 / 珍妮·斯蕾特 / 迈克尔·贝亚蒂...',
            relevant:{
                genres:['喜剧' , '动画' , '冒险'],
                director:['凯尔·巴尔达' , '皮埃尔·科凡' , '埃里克·吉伦'],
                performer:['史蒂夫·卡瑞尔' , '克里斯汀·韦格' , '崔·帕克' , '米兰达·卡斯格拉夫' , '达纳·盖尔'],
                screenwriter:['辛科·保罗' , '肯·道里欧'],
            },
            plot:'《神偷奶爸3》将延续前两部的温馨、搞笑风格，聚焦格鲁和露西的婚后生活，继续讲述格鲁和三个女儿的爆笑故事。“恶棍”奶爸格鲁将会如何对付大反派巴萨扎·布莱德，调皮可爱的小黄人们又会如何耍贱卖萌，无疑让全球观众万分期待。该片配音也最大程度沿用前作阵容，史蒂夫·卡瑞尔继续为男主角格鲁配音，皮埃尔·柯芬也将继续为经典角色小黄人配音，而新角色巴萨扎·布莱德则由《南方公园》主创元老崔·帕克为其配音。',
            average:6.9,
            star:35,
            id:25812712,
            pl:93863
        },
        {
            images:'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2413233083.webp',
            title:'名侦探柯南：唐红的恋歌 / 名侦探柯南21: 唐紅的恋歌(台) / 名侦探柯南：剧场版21',
            opation:'2017-04-15(日本) / 高山南 / 山崎和佳奈 / 小山力也 / 堀川亮 / 宫村优子 / 绪方贤一 / 岩居由希子 / 高木渉 / 大谷育江 / 林原惠美 / 宫川大辅 / 吉冈里帆 / 雪野五月 / 日本 / 静野孔文 / 112分钟 / 名侦探柯南：唐红的恋歌 / 动画 / 悬疑...',
            relevant:{
                genres:['动画' , '悬疑'],
                director:[' 静野孔文'],
                performer:[ '高山南' , '山崎和佳奈' , '小山力也' , '堀川亮' , '宫村优子'],
                screenwriter:['大仓崇裕' , '青山刚昌'],
            },
            plot:'舞台：大阪&京都，正在录制"皐月杯"百人一首记者会的大阪地标·日卖电视台突然发生爆炸，千钧一发之际，急忙赶来的柯南救出了被困在崩塌大楼中的平次与和叶，而另一侧，"皐月杯"冠军在京都屋内遭人杀害，监控器里所显示出的是——红叶...原作中的重要角色，百人一首高中生冠军，自称"平次未婚妻"的大冈红叶，将首次在剧场版中登场，新一和小兰的关系也将发生变化....',
            average:6.6,
            star:35,
            id:26788667,
            pl:3700
        },
        {
            images:'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2460006593.webp',
            title:'神奇女侠 / 神力女超人(台) ',
            opation:'2017-05-30(香港/台湾) / 2017-06-02(中国大陆) / 2017-06-02(美国) / 盖尔·加朵 / 克里斯·派恩 / 康妮·尼尔森 / 罗宾·怀特 / 丹尼·赫斯顿 / 大卫·休里斯 / 萨伊德·塔格马奥 / 艾文·布莱纳 / 尤金·布雷弗·洛克 / 露茜·戴维斯 / 埃伦娜·安纳亚...',
            relevant:{
                genres:['动作' , '奇幻' ,'冒险'],
                director:['派蒂·杰金斯'],
                performer:['盖尔·加朵' ,'克里斯·派恩' , '康妮·尼尔森' , '罗宾·怀特' , '丹尼·赫斯顿'],
                screenwriter:['艾伦·海因伯格' , '扎克·施奈德' , '贾森·福克斯' , '威廉·马斯顿'],
            },
            plot:'戴安娜（盖尔·加朵 Gal Gadot 饰）是女王希波吕忒（康妮·尼尔森 Connie Nielsen 饰）的女儿，自幼生活在天堂岛上。巨大的屏障将这座岛屿同外界的纷纷扰扰隔开犹如一个世外桃源，而岛上生活着的亦都是女性。在女武官安提奥普（罗宾·莱特 Robin Wright 饰）的教导之下，戴安娜习得了高强的武艺，而她的体内，似乎隐藏着某种强大的未知力量。',
            average:7.1,
            star:35,
            id:1578714,
            pl:179963
        },
        {
            images:'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2459723975.webp',
            title:'加勒比海盗5：死无对证 / 加勒比海盗：恶灵启航(港) / 加勒比海盗 神鬼奇航：死无对证(台)',
            opation:'2017-05-26(中国大陆) / 2017-05-26(美国) / 约翰尼·德普 / 哈维尔·巴登 / 杰弗里·拉什 / 布伦顿·思韦茨 / 卡雅·斯考达里奥 / 凯文·麦克纳利 / 格什菲·法拉哈尼 / 奥兰多·布鲁姆 / 凯拉·奈特莉 / 斯蒂芬·格拉汉姆 / 大卫·文翰 / 保罗·麦卡特尼...',
            relevant:{
                genres:[ '动作' , '奇幻' ,'冒险'],
                director:[ '艾斯彭·山德伯格' , '乔阿吉姆·罗恩尼'],
                performer:[ '约翰尼·德普' , '哈维尔·巴登' , '杰弗里·拉什' , '布伦顿·思韦茨' , '卡雅·斯考达里奥'],
                screenwriter:['特里·鲁西奥' , '泰德·艾略特' , '斯图尔特·贝亚蒂耶' , '杰夫·内桑森' , '杰·沃尔伯特'],
            },
            plot:'故事发生在《加勒比海盗3：世界的尽头》沉船湾之战20年后。 男孩亨利（布兰顿·思怀兹 Brenton Thwaites 饰）随英国海军出航寻找被聚魂棺诅咒的父亲“深海阎王”威尔·特纳（奥兰多·布鲁姆 Orlando Bloom 饰），却在百慕大三角遭遇被解封的亡灵萨拉查船长（哈维尔·巴登 Javier Bardem 饰）。获取自由的萨拉查屠尽加勒比海盗，征服了整个海域，手刃了“黑胡子”爱德华·蒂奇（伊恩·麦柯肖恩 Ian McShane 饰）的里海海盗王赫克托·巴博萨船长（杰弗里·拉什 Geoffrey Rush 饰）在女巫Haifaa Meni(格什菲·法拉哈尼 Golshifteh Farahani 饰)口中得知了萨拉查的真实目的：为寻找他的宿敌杰克船长（约翰尼·德普 Johnny Depp 饰）。海盗的命运皆压在落魄的老杰克被封印的黑珍珠号，以... ',
            average:7.3,
            star:40,
            id:6311303,
            pl:144476
        },
        {
            images:'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2455156816.webp',
            title:'记忆大师 / 记忆战 / 催眠大师2',
            opation:'2017-04-23(北京电影节) / 2017-04-28(中国大陆) / 黄渤 / 段奕宏 / 徐静蕾 / 杨子姗 / 梁杰理 / 许玮甯 / 王真儿 / 焦刚 / 张念骅 / 杜函梦 / 栾元晖 / 曹英睿 / 中国大陆 / 陈正道 / 119分钟 / 剧情 / 犯罪 / 悬疑 / 惊悚 / 任鹏 Peng Ren / 陈正道 Leste...',
            relevant:{
                genres:['剧情' , '悬疑' , '惊悚' , '犯罪'],
                director:[ '陈正道'],
                performer:[ '黄渤' , '段奕宏' , '徐静蕾' , '杨子姗' , '梁杰理'],
                screenwriter:['任鹏' , '陈正道'],
            },
            plot:'故事发生在2025年，因为和妻子张代晨（徐静蕾 饰）婚姻破裂，男主角江丰（黄渤 饰）走进记忆大师医疗中心接受手术，却不料手术失误记忆被错误重载，他莫名其妙变成了“杀人凶手”。警官沈汉强（段奕宏 饰）的穷追不舍让他逐渐发现，自己脑内的错误记忆不仅是破案的关键，更是救赎自己的唯一希望。与此同时，妻子身边出现的女人陈姗姗（杨子姗 饰）、记忆中浮现出的神秘女子（许玮甯 饰），似乎也和真相有着千丝万缕的联系，一场记忆烧脑战也随之开始。',
            average:7.2,
            star:35,
            id:25884801,
            pl:139918
        },
        {
            images:'https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2473039747.webp',
            title:'死亡笔记 / 死亡笔记真人版 / 死亡笔记美国版',
            opation:'2017-08-25(美国网络) / 纳特·沃尔夫 / 勒凯斯·斯坦菲尔德 / 玛格丽特·库里 / 谢伊·惠格姆 / 威廉·达福 / 杰森·莱尔斯 / 保罗·纳高奇 / 杰克·埃特林格 / 马修·凯文·安德森 / 克里斯·布里顿 / 科维西·阿梅扬 / 贾斯汀·斯通 / 克里斯蒂安·斯隆...',
            relevant:{
                genres:[ '剧情' , '悬疑' , '惊悚' , '犯罪' , '奇幻'],
                director:['亚当·温加德'],
                performer:['纳特·沃尔夫' , '勒凯斯·斯坦菲尔德' , '玛格丽特·库里' , '谢伊·惠格姆' , '威廉·达福'],
                screenwriter:['查理·帕拉伯尼得斯' , '维拉斯·帕拉伯尼得斯' , '杰瑞米·斯莱特' , '大场鸫' , '小畑健'],
            },
            plot:'凭借《纸上城市》（Paper Towns）而展露头脚的新人纳特·沃尔夫（Nat Wolff）最近正洽谈主演恐怖片《死亡笔记》（Death Note），该片由华纳兄弟公司出品，根据同名热门日本漫画改编。 ',
            average:4.0,
            star:20,
            id:5920220,
            pl:3515
        },
        {
            images:'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2496390505.webp',
            title:'小戏骨：放开那三国 / 小戏骨：三国演义 / 小戏骨之三国演义 ',
            opation:'2017-08-28(中国大陆) / 陶奕希 / 李俊豪 / 葛奕德 / 赵晨翔 / 陈荣达 / 罗自豪 / 陶冰蓝 / 周冉 / 黎哲彬 / 祁晟原 / 段智文 / 周柯伊 / 赵士添 / 中国大陆 / 潘礼平 / 邹江 / 尹俊欢 / 104分钟 / 剧情 / 儿童 / 历史 / 古装 / 邢育森 Yusen Xing / 高翔...',
            relevant:{
                genres:['剧情' , '儿童' , '历史' , '古装'],
                director:['潘礼平' , '邹江' , '尹俊欢'],
                performer:[ '陶奕希' , '李俊豪' , '葛奕德' , '赵晨翔' , '陈荣达'],
                screenwriter:['邢育森' , '高翔'],
            },
            plot:'本片讲述了东汉末年黄巾起义，董卓称霸朝纲，荼毒天下，曹操、貂蝉、吕布、王允等人为了拯救家国百姓而刺杀董卓的故事。不同于以往的三国历史题材，本片以独特的女性视角，貂蝉为切入点，来看待东汉末年时期所发生的故事。',
            average:8.3,
            star:45,
            id:26951953,
            pl:1614
        },
    ],
};