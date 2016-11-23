/**
 * Created by XX on 2016/11/10.
 */
$(document).ready(function () {
    //   置顶功能

    var goTop = $('#go-top');
    var wnd = $(window);
    var doc = $(this);

    //  判断是否存在置顶按钮
    if (goTop.length > 0) {
        //   载入页面后判断是否显示置顶按钮
        parseInt(doc.scrollTop()) < 130 ?
            goTop.fadeOut() :
            goTop.fadeIn();

        //   为置顶按钮绑定点击事件
        goTop.click(function () {
            wnd.scrollTop(0);
        });

        //   判断当前窗口的位置，判断是否显示指定按钮
        wnd.scroll(function () {
            parseInt(doc.scrollTop()) < 300 ?
                goTop.fadeOut() :
                goTop.fadeIn();
        })
    }
});
