/*
*更改或添加cookie
* name：要添加的cookie名
* value:要添加的cookie值
* expiresDay：设置过期时间(单位：天),该参数可省略
* */
function setCookie(name,value,expiredays){
            var exdate=new Date()；
            exdate.setDate(exdate.getDate() + expiredays);
            document.cookie=name+ "=" +escape(value)+
                    ((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
        }