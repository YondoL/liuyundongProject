// data
var res = [
    {
        "title": "【最世界一日游】将军之道—京都绝景之旅（含米其林午餐）仅限10周岁以上参加",
        "introduce": [
            "听惊心动魄的日本战国故事",
            "品米其林餐厅会席料理",
            "从东山最佳角度俯瞰京都"
        ],
        "address": "京都",
        "imgurl": "http://ww2.sinaimg.cn/large/801b780ajw1f83d8w3n25j20bo07sjs2.jpg",
        "oldPrice": 1650,
        "newPrice": 868,
        "browseCount": 36459,
        "soldCount": 186
    }, {
        "title": "【最世界一日游】京都岚山香风—竹林和温泉的纯净空气之旅（含午餐）",
        "introduce": [
            "岚山不止有古风的竹林，更有犹如世外仙境的私家山庄，",
            "像当地人一样游览岚山，亲手制作香包送给重要的人，",
            "最后再泡上一汤天然温泉，才算到过岚山。"
        ],
        "address": "京都",
        "imgurl": "http://ww3.sinaimg.cn/large/801b780ajw1f83jc4tcijj20bo07s0tn.jpg",
        "oldPrice": 1110,
        "newPrice": 598,
        "browseCount": 37817,
        "soldCount": 164
    }, {
        "title": "【City Walk】从大栅栏到杨梅竹斜街－老北京的城南旧事",
        "introduce": [
            "从元朝到民国，老北京最活跃、最有生活气息的地界，就在前门。",
            "从原研哉到国际设计周，旧城保护与创意产业的培育，也悄悄发生在前门。",
            "这里有北京最窄的胡同——钱市胡同（看自下而上商业文化的演变）"
        ],
        "address": "北京",
        "imgurl": "http://ww1.sinaimg.cn/large/801b780ajw1f83d9x4je0j20bo07st9l.jpg",
        "oldPrice": 198,
        "newPrice": 88,
        "browseCount": 40990,
        "soldCount": 205
    }, {
        "title": "【City Walk】Anne Walk武康路，老上海风情的缩影",
        "introduce": [
            "逛租界，涨历史知识： 原法租界有多大？武康路是怎么规划建成的？",
            "看洋房，数风流人物：民国最短命总理唐绍仪的被刺现场；上海滩名媛蓝妮的玫瑰别墅；巴金晚年故居……",
            "喝咖啡，品海派生活：武康路仍旧是上海外国人密度最高的生活区。让我们在咖啡馆谈谈风月，享受法租界的午后阳光。"
        ],
        "address": "上海",
        "imgurl": "http://ww1.sinaimg.cn/large/801b780ajw1f83dabig4gj20bo07smxk.jpg",
        "oldPrice": 198,
        "newPrice": 88,
        "browseCount": 431576,
        "soldCount": 468
    }, {
        "title": "【City Walk】京都NI WALK— 探秘祇园东山半日游",
        "introduce": [
            "京都建城有哪些秘密？艺妓有着怎样的人生？",
            "梁思成到底是不是京都的保护者？",
            "京都City Walk，带你走进这些风景背后的有趣故事。"
        ],
        "address": "京都",
        "imgurl": "http://ww4.sinaimg.cn/large/801b780ajw1f83daqfuc8j20bo07sjsn.jpg",
        "oldPrice": 480,
        "newPrice": 248,
        "browseCount": 44016,
        "soldCount": 334
    }, {
        "title": "对骑行上瘾-用单车丈量这个熟悉的城市",
        "introduce": [
            "跟着最会玩的穷游锦囊，骑上“橙色小网红”摩拜单车（Mobike），回归脚踏的绿色时代，听着故事在城市间穿行。",
            "",
            "城市的起点，生活的源头：顺流而下，洋气的外滩源和生活的石库门并非那么泾渭分明，他们的交融也正是海派文化诞生的缩影。"
        ],
        "address": "上海",
        "imgurl": "http://ww1.sinaimg.cn/large/801b780ajw1f83daztpdzj20bo07sab7.jpg",
        "oldPrice": 1650,
        "newPrice": 868,
        "browseCount": 36459,
        "soldCount": 186
    }
]


$('<img/>').prop('src','../imgs/img_1/banner1-black-img1.jpg').css('width','1349px')
    .appendTo($('#banner'))

// $.ajax({
//     url : 'citywalkList',
//     success : function (res){
        // console.log(res)
        for(var i= 0;i<res.length;i++){
            var obj = res[i];
            var dl_ = $('<dl/>')
            dl_.append(
                $('<dt/>').append($('<img/>').prop('src',obj.imgurl))
            ).append(
                $('<dd/>').append($('<span/>').html(obj.address))
                    .append($('<span/>').html('&nbsp;'+obj.browseCount).append($('<b/>').html('  次浏览  ')))
                    .append($('<span/>').html('&nbsp;'+obj.soldCount).append($('<b/>').html(' 已售')))
            ).append(
                $('<dd/>').append($('<a/>').html(obj.title))
            ).append(
                $('<dd/>').append($('<img/>').prop('src','../imgs/img/srat.gif').css('margin-right','3px')).append($('<span/>').html(obj.introduce[0]))
            ).append(
                $('<dd/>').append($('<img/>').prop('src','../imgs/img/srat.gif').css('margin-right','3px')).append($('<span/>').html(obj.introduce[1]))
            ).append(
                $('<dd/>').append($('<img/>').prop('src','../imgs/img/srat.gif').css('margin-right','3px')).append($('<span/>').html(obj.introduce[2]))
            ).append(
                $('<dd/>').html(obj.oldPrice+'元  ')
                    .append($("<span/>").html(obj.newPrice).append($('<b/>').html('  元起')))
            ).append(
                $('<dd/>').append($('<a/>').html('立即预定'))
            )
        //    将dl添加进main
            $('#main').append(dl_)
        }
    // }
// })

$(".noLink").prop("title","无跳转");