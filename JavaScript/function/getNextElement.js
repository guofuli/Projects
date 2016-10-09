/**
 * Created by Administrator on 2015/11/2.
 */
//该函数的作用：获取下一个元素节点。 注意：如果要获得的元素节点“p”的下一个元素节点，函数的表达为：getNextElement(p.nextSibling)
function getNextElement(node){
    if (node.nodeType==1) {
        return node;
    }
    if (node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}

