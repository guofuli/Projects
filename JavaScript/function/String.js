    /*去掉字符串左右空格*/
    String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        }