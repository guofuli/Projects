//检测弹出窗口是否被屏蔽
var blocked=false;
tyr{
	var wroxWin=window.open("http://www.wrox.com","topForm");
	if(wroxWin==null){blocked=true;}
	// 当浏览器内置的屏蔽程序阻止弹出窗口时，window.open()会返回null,当浏览器扩展或其他程序阻止弹出窗口时，window.open()会抛出Error;
}catch(ex){
	blocked=true;
}
if (blocked==true) {alert("弹出窗口被屏蔽")};