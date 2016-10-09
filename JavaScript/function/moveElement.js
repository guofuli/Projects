//moveElement(elementID,final_x,final_y,interval)函数，移动元素节点的位置
//elementID:打算移动元素的ID；
//final_x:该元素目的地的“左”位置,为一数值（默认单位为px）；
//final_y:该元素目的地的“上”位置为一数值（默认单位为px）；
//interval:两次移动之间的停顿时间，以单位为毫秒
//函数逻辑
//1)获得元素的当前位置
//2)如果元素已经达到它的目的地，则退出在这个函数
//3)如果元素尚未达到目的地，则把它向目的地移近一点
//4）经过一段时间间隔后出步骤一开始重复以上步骤
function moveElement(elementID,final_x,final_y,interval) {
    if (!document.getElementById()) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement) {              //防止积累
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);  //提取出元素当前位置的“左”值
    var ypos = parseInt(elem.style.top);    //提取出元素当前位置的“上”值
    var dist=0;
    if (xpos == final_x && ypos == final_y) {  //第一次测试当前位置是否处在目的地位置，如果是，则退出这个函数
        return true;                            //如果还没达到目的地，则更新变量xpos和ypos的值
    }
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos - final_y)/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";    //添加单位px
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);  //设置元素属性
}

//注意：容器div的position应设为relative，overflow应设为hidden；图片img的position应设为absolute；