/**
 * Created by XX on 2016/11/24.
 */
$(document).ready(function () {
    //   获取日期将值班表调到当前日期

    var whichDay = new Date().getDay();
    var tabPane = $('#rota .tab-pane').eq(whichDay - 1);

    //   判断值班表是否存在
    if (tabPane.length > 0) {
        var nav = $('#rota .nav-pills li').eq(whichDay - 1);
        tabPane.addClass('in active');
        nav.addClass('active');
    }
});