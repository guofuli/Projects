//addLoadEvent(dosomething)函数===window.onload时调用dosomething函数;用法 addLoadEvent(func1);addLoadEvent(func2);
function addLoadEvent(func){
    var oldonload=window.onload;
   if(typeof window.onload!="function"){
       window.onload=func;
   }
    else{
       window.onload=function(){
           oldonload();
           func()
       }
   }
}