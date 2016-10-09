$(function(){
    $(window).bind("load",function () {
    	imgLocation();
    	var dataImg={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"2.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};
    	window.onscroll=function(){
    		 if(scrollside()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("box_cont").appendTo(box);
//                    console.log("./img/"+$(value).attr("src"));
                    $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
    	};
  });
})

//鼠标滚动到最后一张图片的中点时，出现下一批图片
function scrollside(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}


function imgLocation(){
	var $boxWidth=$(".box").eq(0).width(); //取得box的宽
	var  num=Math.floor($("#container").width()/$boxWidth);//取得每行的图片数
	// console.log(num);
	var boxHeightArr=[]; //
	$(".box").each(function(index, element) {
		// console.log(index+"--"+element);
		var  boxHeight=$(".box").eq(index).height();
		if(index<num){
			boxHeightArr[index]=boxHeight;  //获取的一行box的高组成的数组
			// console.log(boxHeight);
		}else{
			var minBoxHeight=Math.min.apply(null,boxHeightArr);
			// console.log(minBoxHeight);
			var minBoxIndex=$.inArray(minBoxHeight,boxHeightArr);
			console.log(minBoxIndex);
			$(element).css({
				"position": "absolute",
				"top": minBoxHeight,
				"left":$(".box").eq(minBoxIndex).position().left
			});
			boxHeightArr[minBoxIndex]+=$(".box").eq(index).height();
		}
	});
}