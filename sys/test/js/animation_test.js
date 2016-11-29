/**
 * Created by XX on 2016/11/27.
 */



function Animation() {

}

Animation.prototype.pptInit = function () {
    var nowPage = $('.page');
    nowPage.on('transitionEnd webkitTransitionEnd oTransitionEnd', function (event) {
        var nextPage = $(event.target).next();
        nextPage.addClass('active');
    })
};

Animation.prototype.pptStart = function () {
    $('#page1').addClass('active');
};


var animation = new Animation();
var div = $('div').eq(0);
var div1 = $('div').eq(1);
var div2 = $('div').eq(2);
var div3 = $('div').eq(3);
var div4 = $('div').eq(4);

QUnit.test('Animation test', function (assert) {
    var done = assert.async(10);

    animation.pptInit();
    animation.pptStart();

    assert.equal(div1.css('height'), '0px', 'first one pass!');
    setTimeout(function () {
        assert.equal(div1.css('height'), '10px', 'first two pass!')
        done();
    }, 1500);

    setTimeout(function () {
        assert.equal(div2.css('height'), '0px', 'second one pass!')
        done();
    }, 900);
    setTimeout(function () {
        assert.equal(div2.css('height'), '10px', 'second two pass!')
        done();
    }, 2500);

    setTimeout(function () {
        assert.equal(div3.css('height'), '0px', 'three one pass!')
        done();
    }, 1900);
    setTimeout(function () {
        assert.equal(div3.css('height'), '10px', 'three two pass!')
        done();
    }, 3500);

    setTimeout(function () {
        assert.equal(div4.css('height'), '0px', 'four one pass!')
        done();
    }, 2800);
    setTimeout(function () {
        assert.equal(div4.css('height'), '10px', 'four two pass!')
        done();
    }, 4500);

    // setTimeout(function () {
    //     assert.equal(div4.css('height'), '0px', 'five one pass!')
    //     done();
    // }, 3800);
    // setTimeout(function () {
    //     assert.equal(div4.css('height'), '10px', 'five two pass!')
    //     done();
    // }, 5500);
});


