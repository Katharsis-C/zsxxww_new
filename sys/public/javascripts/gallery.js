;/*!widget/loading.js*/

;/*!widget/animation.js*/
function Animation(){}Animation.prototype.pptInit=function(){var n=$(".page");n.on("animationEnd webkitAnimationEnd oAnimationEnd",function(n){var t=$(n.target),a=t.next();a.hasClass("page")&&(t.fadeOut(900),a.css("animation-play-state","running").addClass("active"))})},Animation.prototype.pptStart=function(){$("#page1").css("animation-play-state","running").addClass("active")};var animation=new Animation;animation.pptInit(),$(document).ready(function(){setTimeout(function(){animation.pptStart()},1e4)});
;/*!widget/fullPage.js*/
$(document).ready(function(){var i=$(".full-img img"),h=$(window);i.css("width",h.width()),i.css("height",h.height()),$(window).resize(function(){i.css("width",h.width()),i.css("height",h.height())})});