//该函数带有两个参数：第一个是需要添加新的Class的元素（element），第二个是新的class设置值（value）:给一个元素添加新的class属性
window.onload = function () {
    var banner_width = 550;
    var i = 0;
    var banner = document.getElementsByClassName("banner")[0];
    var img_list = document.getElementById("img-move");
    var banner_num = banner.getElementsByClassName("num")[0];
    var clone = img_list.getElementsByTagName("li")[0].cloneNode(true);
    img_list.appendChild(clone);
    var size = img_list.getElementsByTagName("li").length;
    // console.log(size);'
    for (var j = 0; j < size - 1; j++) {
        var li = document.createElement("li");
        banner_num.appendChild(li);
    }
    num_li = banner_num.childNodes;
    num_li[0].setAttribute("class", "on");

    /*自动轮播*/
    var t = setInterval(function () {
        i++;
        move();
    }, 2000);

    //banner
    banner.addEventListener('mouseover', function () {
        clearInterval(t);
    });
    banner.addEventListener('mouseout', function () {
        t = setInterval(function () {
            i++;
            move();
        }, 2000);
    });

    /*向左的按钮*/
    var btn_1 = document.getElementById("btn_1");
    btn_1.addEventListener('click', function () {
        i--;
        move();
    });

    /*向右的按钮*/
    var btn_2 = document.getElementById("btn_2");
    btn_2.addEventListener('click', function () {
        i++;
        move();
    });

    function move() {
        if (i == size) {
            img_list.style.left = "0px";
            i = 1;
        }
        if (i == -1) {
            img_list.style.left = -(size - 1) * banner_width + "px";
            i = size - 2;
        }
        moveElement("img-move", -i * banner_width, 0, 10);
        if (i == size - 1) {
            for (var m = 0; m < num_li.length; m++) {
                (function (m) {
                    if (m == 0) {
                        num_li[m].setAttribute("class", "on");
                    } else {
                        num_li[m].setAttribute("class", "")
                    }
                    ;
                })(m);
            }
        } else {
            num_li[i].setAttribute("class", "on");
            for (var z = 0; z < num_li.length; z++) {
                (function (z) {
                    if (z == i) {
                        num_li[z].setAttribute("class", "on");
                    } else {
                        num_li[z].setAttribute("class", "")
                    }
                    ;
                })(z);
            }
        }
    }
};

//moveElement(elemTD,final_x,final_y,interval)函数，移动元素节点的位置
//elemeID:打算移动元素的ID名；
//final_x:该元素目的地的“左”位置,为一数值（默认单位为px）；
//final_y:该元素目的地的“上”位置为一数值（默认单位为px）；
//interval:两次移动之间的停顿时间，以单位为毫秒
//函数逻辑
//1)获得元素的当前位置
//2)如果元素已经达到它的目的地，则退出在这个函数
//3)如果元素尚未达到目的地，则把它向目的地移近一点
//4）经过一段时间间隔后出步骤一开始重复以上步骤
function moveElement(elementID, final_x, final_y, interval) {
    //if (!document.getElementById()) return false;
    //if (!document.getElementById(elementID)) return false;
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
    var dist = 0;
    if (xpos == final_x && ypos == final_y) {  //第一次测试当前位置是否处在目的地位置，如果是，则退出这个函数
        return true;                            //如果还没达到目的地，则更新变量xpos和ypos的值
    }
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos) / 10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x) / 10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - ypos) / 10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos - final_y) / 10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";    //添加单位px
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    elem.movement = setTimeout(repeat, interval);  //设置元素属性
}




