// JavaScript Document
$(".mydropdown").hover(
	function(){$(this).find(".mydropdown-menu").show();}, 
	function(){$(this).find(".mydropdown-menu").hide();}
);
$(".input-search .mydropdown-menu>li").click(function(e) {
    var value = $(this).html() + '<img src="img/ic_down_blue.png" alt=""/>';
	$(".input-search").find(".mydropdown span").html(value);
	$(".input-search .mydropdown-menu").hide();
});

$(".nav-category-item").hover(
	function(){$(this).find(".nav-category-layer").show();}, 
	function(){$(this).find(".nav-category-layer").hide();}
);
$('.carousel').carousel();
