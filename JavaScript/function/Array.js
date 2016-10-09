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
    /*创建一个矩阵
     *rows:矩阵的行数
     *cols:矩阵的列数
     *initial:矩阵中元素的初始值
    **/
    Array.matrix=function(rows,cols,initial){
        var arr=[];
        for(var i=0;i<rows;i++){
            var a=[];
            for(var j=0;j<cols;j++){
                a[j]=initial;
            }
            arr[i]=a;
        }
        return arr;
    }
