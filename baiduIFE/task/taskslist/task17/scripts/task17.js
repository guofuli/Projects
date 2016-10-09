 /* 数据格式演示
     var aqiSourceData = {
     "北京": {
     "2016-01-01": 10,
     "2016-01-02": 10,
     "2016-01-03": 10,
     "2016-01-04": 10
     }
     };
     */
    // 以下两个函数用于随机模拟生成测试数据
    function getDateStr(dat) {
      var y = dat.getFullYear();
      var m = dat.getMonth() + 1;
      m = m < 10 ? '0' + m : m;
      var d = dat.getDate();
      d = d < 10 ? '0' + d : d;
      return y + '-' + m + '-' + d;
    }
    function randomBuildData(seed) {
      var returnData = {};
      var dat = new Date("2016-01-01");
      var datStr = '';
      for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
      }
      return returnData;
    }
    var aqiSourceData = {
      "北京": randomBuildData(500),
      "上海": randomBuildData(300),
      "广州": randomBuildData(200),
      "深圳": randomBuildData(100),
      "成都": randomBuildData(300),
      "西安": randomBuildData(500),
      "福州": randomBuildData(100),
      "厦门": randomBuildData(100),
      "沈阳": randomBuildData(500)
    };
    /**
     * 处理渲染图表的时间（横轴）数据
     */
    function chartTimeData(time,city){
      var arr=aqiSourceData[city];
      var a="";
      var a1=[];
      var a2=[];
      var a3=[];
      for(var key in arr){
        a+=key+",";
      }
      a=a.slice(0,-1);
      a1=a.split(",");
      if(time=="day"){
        return a1;   //获取以天为单位的日期组成的数组
      }  
      else if(time=="week"){
        var weeknum=Math.ceil(a1.length/7);
        for(var k=0;k<weeknum;k++){
            a2[k]="2016第"+(k+1)+"周";
        } 
        return a2;
      }
      else if(time=="month"){
           a3[0]="2016-01";
           a3[1]="2016-02";
           a3[2]="2016-03";
           return a3;
       }
    }
    /**
     * 处理渲染图表的空气质量（纵轴）数据
     */
    function chartAirData(time,city){
      var arr=aqiSourceData[city];
      var b="";
      var b1=[];
      var b2=[];
      var b3=[];
      for(var key in arr){
        b+=arr[key]+",";
      }
      b=b.slice(0,-1);
      b1=b.split(","); //获取以天为单位的所对应的空气质量组成的数组
      if(time=="day"){
        return b1;
      }
      else if(time=="week"){
          var weeknum=Math.ceil(b1.length/7);
          for(var k=0;k<weeknum;k++){
            b2[k]=Math.round((parseInt(b1[k*7])+parseInt(b1[k*7+1])+parseInt(b1[k*7+2])+parseInt(b1[k*7+3])+parseInt(b1[k*7+4])+parseInt(b1[k*7+5])+parseInt(b1[k*7+6]))/7);
          }
          return b2; 
      }
      else if(time=="month"){
        var dat = new Date("2016-01-01");
        var d=dat.getDate();
        var m = dat.getMonth() + 1;
        var total1=0;
        var total2=0;
        var total3=0;
        for(var t=0;t<31;t++){
            total1+=parseInt(b1[t]);
        }
        b3[0]=Math.round(total1/31);

        for(var t=31;t<60;t++){
            total2+=parseInt(b1[t]);
        }
        b3[1]=Math.round(total2/29);
        for(var t=60;t<91;t++){
            total3+=parseInt(b1[t]);
        }
        b3[2]=Math.round(total3/31);
        return b3;
      }
    }
    /**
     * 渲染图表
     */
    function renderChart(arr1,arr2) {
      var barChartData = {
        labels : arr1,
        datasets : [
          {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,0.8)",
            highlightFill : "rgba(151,187,205,0.75)",
            highlightStroke : "rgba(151,187,205,1)",
            data : arr2
          }
        ]
      };
      //每次绘图之前先删除canvas节点，重新添加一个。防止之前的图表依然存在，而导致鼠标在图表上移动的时候，2张图表之间会来回闪动
      var div_wrap=document.getElementsByClassName("aqi-chart-wrap")[0];
      canvas=document.getElementById("canvas"); 
      canvas.parentNode.removeChild(canvas);
      var newcanvas=document.createElement('canvas');
      newcanvas.setAttribute('id','canvas');
      newcanvas.setAttribute('height','1000px');
      newcanvas.setAttribute('width','1000px');
      div_wrap.appendChild(newcanvas);

      var ctx = document.getElementById("canvas").getContext("2d");
      window.myBar = new Chart(ctx).Bar(barChartData, {
        responsive : false,
      });
      
    }
    /**
     * 绘制图表
     */
    function drawChart(time,city){
      time_arr=chartTimeData(time,city);
      air_arr=chartAirData(time,city);
      renderChart(time_arr,air_arr);
    }
    function init(){
      var gra_time=document.getElementsByName('gra-time');
      var city_select=document.getElementById('city-select');
      for(var cityname in aqiSourceData){
         var option=document.createElement("option");
         option.innerHTML=cityname;
         city_select.appendChild(option);
      } //添加<option></option>节点
      var time="day";  //time的初始值为day
      var city="北京"; //city的初始值为"北京"
      var time_arr=[];
      var air_arr=[];
      drawChart(time,city);
      for(var i=0;i<gra_time.length;i++){
          gra_time[i].onclick= function () {   //单击单选按钮，更新变量time
            time=this.value;   
            drawChart(time,city);  //绘制新的图表
          }
      }
      city_select.onclick=function(){   //单击单选框，更新变量city
        newcity=this.value;   
        if(newcity==city){
          return false;  //如果city值未变，退出
        }else{
          city=newcity;
          drawChart(time,newcity);
        }
      };
    };
    init();