/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var div=document.getElementById('form');
var table=document.getElementById('aqi-table');
table.border=1;
table.style.borderCollapse="collapse";
tbody=document.createElement('tbody');
//创建行
tbody.insertRow(0);
tbody.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode('城市'));
tbody.rows[0].insertCell(1);
tbody.rows[0].cells[1].appendChild(document.createTextNode('空气质量'));
tbody.rows[0].insertCell(2);
tbody.rows[0].cells[2].appendChild(document.createTextNode("操作"));
table.appendChild(tbody);
var form=document.getElementById('form');
var cityEle=document.getElementById('aqi-city-input');
var valueEle=document.getElementById('aqi-value-input');
var text1=document.getElementById('text1');
var text2=document.getElementById('text2');
var add_btn=document.getElementById('add-btn');
//实时验证表单输入是否符合规范
cityEle.onkeyup=function(){
 	city=cityEle.value; //获取用户的输入值 	
 	var reg = /[^\a-\z\A-\Z\u4E00-\u9FA5]/g; //中英文的正则表达式
 	if(reg.test(city)){
     text1.innerHTML="*只能输入中英文字符";
 	}else{
     text1.innerHTML="输入正确";
 	}
};
valueEle.onkeyup=function(){    	
  value=valueEle.value; //获取用户的输入值
 	var reg = /[^\0-9]/g; //数字的正则表达式
 	if(reg.test(value)){
     text2.innerHTML="*只能输入数字";
 	}else{
     text2.innerHTML="输入正确";
 	}
};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
   //用户输入正确时存储用户输入
   var focusEle=document.activeElement;
   if(text1.innerHTML=="输入正确"&&text2.innerHTML=="输入正确"){
   	  city.trim();  //去除左右两端的空格
   	  value.trim();
   	  aqiData = {city:value};	
   	  return true;
   }else{
   	  return false;
   }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	   if(addAqiData()){
		   //创建行
	    tbody.insertRow(1);
	    tbody.rows[1].insertCell(0);
	    tbody.rows[1].cells[0].appendChild(document.createTextNode(city));
	    tbody.rows[1].insertCell(1);
	    tbody.rows[1].cells[1].appendChild(document.createTextNode(value));
	    tbody.rows[1].insertCell(2);
	    var delbtn=document.createElement('button');
	    delbtn.innerHTML="删除";
	    tbody.rows[1].cells[2].appendChild(delbtn);
	   }else{
	   	 // alert("输入错误,请重新输入");
	   }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}
function init(){
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
 	add_btn.onclick=function(){
       addBtnHandle();
       var delbtn=document.getElementsByTagName('table')[0].getElementsByTagName('button');
       for (var i in delbtn){
							  	delbtn[i].onclick=function(){
							  		   this.parentNode.parentNode.remove();
          };
      	}
 };
}
init();