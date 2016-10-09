    /*去掉字符串左右空格*/
    String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        }
    /*数组去重*/
    Array.prototype.unique = function() {
            var n = {};
            var r = [];
            for (var i = 0; i < this.length; i++) {
                if (!n[this[i]]) {
                    n[this[i]] = true;
                    r.push(this[i]);
                    n
                }
            }
            return r;
        }
    /*过滤空数组*/
    Array.prototype.filter = function() {
            var n = [];
            for (var i = 0; i < this.length; i++) {
                if (this[i] !== "") {
                    n.push(this[i]);
                }
            }
            return n;
        }
    /*数组长度超过10时，去掉最前面的*/
    Array.prototype.delete = function() {
            if (this.length > 10) {
                this.splice(0, this.length - 10);
            }
            return this;
        }
    
    /*获取hobby输入,组成数组、去重、过滤空数组、trim操作并添加到数组hobbyArr,当数组长度大于10，去掉前面部分*/
    function getHobbyArr(hobbyInput) {
        var value = hobbyInput.value;
        var newHobbyArr = value.split(/\s|,|;|\u3001|\003B/g);
        for (var i = 0; i < newHobbyArr.length; i++) {
            newHobbyArr[i] = newHobbyArr[i].trim(); //trim
        }
        hobbyArr = hobbyArr.concat(newHobbyArr);
        hobbyArr = hobbyArr.unique().filter(); //去重、过滤
        hobbyArr = hobbyArr.delete();//长度超过10去掉前面的
        console.log("hobbyArr：",hobbyArr,"长度：",hobbyArr.length);
    }
    /*获取tag输入去掉字符串左右空格并添加到数组tagArr,去重、过滤,当数组长度大于10，去掉前面部分*/
    function getTagArr(tagInput) {
        var value = tagInput.value;
        tagArr.push(value.trim());
        tagArr= tagArr.unique().filter(); //去重、过滤
        tagArr = tagArr.delete();//长度超过10去掉前面的
        console.log("tagArr：", tagArr, "长度：", tagArr.length);
    }
    /*渲染*/
    function createElem(parent, arr) {
        parent.innerHTML = "";
        for (var i = 0; i < arr.length; i++) {
            var li = document.createElement("li");
            li.setAttribute("class", "block");
            li.innerHTML = arr[i];
            parent.appendChild(li);
        };
    }
    /*删除节点*/
     function deleteElem(parent,arr){
        var lists = parent.getElementsByTagName("li");
        for (var i = 0; i < lists.length; i++) {
            (function(i) {
                lists[i].onmouseover = function() { //删除爱好事件
                    var oriValue=this.innerHTML;
                    this.innerHTML = "删除" + oriValue;
                    this.style.backgroundColor = "blue";
                    this.onclick = function() {
                       parent.removeChild(this); //移除节点
                       for(var j=0;j<arr.length;j++){
                          if(arr[j]==oriValue){
                            arr.splice(j,1); //将数组中对应的内容删除
                          }
                       }
                       // console.log(arr);
                    }
                };
                lists[i].onmouseout=function(){
                    this.innerHTML=this.innerHTML.slice(2);
                    this.style.backgroundColor = "red";
                }
            })(i);
        }
     }
    /* 绑定事件*/
    var tagArr = []; //定义一个数组，用来保存tag
    var hobbyArr = []; //定义一个数组，用来保存hobby
    var tagInput = document.getElementById("tagInput");
    var hobbyInput = document.getElementById("hobbyInput")
    var addHobbyBtn = document.getElementById("addHobby");
    var tagBlock = document.getElementById("tagBlock");
    var hobbyBlock = document.getElementById("hobbyBlock");
    //绑定按钮点击事件
    addHobbyBtn.addEventListener("click", function() {
        getHobbyArr(hobbyInput);
        createElem(hobbyBlock, hobbyArr);
        deleteElem(hobbyBlock,hobbyArr);
    }, false);
    //绑定输入框键盘事件
    tagInput.addEventListener("keyup",function(event){
        //增加对逗号的识别
        var comma = /^.+，$/;
        if (tagInput.value.search(comma) + 1) {
            var commaTrue = true;
        }
        //以逗号、空格、回车、顿号结尾，触发添加Tag事件
        if (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 188 || commaTrue) {
            getTagArr(tagInput);
            createElem(tagBlock,tagArr);
            tagInput.value="";  //清空输入框
        };
        deleteElem(tagBlock,tagArr);
    },false)
