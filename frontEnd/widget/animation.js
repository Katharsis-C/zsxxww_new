/**
 * Created by XX on 2016/11/27.
 */



function Animation() {
    this.status = false;
}

//    初始化ppt动画
Animation.prototype.pptInit = function () {
    var nowPage = $('.page');
    nowPage.on('animationEnd webkitAnimationEnd oAnimationEnd', function (event) {
        var now = $(event.target);
        var nextPage = now.next();
        if (nextPage.hasClass('page')) {
            now.fadeOut(900);
            nextPage.css('animation-play-state', 'running').addClass('active');
        }
    });
};

//    开始ppt动画
Animation.prototype.pptStart = function () {
    // var tip2 = $('#tip2');
    // var console = $("#console");
    this.status = true;
    $('#tip').fadeOut(1000);
    setTimeout(function () {
        $("#loading").hide();
        $('#tip2').fadeIn();
        // $('#page1').css('animation-play-state', 'running').addClass('active');
        // $("#loading").hide();
    }, 1000);
};


/*$(document).ready(function () {
 setTimeout(function () {
 animation.pptStart();
 }, 10000);
 });*/

