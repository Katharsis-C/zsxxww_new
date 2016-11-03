/**
 * Created by XX on 2016/11/4.
 */
$(document).ready(function () {
    if (parseInt($(window).width()) < 768){
        $('header .navbar-header button').click(function () {
            if ($('header button').hasClass('collapsed')){
                $('#phone-shadow').fadeIn();
            } else {
                $('#phone-shadow').css('display','none');
            }
        })
    }

    $("#phone-shadow").click(function () {
        $('#phone-shadow').css('display','none');
        $('header .navbar-header button').click();
    })
});