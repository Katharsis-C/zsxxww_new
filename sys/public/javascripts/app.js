;/*!widget/goTop.js*/
$(document).ready(function(){var o=$("#go-top"),n=$(window),t=$(this);o.length>0&&(parseInt(t.scrollTop())<130?o.fadeOut():o.fadeIn(),o.click(function(){n.scrollTop(0)}),n.scroll(function(){parseInt(t.scrollTop())<300?o.fadeOut():o.fadeIn()}))});
;/*!widget/video.js*/
$(document).ready(function(){var t=$(".orbit button");if(t.length>0){var e=$("#shadow"),a=$("#video"),c=$("#video iframe");t.click(function(){e.fadeIn(),a.fadeIn(),c.attr("src","http://player.youku.com/embed/XMTcyNzQ1NjM1Mg==")}),e.click(function(){a.fadeOut(),e.fadeOut(),c.attr("src","")})}});
;/*!widget/phone_nav.js*/
$(document).ready(function(){var n=$("header .navbar-header button"),a=$("#phone-shadow");n.length>0&&(parseInt($(this).width())<768&&n.click(function(){n.hasClass("collapsed")?a.fadeIn():a.css("display","none")}),a.click(function(){a.css("display","none"),n.click()}))});
;/*!widget/rota_changetime.js*/
$(document).ready(function(){var a=(new Date).getDay(),e=$("#rota .tab-pane").eq(a-1);if(e.length>0){var t=$("#rota .nav-pills li").eq(a-1);e.addClass("in active"),t.addClass("active")}});