    /*获取并判断输入是否符合要求,符合要求则返回输入数字所租成的数组*/
    function getNumArr(inpElem) {
        var value = inpElem.value;
        var inNumArr = value.split(/\s|,|;|\u3001|\003B/g);
        // console.log(inNumArr);
        var reg = new RegExp("^[0-9]*$");
        var count = 0;
        for (var i = 0; i < inNumArr.length; i++) {
            if (inNumArr[i] == "" || !reg.test(inNumArr[i]) || inNumArr[i] < 10 || inNumArr[i] > 100) {
                alert("请输入一个或多个10~100范围内的整数，以逗号、空格、回车、顿号等作为分隔符");
                count++;
            }
        }
        if (count == 0) {
            return inNumArr;
        } else {
            return false;
        }
    }
    /*冒泡排序（升序）*/
    function sort(arr) {
        for (var i = 0; i < arr.length - 1; i++) { //排arr.length-1趟
            for (var j = 0; j < arr.length - i - 1; j++) { //每趟比较（arr.length-第几趟-1）次
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                };
            }
        }
        return arr;
    }
    /*创建子元素*/
    function createElem(parent, arr) {
        parent.innerHTML = "";
        for (var i = 0; i < arr.length; i++) {
            var li = document.createElement("li");
            li.setAttribute("class", "block");
            li.style.height = arr[i] + "px";
            li.style.marginTop = 100 - arr[i] + "px";
            li.innerHTML = arr[i];
            parent.appendChild(li);
        };
    }
    /*查询操作*/
    function search() {
        var value = document.getElementById("searchCont").value;
        var reg = new RegExp("^[0-9]*$");
        if (value == "" || !reg.test(value) || value < 10 || value > 100) {
            alert("请输入一个10-100的整数进行查询");
        } else {
            var liArr = document.getElementById("blockArray").getElementsByTagName("li");
            var count = 0;
            console.log(value);
            for (key in liArr) {
                if (liArr[key].innerHTML == value) {
                    liArr[key].style.backgroundColor = "blue";
                    count++;
                };
            }
            if (count == 0) {
                alert("未查询到，请重新输入");
            } else {
                alert("蓝色背景为查询到的");
            }
        }
    }
    /*数组操作*/
    function arrOperate(inNumArr, arr, operate) {
        switch (operate) {
            case "unshift":
                return inNumArr.concat(arr);
            case "push":
                return arr.concat(inNumArr);
            case "shift":
                arr.shift();
                return arr;
            case "pop":
                arr.pop();
                return arr;
            case "sort":
                return sort(arr);
            default:
                return arr;
                break;
        }
    }
    /*按钮操作*/
    function operateBtn() {
        var btnId = this.getAttribute("id");
        console.log(btnId);
        var inNumArr = getNumArr(inpElem);
        if (inNumArr == false) {
            return; //如果不符合要求，跳出程序
        } else {
            if (btnId == "search") {
                search();
            } else {
                arr = arrOperate(inNumArr, arr, btnId);
                console.log(arr);
                createElem(blockArray, arr);
            }
        };
    }
    /* 绑定事件*/
    var arr = [];
    var inpElem = document.getElementById("num");
    inpElem.focus(); //自动获取焦点
    var buttons = document.getElementsByTagName("button");
    var blockArray = document.getElementById("blockArray");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", operateBtn, false);
    }
