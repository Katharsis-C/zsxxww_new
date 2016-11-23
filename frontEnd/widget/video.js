/**
 * Created by XX on 2016/11/3.
 */

$(document).ready(function () {
    //  控制视频的播放与关闭

    var orbit_btn = $(".orbit button");

    //   判断该页面是否有视频
    if (orbit_btn.length > 0) {
        var shadow = $("#shadow");
        var video = $("#video");
        var iframe = $('#video iframe');

        //   点击观看视频后，显示视频界面及连接优酷
        orbit_btn.click(function () {
            shadow.fadeIn();
            video.fadeIn();
            iframe.attr('src', 'http://player.youku.com/embed/XMTcyNzQ1NjM1Mg==');
        });
        //   点击视频界面周围后隐藏视频界面，停止播放视频，当前的停止方法是：改变iframe的属性，因为找不到优酷的API，以后有好的解决方法可以改进
        shadow.click(function () {
            video.fadeOut();
            shadow.fadeOut();
            iframe.attr('src', '');
        })
    }
});

