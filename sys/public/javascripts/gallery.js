;/*!widget/animation.js*/
function Animation(){this.status=!1}Animation.prototype.pptInit=function(){var t=$(".page");t.on("animationEnd webkitAnimationEnd oAnimationEnd",function(t){var n=$(t.target),i=n.next();i.hasClass("page")&&(n.fadeOut(900),i.css("animation-play-state","running").addClass("active"))})},Animation.prototype.pptStart=function(){this.status=!0,$("#tip").fadeOut(1e3),setTimeout(function(){$("#loading").hide(),$("#tip2").fadeIn()},1e3)};
;/*!widget/loading.js*/
function add(i){var m=1;i.each(function(){$(this).prop("src","images/"+img[m]+".png"),m++})}function bindLoad(i,m,t){1==isIOS&&(loadSum=37),i.each(function(){$(this).on("load",function(){loaded++,loaded>=loadSum&&0==t.status&&t.pptStart()})}),m.on("canplay",function(){loaded++,loaded>=loadSum&&0==t.status&&t.pptStart()})}var img=["","camera_m","train_m","film_m","film_m","film_m","film2_m","map_m","sky_m","stair_m","fengxiang_m","cat_m","xiangshan_m","qitou_m","baoxiudan_m","film_m","film_m","film_m","film_m","film_m","bridge_m","metting1_m","metting2_m","metting3_m","metting4_m","film_m","film_m","film_m","film3_m","film3_m","film3_m","film3_m","film3_m","film3_m","film3_m","tree_m","lake_m","words_m"],loaded=0,loadSum=38,isIOS=!1;$(document).ready(function(){if(/iPhone|iPod|/i.test(navigator.userAgent)&&(isIOS=!0),/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var i=$(".page img"),m=new Animation,t=$("#music");m.pptInit(),bindLoad(i,t,m),add(i),$("#tip2").one("click",function(){t[0].loop=!0,t[0].play(),$("#tip2").fadeOut(),$("#console").fadeIn(),$("#page1").css("animation-play-state","running").addClass("active")});var a=1;$("#console").click(function(){1===a?(t[0].pause(),$("#console>button>img").attr("src","images/play.png")):(t[0].play(),$("#console>button>img").attr("src","images/pause.png")),a=~a}),setTimeout(function(){0==m.status&&($("#loading").hide(),$("#tip").fadeIn(),setTimeout(function(){m.pptStart()},2e3))},2e4)}else $("#loading").hide(),$("#tip1").fadeIn()});
;/*!widget/fullPage.js*/
$(document).ready(function(){var i=$(".full-img img"),h=$(window);i.css("width",h.width()),i.css("height",h.height()),$(window).resize(function(){i.css("width",h.width()),i.css("height",h.height())})});