/**
 *社团头条动画
 */
$(function() {
    $(".news-card").find('a').mouseenter(function() {
            $(this).find('.news-photo').removeClass("news-photo-scalesm");
            $(this).find('.news-info').removeClass("news-info-scalesm");
            $(this).find('.news-photo').addClass("news-photo-scalelg");
            $(this).find('.news-info').addClass("news-info-scalelg");
        })
        .mouseup(function() {
            $(this).find('.news-photo').addClass("news-photo-scalelg");
            $(this).find('.news-info').addClass("news-info-scalelg");
        })
        .mouseleave(function() {
            $(this).find('.news-photo').removeClass("news-photo-scalelg");
            $(this).find('.news-info').removeClass("news-info-scalelg");
            $(this).find('.news-photo').addClass("news-photo-scalesm");
            $(this).find('.news-info').addClass("news-info-scalesm");
        });
})


/**
 *社团活动动画
 */
$(function() {
    $(".activity-card").mouseenter(function() {
            $(this).removeClass("activity-card-pulse");
            $(this).addClass('activity-card-tada');
        })
        .mouseup(function() {
            $(this).addClass('activity-card-tada');
        })
        .mouseleave(function() {
            $(this).removeClass("activity-card-tada");
            $(this).addClass("activity-card-pulse");
        });
})

/**
 *本校社团动画
 */
$(function() {
    clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (clientWidth > 768) {
        $(".com").mouseover(function() {
            $(this).find(".overlay").stop().css({
                opacity: '0.8',
                display: "block"
            }).fadeIn(400);
            $(this).find(".fui-plus-circle").stop().animate({
                fontSize: "50px",
            }, 200)
        }).stop().mouseleave(function() {
            $(this).find(".fui-plus-circle").stop().animate({
                fontSize: "0px",
            }, 200)
            $(".overlay").stop().fadeOut(400, function() {
                $(this).css({ display: "none" })
            });

        });
    } else {
        $(".com").click(function() {
            if ($(this).find(".overlay").css("display") == "none") {
                $(this).find(".overlay").stop().css({
                    opacity: '0.8',
                    display: "block"
                }).fadeIn(400);
                $(this).find("p").css({ display: "none" });
                $(this).find(".fui-plus-circle").css({
                    top: "40px"
                }).stop().animate({
                    fontSize: "50px",
                }, 200);
            } else {
                $(this).find(".overlay").css({ display: "none" });
            }
        })
    }
})



$(function() {

})
$(function() {
    //圆形加号按钮
    $(".joinButton").on("click", function() {
            //弹出框更新数据
            var corporationName = $(this).parent().parent().next().text();
            // console.log(corporationName);
            var corporationLink = $(this).parent().parent().next().attr("href");
            // console.log(corporationLink);
            var corporationType = $(this).parent().parent().parent().next().text();
            // console.log(corporationType);
            var corporationInfo = $(this).parent().parent().parent().next().next().text();
            // console.log(corporationInfo);
            var logoImg= $(this).parent().parent().find("img").attr("src");
            // console.log(logoImg);
            $('.corporation-title').text(corporationName);
            $('.corporation-info').find('p').text(corporationInfo);
            $('.corporation-logo').find('img').attr("src",logoImg)
            $('#type').text(corporationType)
;            //社团详情按钮
            $('#corporation-add').find("#detail-btn").on("click", function() {
                    window.location.href =corporationLink;
            })
            //弹出动画
            $('#corporation-add').css({
                display: "block",
            });
            $("#corporation-introduction").addClass('corporation-introduction-bounceIn');
        })
    //申请加入按钮
    $('#corporation-add').find("#join-btn").on("click", function() {
            $("#corporation-introduction").toggleClass('corporation-introduction-bounceIn').toggleClass('corporation-introduction-bounceOut');
            $('#corporation-add').delay(1000).animate({
                opacity: "0"
            }, 400, function() {
                $('#corporation-add').css({
                    display: "none",
                    opacity: "1"
                });
                $("#corporation-introduction").toggleClass('corporation-introduction-bounceOut');
            });
            //申请成功提示
            $("body").append("<p id='tips'>你的申请已提交，请耐心等待</p>");
            $("#tips").addClass('join-tips').delay(1000).hide(400, function() {
                $("#tips").remove();
            })
        })
        //退出按钮
    $('#corporation-add').find("#exit-btn").on("click", function() {
        $("#corporation-introduction").toggleClass('corporation-introduction-bounceIn').toggleClass('corporation-introduction-bounceOut');
        $('#corporation-add').delay(1000).animate({
            opacity: "0"
        }, 400, function() {
            $('#corporation-add').css({
                display: "none",
                opacity: "1"
            });
            $("#corporation-introduction").toggleClass('corporation-introduction-bounceOut');
        })
    })
})
