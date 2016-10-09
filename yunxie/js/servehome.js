$(document).ready(function(){
	$(".data-collectall img").on('click',function(){
		$(this).attr("src","img/ic_collect_focuse.png");
	});

	// $("#updateButton").on("click",openBrowse());
	// function openBrowse(){   
 //        var ie=navigator.appName=="Microsoft Internet Explorer" ? true : false;   
 //        if(ie){   
 //            document.getElementById("updateButton").click();   
 //            document.getElementById("updateInput").value=document.getElementById("updateButton").value;  
 //        }else{  
 //            var a=document.createEvent("MouseEvents");//FF的处理   
 //            a.initEvent("click", true, true);    
 //            document.getElementById("updateButton").dispatchEvent(a);   
 //        }   
 //    }



    $(".nav-item a").on("click",function(){
        
        $(this).addClass("active").parents(".nav-item").siblings().children("a").removeClass("active");
        
    }); 

    function iFrameHeight() {

        var ifm = document.getElementById("iframepage");

        var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument;

        if (ifm != null && subWeb != null) {

            ifm.height = subWeb.body.scrollHeight;

        }

    }  
    $('.nav-edit a').on('click',function(){
        if($('.home-mask').css('display')=='none'){
            $('.home-mask').show();
        }else{
            $('.home-mask').hide();
        }
        
        return false;
    })
})