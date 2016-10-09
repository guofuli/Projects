/*
*兼容各浏览器
* document.body.scrollTop   兼容谷歌浏览器
*document.documentElement.scrollTop  兼容IE浏览器
*window.pageYOffset  兼容火狐浏览器
*scrollTop：页面利用滚动条滚动到下方时，隐藏在滚动条上方的页面的高度；
*scrollLeft：页面利用滚动条滚动到右侧时，隐藏在滚动条左侧的页面的宽度；
*/
var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;