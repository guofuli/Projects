$(document).ready(function(){
	$(".service-navitem a").on("click",function(){
		
		$(this).parents(".service-nav").addClass("service-nav-active").siblings().removeClass("service-nav-active");
		var link=$(this).attr("href");
		
		$(".service-right iframe").attr("src",link);
		return false;
	});
});