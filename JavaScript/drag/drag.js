/**
 * Created by luojian on 2016/6/28. 元素的拖拽实现
 */
var params = {
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    flag: false
};
//获取css样式
var getStyle = function (element, key) {
    return element.currentStyle ? element.currentStyle[key] : getComputedStyle(element, false)[key]; 	//样式带有单位(如px)
};

/*
 *拖拽的实现
 *bar：触发拖拽事件的对象
 *target:拖拽的对象
 */
var startDrag = function (bar, target) {
    if (getStyle(target, "left") !== "auto") {
        params.left = getStyle(target, "left");
    }
    if (getStyle(target, "top") !== "auto") {
        params.top = getStyle(target, "top");
    }
    bar.onmousedown = function (event) {
        var e = event ? event : window.event; //兼容IE8
        params.flag = true;
        params.currentX = e.clientX;
        params.currentY = e.clientY;
    };
    document.onmouseup = function () {   //在全局的document级别注册onmouseup事件
        params.flag = false;
        if (getStyle(target, "left") !== "auto") {
            params.left = getStyle(target, "left");
        }
        if (getStyle(target, "top") !== "auto") {
            params.top = getStyle(target, "top");
        }
    };
    document.onmousemove = function (event) { //在全局的document级别注册onmousemove事件
        var e = event ? event : window.event;
        if (params.flag) {
            var nowX = e.clientX;
            var nowY = e.clientY;
            var disX = nowX - params.currentX;
            var disY = nowY - params.currentY;
            target.style.left = parseInt(params.left) + disX + "px";
            target.style.top = parseInt(params.top) + disY + "px";
        }
    }
};