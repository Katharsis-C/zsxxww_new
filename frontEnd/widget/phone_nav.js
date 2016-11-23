/**
 * Created by XX on 2016/11/4.
 */
$(document).ready(function () {
    //   移动端导航栏的点击导航栏以外区域后关闭导航栏的实现

    var nav_button = $('header .navbar-header button');
    var phone_shadow = $('#phone-shadow');

    //   判断移动端导航栏是否存在
    if (nav_button.length > 0) {
        //    判断当前窗口的宽度是不是小于768
        if (parseInt($(this).width()) < 768) {
            //   点击导航栏按钮的事件
            nav_button.click(function () {
                //    当目前导航栏是collapsed状态时显示不可见的阴影，不是collapsed状态时让阴影消失
                if (nav_button.hasClass('collapsed')) {
                    phone_shadow.fadeIn();
                } else {
                    phone_shadow.css('display', 'none');
                }
            })
        }

        //   阴影点击事件，改变导航栏状态
        phone_shadow.click(function () {
            phone_shadow.css('display', 'none');
            nav_button.click();
        })
    }
});