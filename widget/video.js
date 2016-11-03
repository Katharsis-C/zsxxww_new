/**
 * Created by XX on 2016/11/3.
 */

$(document).ready(function () {


    //   招新视频播放和关闭
    $(".orbit button").click(function () {
        $("#shadow").fadeIn();
        $("#video").fadeIn();
        $('#video iframe').attr('src','http://player.youku.com/embed/XMTcyNzQ1NjM1Mg==');
    });
    $('#shadow').click(function () {
        $('#video').fadeOut();
        $('#shadow').fadeOut();
        $('#video iframe').attr('src','');
    })
});

