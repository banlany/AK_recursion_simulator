//数量统计
var total_try = 0;
var ct_3 = 0;
var ct_4 = 0;
var ct_5 = 0;
var ct_6 = 0;
var last_6 = 0;
//概率计算
var pro_6 = 200;
var pro_5 = 1000;
var pro_4 = 6000;
var pro_3 = 10000;
var fortune = 5;
//限定池up
// const list6_limit_up="纯烬艾雅法拉/玲琅诗怀雅";
// const list6_limit="百炼嘉伟尔/假日威龙陈";
// const list5_up="青枳";
// const list6_up1="提丰";
// const list5_up2="寒檀/蜜蜡";
// const list6_up2="灵知/空弦";
// const list5_up3="石棉/月禾/莱恩哈特";
const list6_all="温蒂/早露/铃兰/棘刺/森蚺/史尔特尔/瑕光/泥岩/山/空弦/嵯峨/异客/凯尔希/卡涅利安/帕拉斯/水月/琴柳/远牙/焰尾/灵知/老鲤/澄闪/菲亚梅塔/号角/艾丽妮/黑键/多萝西/鸿雪/玛恩纳/白铁/斥罪/焰影苇草/林/仇白/伊内丝/霍尔海雅/圣约送葬人/提丰/琳琅诗怀雅";
const list5_all="极境/石棉/月禾/莱恩哈特/断崖/蜜蜡/贾维/安哲拉/燧石/四月/奥斯塔/絮雨/卡夫卡/乌有/爱丽丝/乌有/熔泉/赤冬/绮良/羽毛笔/桑葚/灰毫/蚀清/极光/夜半/夏栎/风丸/洛洛/掠风/濯尘芙蓉/承曦格雷伊/晓歌/但书/明椒/子月/和弦/火哨/铎铃/洋灰/玫拉/空构/寒檀/青枳";
const list4="安比尔/梅/红云/桃金娘/苏苏洛/格雷伊/猎蜂/阿消/地灵/深海色/古米/蛇屠箱/角峰/调香师/末药/暗索/砾/慕斯/霜叶/缠丸/杜宾/红豆/清道夫/白雪/流星/杰西卡/远山/夜烟/宴/刻刀/波登可/卡达/孑/酸糖/芳汀/泡泡/杰克/松果/豆苗/深靛/罗比菈塔/褐果/铅踝/休谟斯";
const list3="芬/香草/翎羽/玫兰莎/卡缇/米格鲁/克洛丝/炎熔/芙蓉/安赛尔/史都华德/梓兰/空爆/月见夜/斑点/泡普卡";
$("#upselect").change(function(){
    get_list();
});
//获取幸运值
$("#luck_submit").click(function(){
    fortune = $("#ld").val();
    console.log("当前幸运值："+fortune)
    rePro();
})
//单抽
$("#try1").unbind('click').click(function(){
    total_try++;
    gyxf(1);
    $("#xf_times").html(total_try);
    $("#r3_get").html(ct_3);
    $("#r4_get").html(ct_4);
    $("#r5_get").html(ct_5);
    $("#r6_get").html(ct_6);
    $("#last_r6").html(last_6);
    var temp;
    temp = (100*ct_3/total_try).toFixed(2);
    $("#rate3").html(temp);
    temp = (100*ct_4/total_try).toFixed(2);
    $("#rate4").html(temp);
    temp = (100*ct_5/total_try).toFixed(2);
    $("#rate5").html(temp);
    temp = (100*ct_6/total_try).toFixed(2);
    $("#rate6").html(temp);
})
//十连
$("#try10").click(function(){
    total_try+=10;
    gyxf(10);
    $("#xf_times").html(total_try);
    $("#r3_get").html(ct_3);
    $("#r4_get").html(ct_4);
    $("#r5_get").html(ct_5);
    $("#r6_get").html(ct_6);
    $("#last_r6").html(last_6);
    var temp;
    temp = (100*ct_3/total_try).toFixed(2);
    $("#rate3").html(temp);
    temp = (100*ct_4/total_try).toFixed(2);
    $("#rate4").html(temp);
    temp = (100*ct_5/total_try).toFixed(2);
    $("#rate5").html(temp);
    temp = (100*ct_6/total_try).toFixed(2);
    $("#rate6").html(temp);
})
//得到干员列表
function get_list(){
    var title = $("#upselect option:selected").val();
    if(title=='no'){
        $("#uplist6").html("焰影苇草");
        $("#limitedup").hide();
        $("#uplist5").html("和弦/天火");
        $("#up1").html(50);
        $("#up2").html(50);
        console.log("枯焰生花");
    }
    if(title=="limited"){
        $("#uplist6").html("纯烬艾雅法拉/玲琅诗怀雅");
        $("#uplimit6").html("百炼嘉伟尔/假日威龙陈");
        $("#limitedup").show();
        $("#uplist5").html("青枳");
        $("#up1").html(70);
        $("#up2").html(50);
        console.log("云间清醒梦");
    }
    if(title=="one-up"){
        $("#uplist6").html("提丰");
        $("#uplimit6").html("no data");
        $("#limitedup").hide();
        $("#uplist5").html("寒檀/蜜蜡");
        $("#up1").html(50);
        $("#up2").html(50);
        console.log("射落灾异的风暴");
    }
    if(title=="two-up"){
        $("#uplist6").html("灵知/空弦");
        $("#limitedup").hide();
        $("#uplimit6").html("no data");
        $("#uplist5").html("石棉/月禾/莱恩哈特");
        $("#up1").html(50);
        $("#up2").html(50);
        console.log("标准寻访（灵知、空弦）");
    }
}
//进行寻访操作
function gyxf(times){
    //清空盒子
    $("#result").html("");
    for(var i=0;i<times;i++){
        var order;
        var nameGet;
        var type = "";
        var rank_get;
        autoPro();
        last_6++;
        var rank = getRandom(1,10000);
        if(rank <= pro_6){
            //出六星啦！
            ct_6++;
            last_6 = 0;
            rank_get = 6;
            var pro_up = $("#up1").html();
            rank = getRandom(1,100);
            var arrLimit = $("#uplimit6").html().split("/");
            var arrUp = $("#uplist6").html().split("/");
            if(rank <= pro_up){//获得了up
                type = "[ UP ]";
                rank = getRandom(1,arrUp.length);
                nameGet = arrUp[rank-1];
            }else{
                var arrTemp = [];
                var arrAll6 = list6_all.split("/");
                //获得单独的6星不up列表
                arrAll6.forEach((a)=>{
                    let c = arrUp.findIndex(b =>a === b);
                    if(c > -1) delete arrUp[c];
                    else arrTemp.push(a);
                });
                //塞入5倍权重的限定
                if(arrLimit.length > 1)
                arrLimit.forEach((a) => {
                    arrTemp.push(a);
                    arrTemp.push(a);
                    arrTemp.push(a);
                    arrTemp.push(a);
                    arrTemp.push(a);
                });
                rank = getRandom(1,arrTemp.length);
                nameGet = arrTemp[rank-1];
            }
            console.log("["+(i+1)+"] %c6★ "+nameGet+type,"color:#fff;background-color:#ffca2c;padding:4px 8px;");

            rePro();
        } else if(rank <= pro_5){
            //出五星
            var arrUp = $("#uplist5").html().split("/");
            rank = getRandom(1,100);
            rank_get = 5;
            if(rank <= 50){//获得up
                type = "[ UP ]"
                rank = getRandom(1,arrUp.length);
                nameGet = arrUp[rank-1];
            }else{//不是up
                var arrTemp = [];
                var  arrAll5 = list5_all.split("/");
                arrAll5.forEach((a)=>{
                    let c = arrUp.findIndex(b => a === b);
                    if(c > -1) delete arrUp[c];
                    else arrTemp.push(a);
                });
                rank = getRandom(1,arrTemp.length);
                nameGet = arrTemp[rank-1];
            }
            console.log("["+(i+1)+"] %c5★ "+nameGet+type,"color:#fff;background-color:#e0ca88;padding:4px 8px;");

            ct_5++;
        }else if(rank <= pro_4){
            //出四星
            rank_get = 4;
            var arrAll4 = list4.split("/");
            rank = getRandom(1,arrAll4.length);
            nameGet = arrAll4[rank-1];
            console.log("["+(i+1)+"] %c4★ "+nameGet,"color:#fff;background-color:#aaace4;padding:4px 8px;");

            ct_4++;
        }else if(rank <=pro_3){
            //出三星
            rank_get = 3;
            var arrAll3 = list3.split("/");
            rank = getRandom(1,arrAll3.length);
            nameGet = arrAll3[rank-1];
            console.log("["+(i+1)+"] %c3★ "+nameGet,"color:#fff;background-color:#bfbfbf;padding:4px 8px;");

            ct_3++;
        }
        var x = i + 1;
        order = "result"+ x;
        autoPro();
        $("#"+order).html(nameGet+"    ");
        $("#result").append($("#"+order).html());
    }
}
$("#clean").click(function(){
    total_try=0;
    ct_3=0;
    ct_4=0;
    ct_5=0;
    ct_6=0;
    last_6=0;
    rePro();
    $("#xf_times").html(total_try);
    $("#r3_get").html(ct_3);
    $("#r4_get").html(ct_4);
    $("#r5_get").html(ct_5);
    $("#r6_get").html(ct_6);
    $("#last_r6").html(last_6);
    $("#rate3").html(0.00);
    $("#rate4").html(0.00);
    $("#rate5").html(0.00);
    $("#rate6").html(0.00);
    $("#result").html("");
})
//重置概率
function rePro(){
    pro_6 = 200 + (fortune-5)*40;
    pro_5 = parseInt((10000 - pro_6)*8/98) + pro_6;
    pro_4 = parseInt((10000 - pro_6)*50/98) + pro_5;
    pro_3 = parseInt((10000 - pro_6)*40/98) + pro_4;
     var temp = (pro_6/100).toFixed(2);
    $("#proNow").html(temp)
}
//调整概率值
function autoPro(){
    //计算当前期望值
    var ex = parseInt(10000/(200 + (fortune-5)*40));
    //超过期望值
    if(last_6 > ex){
        pro_6 = 200 + (fortune-5)*40 + (200 + (fortune-5)*40) *(last_6 - ex);
        pro_5 = parseInt((10000 - pro_6)*8/98) + pro_6;
        pro_4 = parseInt((10000 - pro_6)*50/98) + pro_5;
        pro_3 = parseInt((10000 - pro_6)*40/98) + pro_4;
    }
    if(last_6 == 99){
        pro_6 = 10000;
    }
    var temp = (pro_6/100).toFixed(2);
    $("#proNow").html(temp)
}
//生成随机数
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}