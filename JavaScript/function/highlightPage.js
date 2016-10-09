//页面突出显示highlightPage()函数
//1)取得导航列表中的所有链接；
//2)循环遍历这些链接
//3）如果发现了与当前URL匹配的链接，为他添加here类
function highlightPage() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var headers = document.getElementsByTagName("header");
    if (headers.length == 0) return false;
    var navs = headers[0].getElementsByTagName("nav");
    if (navs.length == 0) return false;
    var links = navs[0].getElementsByTagName("a");
    var linkurl;
    for (var i = 0; i < links.length; i++) {
        linkurl = links[i].getAttribute("href");
        if (window.location.href.indexOf(linkurl) != -1) {   //window.location.href:页面当前链接
            links[i].className = "here";                     //添加类
        }
    }
}
addLoadEvent(highlightPage);