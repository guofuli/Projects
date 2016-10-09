/*
*获得指定名称的cookie值
*name:要获取Cookie值的名称
*/
function getCookie(name){
            if (document.cookie.length>0){
                var start = document.cookie.indexOf(name + "=");
                if (start!=-1){
                    start = start + name.length + 1;
                    var end = document.cookie.indexOf(";",start);
                    if (end==-1) {
                        end = document.cookie.length;
                        return unescape(document.cookie.substring(start, end));
                    }
                }
            }
            return "";
        }
