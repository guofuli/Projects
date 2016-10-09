$(function() {
    $('img').each(function() {
        var $dataSrc = $(this).attr("data-src");
        var $src = $(this).attr("src");
        $src = $dataSrc;
        $(this).attr("src", $src);
    })
})
