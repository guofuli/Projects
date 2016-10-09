/*
*删除指定名称的cookie
*name：要删除的cookie名
*/
function deleteCookie(name){ 
  var date=new Date(); 
  date.setTime(date.getTime()-10000); 
  document.cookie=name+"=v; expires="+date.toGMTString(); 
} 