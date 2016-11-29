/**
 * Created by XX on 2016/11/27.
 */



function Animation() {

}

//    初始化ppt动画
Animation.prototype.pptInit = function () {
    var nowPage = $('.page');
    nowPage.on('animationEnd webkitAnimationEnd oAnimationEnd', function (event) {
        var now = $(event.target);
        var nextPage = now.next();
        if (nextPage.hasClass('page')) {
            nextPage.css('animation-play-state', 'running').addClass('active');
            now.fadeOut(1000);
        }
    });
};

//    开始ppt动画
Animation.prototype.pptStart = function () {
    $('#page1').css('animation-play-state', 'running').addClass('active');
};

var animation = new Animation();

animation.pptInit();

$(document).ready(function () {
    animation.pptStart();
});

