/*
*兼容各浏览器
* 取得浏览器可见区域的大小
* 包括滚动条的宽（17px），但不包括浏览器的标签页、网址输入框、书签栏、这三部分的宽
* pageWidth==clientWidth+滚动条的宽（17px）[如果有垂直滚动条]
* pageWidth==clientHeight+滚动条的高（17px）[如果有水平滚动条]
*/ 
var pageWidth = window.innerWidth;  //IE9+、Firefox、Safari、Opera、Chrome
var pageHeight = window.innerHeight;
if(typeof pageWidth!="number"||typeof pageHeight!="number"){   //IE6
   if(document.compatMode=="CSS1Compat"){  //标准模式下
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
    } else{   //混杂模式下
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
      }
}