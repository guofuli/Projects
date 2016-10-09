/*
*兼容各浏览器
*取得页面视口（viewport）大小
*clientHeight：视口（viewport）的高度，不包括滚动条、浏览器的标签页、网址输入框、书签栏、这三部分的宽
*clientWidth：视口（viewport）的区域的宽度，不包括滚动条的宽
*/
var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;