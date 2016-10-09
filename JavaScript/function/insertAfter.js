//insertAfter(newElement,targetElement)函数:在targetElement的后面添加一个newELement,targetElemrnt和newElement有共同的parent
function insertAfter(newElement,targetELement){
    var parent=targetELement.parentNode;
    if(targetELement==parent[parent.length-1]){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,targetELement.nextSibling);
    }
}
