/*先序遍历*/
function preOrder(node) {
    if (node != null) {
        showQueue.push(node);
        arguments.callee(node.firstElementChild);
        arguments.callee(node.lastElementChild);
        // console.log(showQueue);
    }
}
/*中序遍历*/
function inOrder(node) {
    if (node != null) {
        arguments.callee(node.firstElementChild);
        showQueue.push(node);
        arguments.callee(node.lastElementChild);
        // console.log(showQueue);
    }
}
/*后序遍历*/
function postOrder(node) {
    if (node != null) {
        arguments.callee(node.firstElementChild);
        arguments.callee(node.lastElementChild);
        showQueue.push(node);
        // console.log(showQueue);
    }
}
/*渲染*/
function render() {
    head = showQueue.shift();
    // console.log(head);
    if (head) {
        head.style.backgroundColor = "#0000ff"; //背景变为蓝色
        timer = setTimeout(function() {
            head.style.backgroundColor = "#fff"; //1s后变为背景白色
            render(); //递归
        }, 1000);
    }
}
var btns = document.getElementsByTagName("button");
var showQueue = [],head,timer;
var rootNode = document.getElementsByClassName("one")[0];
//绑定按钮点击事件
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        if (showQueue.length > 0) { //如果队列非空即正在遍历
            head.style.backgroundColor = "#fff"; //清除残留蓝色
            showQueue = []; //清空队列
            clearTimeout(timer); //清除定时器
        }
        switch (this.getAttribute("id")) {
            case "preOrder":
                preOrder(rootNode);
                break;
            case "inOrder":
                inOrder(rootNode);
                break;
            case "postOrder":
                postOrder(rootNode);
                break;
        }
        render();
    }, false)
}
