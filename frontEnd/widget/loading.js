var img = [
    "", "camera", "train", "film", "film", "film", "film2", "map", "sky", "stair", "fengxiang", "cat", "xiangshan",
    "qitou", "baoxiudan", "film", "film", "film", "film", "film", "bridge", ['metting1', 'metting2', 'metting3', 'metting4'],
    "film", "film", "film", "film3", "film3", "film3", "film3", "film3", "film3", "film3", "tree", "lake", "words"
];

var playflage = 1;
var play = document.getElementById("music");
var animation = new Animation();

function Cache(i) {
    if (i != 21) {
        $.get('images/' + img[i] + '.png', function () {
            $('#page' + i + '>*>img').attr('src', 'images/' + img[i] + '.png');
            i++;
            if (i < 35) {
                Cache(i);
            }
            else {
                var loading = $("#loading");
                var music;
                if (navigator.userAgent.match("Safari") || navigator.userAgent.match("MSIE")) {
                    music = 'music.mp3';
                }
                else {
                    music = 'music.ogg';
                }
                play.setAttribute('src', 'images/' + music);
                play.addEventListener("canplay", function () {
                    loading.hide();
                    animation.pptInit();
                    animation.pptStart();
                    play.play();
                });
            }
        })
    }
    else {
        i++;
        Cache(i);
    }
}

function othercache(i) {
    $.get('images/metting' + (i + 1) + '.png', function () {
        $('#page21 >*>img').eq(i).attr('src', 'images/' + img[21][i] + '.png');
        i++;
        if (i < 4) {
            othercache(i);
        }
    })
}

Cache(1);
othercache(0);
$("#console").click(function () {
    if (playflage === 1) {
        play.pause();
        $('#console>button>img').attr('src', 'images/play.png')
    }
    else {
        play.play();
        $('#console>button>img').attr('src', 'images/pause.png')
    }
    playflage = ~playflage;
});
