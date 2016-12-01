var img = [
    "", "camera", "train", "film", "film", "film", "film2", "map", "sky", "stair", "fengxiang", "cat", "xiangshan",
    "qitou", "baoxiudan", "film", "film", "film", "film", "film", "bridge", "metting1", "metting2", "metting3", "metting4",
    "film", "film", "film", "film3", "film3", "film3", "film3", "film3", "film3", "film3", "tree", "lake", "words"
];
var cacheimg = ["", "camera", "train", "film", "film2", "map", "sky", "stair", "fengxiang", "cat", "xiangshan",
    "qitou", "baoxiudan", "bridge", "film3", "tree", "lake", "words"
];
// var playflage = 1;
// var play = document.getElementById("music");
// var animation = new Animation();


var loaded = 0;
function add(imgages, music) {
    var i = 1;
    imgages.each(function () {
        $(this).prop('src', 'images/' + img[i] + '.png');
        i++;
    });
    if (navigator.userAgent.match(/msie/i) ||
        navigator.userAgent.match(/trident/i) ||
        (navigator.userAgent.indexOf('Safari') != -1 &&
        navigator.userAgent.indexOf('Chrome') == -1)||
        /Edge\/\d./i.test(navigator.userAgent)) {
        music.attr('src', '/resource/music.mp3');
    } else {
        music.attr('src', 'resource/music.ogg');
    }
}
function bindLoad(images, music, animation) {
    images.each(function () {
        $(this).on('load', function () {
            loaded++;
            if (loaded >= 38) {
                if (animation.status == false) {
                    animation.pptStart();
                }
                music[0].play();
            }
        });
    });
    music.on('canplay', function () {
        loaded++;
        if (loaded >= 38) {
            if (animation.status == false) {
                animation.pptStart();
            }
            this.play();
        }
    });
}

$(document).ready(function () {
    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var images = $('.page img');
        var animation = new Animation();
        var music = $('#music');
        var playflage = 1;
        animation.pptInit();
        bindLoad(images, music, animation);
        add(images, music);

        $("#console").click(function () {
            if (playflage === 1) {
                music[0].pause();
                $('#console>button>img').attr('src', 'images/play.png')
            }
            else {
                music[0].play();
                $('#console>button>img').attr('src', 'images/pause.png')
            }
            playflage = ~playflage;
        });

        setTimeout(function () {
            if (animation.status == false) {
                $("#loading").hide();
                $('#tip').fadeIn();
                setTimeout(function () {
                    animation.pptStart();
                }, 2000);
            }
        }, 20000);
    }else {
        $("#loading").hide();
        $('#tip1').fadeIn();
    }
});

// function add(i) {
//     if (i != 21) {
//         if (i < 35) {
//             $('#page' + i + '>*>img').attr('src', 'images/' + img[i] + '.png');
//             i++;
//             add(i);
//         }
//         else {
//             var loading = $("#loading");
//             var music;
//             if (navigator.userAgent.match("Safari") || navigator.userAgent.match("MSIE")) {
//                 music = 'music.mp3';
//             }
//             else {
//                 music = 'music.ogg';
//             }
//             play.setAttribute('src', 'resource/' + music);
//             play.addEventListener("canplay", function () {
//                 loading.hide();
//                 animation.pptInit();
//                 animation.pptStart();
//                 play.play();
//             });
//         }
//     }
//     else {
//         i++;
//         add(i);
//     }
// }
//
// function othercache(i) {
//     $.get('images/metting' + (i + 1) + '.png', function () {
//         $('#page21 >*>img').eq(i).attr('src', 'images/' + img[21][i] + '.png');
//         i++;
//         if (i < 4) {
//             othercache(i);
//         }
//         else {
//             add(1);
//         }
//     })
// }
//
// function Cache(i) {
//     $.get('images/' + cacheimg[i] + '.png', function () {
//         i++;
//         if (i < 18) {
//             Cache(i);
//         }
//         else {
//             othercache(0);
//         }
//     })
// }
//
//
// Cache(1);
//
//
