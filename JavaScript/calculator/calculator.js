/**
 * Created by 18408 on 2016/3/8.
 *
**/
window.onload=function() {
    var resultIpt = document.getElementById("resultIpt"); //获取输出文本框
    var btns_number = document.getElementsByClassName("btn_number"); //获取数字输入按钮
    var btns_operation = document.getElementsByClassName("btn_operation"); //获取操作按钮
    var simpleEqu = document.getElementById("simpleEqu"); //获取"="按钮
    var temp = "";
    var num1= 0,num2=0;
    //获取第一个数
    for(var i=0;i<btns_number.length;i++){
        btns_number[i].onclick=function (){
            temp += this.value;
            resultIpt.value = temp;
        };
    }
    //对获取到的数进行操作
   for(var j=0;j<btns_operation.length;j++) {
       btns_operation[j].onclick = function () {
           num1=parseFloat(resultIpt.value);
           oper = this.value;
           if(oper=="1/×"){
               num1 = Math.pow(num1,-1); //取倒数
               resultIpt.value = num1.toString();
           }else if(oper=="﹢/﹣"){    //取相反数
               num1 = -num1;
               resultIpt.value = num1.toString();
           }else if(oper=="√"){      //取平方根
               num1 =Math.sqrt(num1);
               resultIpt.value = num1.toString();
           }else if(oper=="←"){    //删除个位
               resultIpt.value = resultIpt.value.substring(0, resultIpt.value.length - 1);

           }else if(oper=="全清"){  //清除数字
               resultIpt.value = "";
           }
           else{          //oper=="＋" "－" "×" "÷" "％"时，继续输入第二数字
               temp = "";
               resultIpt.value = temp;
           }
       }
   }
    //输出结果
    simpleEqu.onclick=function(){
        num2=parseFloat(temp);  //取得第二个数字
        calculate(num1, num2, oper);
        resultIpt.value = result.toString();
    }
};

//定义一个计算函数
function calculate(num1, num2, oper) {
        switch (oper) {
            case "＋":
                result=floatAdd(num1, num2); //求和
                break;
            case "－":
                result=floatSub(num1, num2); //求差
                break;
            case "×":
                result=floatMul(num1, num2);  //求积
                break;
            case "÷":
                result=floatDiv(num1, num2);  //求商
                break;
            case "％":
                result=num1%num2;  //求余数
                break;
        }
    }

//精确计算
//浮点数加法运算
function floatAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    return (arg1*m+arg2*m)/m
}
//浮点数减法运算
function floatSub(arg1,arg2){
    var r1,r2,m,n;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    //动态控制精度长度
    n=(r1>=r2)?r1:r2;
    return ((arg1*m-arg2*m)/m).toFixed(n);
}
//浮点数乘法运算
function floatMul(arg1,arg2){
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}
//浮点数除法运算
function floatDiv(arg1,arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {t1 = arg1.toString().split(".")[1].length} catch (e) {}
    try {t2 = arg2.toString().split(".")[1].length} catch (e) {}
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
}
