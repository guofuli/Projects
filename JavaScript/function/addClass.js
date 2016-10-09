
//该函数带有两个参数：第一个是需要添加新的Class的元素（element），第二个是新的class设置值（value）:给一个元素添加新的class属性
function addClass(element,value){
    if(!element.className){
        element.className=value;
    }
//    如果已有class属性，则再次基础上添加
    else{
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}
