/**
 * Created by XX on 2016/11/27.
 */

function pos(type, step, ele) {
    if (_.isNumber(step)) {
        ele.css(type, _.add(_.parseInt(ele.css(type)), step) + 'px');
    }
}

function inRange(number, start, range) {
    range = Math.abs(range);
    return _.inRange(number, start, start + range) || _.inRange(number, start - range, start);
}

function posUntil(type, step, end, timeout, ele) {
    if (_.isNumber(step) &&
        _.isNumber(end) &&
        Math.abs(end - parseInt(ele.css(type))) >
        Math.abs(end - _.add(_.parseInt(ele.css(type)), step))) {

        var operate = operator[type](step);

        setTimeout(function () {
            if (inRange(parseInt(ele.css(type)), end, step)) {
                ele.css(type, end + 'px');
                clearTimeout(arguments.callee, timeout);
            } else {
                operate(ele);
                setTimeout(arguments.callee, timeout);
            }
        }, timeout);

    } else if (_.isNumber(end)) {
        ele.css(type, end + 'px');
    }
}

var curried_pos = _.curry(pos);
var curried_posUntil = _.curry(posUntil);

var operator = {
    left: curried_pos('left'),
    right: curried_pos('right'),
    top: curried_pos('top'),
    bottom: curried_pos('bottom'),
    leftUntil: curried_posUntil('left'),
    rightUntil: curried_posUntil('right'),
    topUntil: curried_posUntil('top'),
    bottomUntil: curried_posUntil('bottom')
};


var div = $('div').eq(0);
var div1 = $('div').eq(1);
var div2 = $('div').eq(2);
var div3 = $('div').eq(3);
var div4 = $('div').eq(4);
//   对left的测试
QUnit.test('left test', function (assert) {
    div.css('left', 0);

    operator.left(15, div);
    assert.equal(div.css('left'), '15px', "left 15px pass!");

    operator.left(-15, div);
    assert.equal(div.css('left'), '0px', "left -15px pass!");

    operator.left(0, div);
    assert.equal(div.css('left'), '0px', "left 0px pass!");

    operator.left(-0, div);
    assert.equal(div.css('left'), '0px', "left -0px pass!");

    operator.left(undefined, div);
    assert.equal(div.css('left'), '0px', "left undefined pass!");

    operator.left(null, div);
    assert.equal(div.css('left'), '0px', "left null pass!");

    operator.left('a', div);
    assert.equal(div.css('left'), '0px', "left 'a' pass!");

});

//   对right的测试
QUnit.test('right test', function (assert) {
    div.css('right', 0);

    operator.right(-15, div);
    assert.equal(div.css('right'), '-15px', "right -15px pass!");

    operator.right(15, div);
    assert.equal(div.css('right'), '0px', "right 15px pass!");

    operator.right(0, div);
    assert.equal(div.css('right'), '0px', "right 0px pass!");

    operator.right(-0, div);
    assert.equal(div.css('right'), '0px', "right -0px pass!");

    operator.right(undefined, div);
    assert.equal(div.css('right'), '0px', "right undefined pass!");

    operator.right(null, div);
    assert.equal(div.css('right'), '0px', "right null pass!");

    operator.right('a', div);
    assert.equal(div.css('right'), '0px', "right 'a' pass!");

});

//   对top的测试
QUnit.test('top test', function (assert) {
    div.css('top', 0);

    operator.top(-15, div);
    assert.equal(div.css('top'), '-15px', "top -15px pass!");

    operator.top(15, div);
    assert.equal(div.css('top'), '0px', "top 15px pass!");

    operator.top(0, div);
    assert.equal(div.css('top'), '0px', "top 0px pass!");

    operator.top(-0, div);
    assert.equal(div.css('top'), '0px', "top -0px pass!");

    operator.top(undefined, div);
    assert.equal(div.css('top'), '0px', "top undefined pass!");

    operator.top(null, div);
    assert.equal(div.css('top'), '0px', "top null pass!");

    operator.top('a', div);
    assert.equal(div.css('top'), '0px', "top 'a' pass!");

});

//   对bottom的测试
QUnit.test('bottom test', function (assert) {
    div.css('bottom', 0);

    operator.bottom(-15, div);
    assert.equal(div.css('bottom'), '-15px', "bottom -15px pass!");

    operator.bottom(15, div);
    assert.equal(div.css('bottom'), '0px', "bottom 15px pass!");

    operator.bottom(0, div);
    assert.equal(div.css('bottom'), '0px', "bottom 0px pass!");

    operator.bottom(-0, div);
    assert.equal(div.css('bottom'), '0px', "bottom -0px pass!");

    operator.bottom(undefined, div);
    assert.equal(div.css('bottom'), '0px', "bottom undefined pass!");

    operator.bottom(null, div);
    assert.equal(div.css('bottom'), '0px', "bottom null pass!");

    operator.bottom('a', div);
    assert.equal(div.css('bottom'), '0px', "bottom 'a' pass!");

});

//  对leftUntil的测试
QUnit.test("leftUntil test", function (assert) {
    div.css('left', 0);
    div1.css('left', 0);
    div2.css('left', 0);
    div3.css('left', 0);
    div4.css('left', 0);
    var id, temp1,temp2,temp3,temp4,temp6, cach1, cach2,cach3,cach4,cach5;
    var done = assert.async(5);

    temp1 = 10;
    operator.leftUntil(10, 100, 100, div);
    cach1 = div.css('left');
    setTimeout(function () {
        if (div.css('left') != '100px') {
            if (div.css('left') != cach1) {
                assert.equal(div.css('left'), temp1 + 'px', 'leftUntil one ' + temp1 / 10 + ' pass!');
                done();
                temp1 += 10;
                cach1 = div.css('left');
            }
            setTimeout(arguments.callee, 100);
        } else {
            assert.equal(div.css('left'), 100 + 'px', 'leftUntil one ' + temp1 / 10 + ' pass!');
            done();
            clearTimeout(arguments.callee, 100);
        }
    }, 100);

    temp2 = -10;
    operator.leftUntil(-10, -100, 150, div1);
    cach2 = div1.css('left');
    setTimeout(function () {
        if (div1.css('left') != '-100px') {
            if (div1.css('left') != cach2) {
                assert.equal(div1.css('left'), temp2 + 'px', 'leftUntil two ' + (-temp2 / 10) + ' pass!');
                temp2 -= 10;
                done();
                cach2 = div1.css('left');
            }
            setTimeout(arguments.callee, 150);
        } else {
            assert.equal(div1.css('left'), -100 + 'px', 'leftUntil two ' + (-temp2 / 10) + ' pass!');
            done();
            clearTimeout(arguments.callee, 150);
        }
    }, 150);

    temp3 = 0;
    operator.leftUntil(10, -100, 150, div2);
    cach3 = div2.css('left');
    setTimeout(function () {
        if (div2.css('left') != '-100px') {
            if (div2.css('left') != cach3) {
                assert.equal(div2.css('left'), temp3 + 'px', 'leftUntil three ' + (-temp3 / 10) + ' pass!');
                temp3 -= 10;
                done();
                cach3 = div2.css('left');
            }
            setTimeout(arguments.callee, 150);
        } else {
            assert.equal(div2.css('left'), -100 + 'px', 'leftUntil three ' + (-temp3 / 10) + ' pass!');
            done();
            clearTimeout(arguments.callee, 150);
        }
    }, 150);

    temp4 = 0;
    operator.leftUntil(-10, 100, 150, div3);
    cach4 = div3.css('left');
    setTimeout(function () {
        if (div3.css('left') != '100px') {
            if (div3.css('left') != cach3) {
                assert.equal(div3.css('left'), temp4 + 'px', 'leftUntil four ' + (-temp4 / 10) + ' pass!');
                temp4 -= 10;
                done();
                cach4 = div3.css('left');
            }
            setTimeout(arguments.callee, 150);
        } else {
            assert.equal(div3.css('left'), 100 + 'px', 'leftUntil four ' + (-temp4 / 10) + ' pass!');
            done();
            clearTimeout(arguments.callee, 150);
        }
    }, 150);
});


//  对rightUntil的测试
QUnit.test("rightUntil test", function (assert) {
    div.css('right', 0);
    div1.css('right', 0);
    div2.css('right', 0);
    div3.css('right', 0);
    div4.css('right', 0);
    var id, temp1,temp2,temp3,temp4,temp6, cach1, cach2,cach3,cach4,cach5;
    var done = assert.async(5);

    temp1 = 10;
    operator.rightUntil(10, 100, 100, div);
    cach1 = div.css('right');
    setTimeout(function () {
        if (div.css('right') != '100px') {
            if (div.css('right') != cach1) {
                assert.equal(div.css('right'), temp1 + 'px', 'rightUntil one ' + temp1 / 10 + ' pass!');
                done();
                temp1 += 10;
                cach1 = div.css('right');
            }
            setTimeout(arguments.callee, 100);
        } else {
            assert.equal(div.css('right'), 100 + 'px', 'rightUntil one ' + temp1 / 10 + ' pass!');
            done();
            clearTimeout(arguments.callee, 100);
        }
    }, 100);

    temp2 = -10;
    operator.rightUntil(-10, -100, 150, div1);
    cach2 = div1.css('right');
    setTimeout(function () {
        if (div1.css('right') != '-100px') {
            if (div1.css('right') != cach2) {
                assert.equal(div1.css('right'), temp2 + 'px', 'rightUntil two ' + (-temp2 / 10) + ' pass!');
                temp2 -= 10;
                done();
                cach2 = div1.css('right');
            }
            setTimeout(arguments.callee, 150);
        } else {
            assert.equal(div1.css('right'), -100 + 'px', 'rightUntil two ' + (-temp2 / 10) + ' pass!');
            done();
            clearTimeout(arguments.callee, 150);
        }
    }, 150);

    temp3 = 0;
    operator.rightUntil(10, -100, 150, div2);
    cach3 = div2.css('right');
    setTimeout(function () {
        if (div2.css('right') != '-100px') {
            if (div2.css('right') != cach3) {
                assert.equal(div2.css('right'), temp3 + 'px', 'rightUntil three ' + (-temp3 / 10) + ' pass!');
                temp3 -= 10;
                done();
                cach3 = div2.css('right');
            }
            setTimeout(arguments.callee, 150);
        } else {
            assert.equal(div2.css('right'), -100 + 'px', 'rightUntil three ' + (-temp3 / 10) + ' pass!');
            done();
            clearTimeout(arguments.callee, 150);
        }
    }, 150);

    temp4 = 0;
    operator.rightUntil(-10, 100, 150, div3);
    cach4 = div3.css('right');
    setTimeout(function () {
        if (div3.css('right') != '100px') {
            if (div3.css('right') != cach3) {
                assert.equal(div3.css('right'), temp4 + 'px', 'rightUntil four ' + (-temp4 / 10) + ' pass!');
                temp4 -= 10;
                done();
                cach4 = div3.css('right');
            }
            setTimeout(arguments.callee, 150);
        } else {
            assert.equal(div3.css('right'), 100 + 'px', 'rightUntil four ' + (-temp4 / 10) + ' pass!');
            done();
            clearTimeout(arguments.callee, 150);
        }
    }, 150);
});

//  对topUntil的测试
QUnit.test("topUntil test", function (assert) {
    div.css('top', 0);
    div1.css('top', 0);
    div2.css('top', 0);
    div3.css('top', 0);
    div4.css('top', 0);
    var id, temp1,temp2,temp3,temp4,temp6, cach1, cach2,cach3,cach4,cach5;
    var done = assert.async(5);

    temp1 = 10;
    operator.topUntil(10, 100, 100, div);
    cach1 = div.css('top');
    setTimeout(function () {
        if (div.css('top') != '100px') {
            if (div.css('top') != cach1) {
                assert.equal(div.css('top'), temp1 + 'px', 'topUntil one ' + temp1 / 10 + ' pass!');
                done();
                temp1 += 10;
                cach1 = div.css('top');
            }
            setTimeout(arguments.callee, 100);
        } else {
            assert.equal(div.css('top'), 100 + 'px', 'topUntil one ' + temp1 / 10 + ' pass!');
            done();
            clearTimeout(arguments.callee, 100);
        }
    }, 100);

    temp2 = -10;
    operator.topUntil(-10, -100, 150, div1);
    cach2 = div1.css('top');
    setTimeout(function () {
        if (div1.css('top') != '-100px') {
            if (div1.css('top') != cach2) {
                assert.equal(div1.css('top'), temp2 + 'px', 'topUntil two ' + (-temp2 / 10) + ' pass!');
                temp2 -= 10;
                done();
                cach2 = div1.css('top');
            }
            setTimeout(arguments.callee, 150);
        } else {
            assert.equal(div1.css('top'), -100 + 'px', 'topUntil two ' + (-temp2 / 10) + ' pass!');
            done();
            clearTimeout(arguments.callee, 150);
        }
    }, 150);

    temp3 = 0;
    operator.topUntil(10, -100, 150, div2);
    cach3 = div2.css('top');
    setTimeout(function () {
        if (div2.css('top') != '-100px') {
            if (div2.css('top') != cach3) {
                assert.equal(div2.css('top'), temp3 + 'px', 'topUntil three ' + (-temp3 / 10) + ' pass!');
                temp3 -= 10;
                done();
                cach3 = div2.css('top');
            }
            setTimeout(arguments.callee, 150);
        } else {
            assert.equal(div2.css('top'), -100 + 'px', 'topUntil three ' + (-temp3 / 10) + ' pass!');
            done();
            clearTimeout(arguments.callee, 150);
        }
    }, 150);

    temp4 = 0;
    operator.topUntil(-10, 100, 150, div3);
    cach4 = div3.css('top');
    setTimeout(function () {
        if (div3.css('top') != '100px') {
            if (div3.css('top') != cach3) {
                assert.equal(div3.css('top'), temp4 + 'px', 'topUntil four ' + (-temp4 / 10) + ' pass!');
                temp4 -= 10;
                done();
                cach4 = div3.css('top');
            }
            setTimeout(arguments.callee, 150);
        } else {
            assert.equal(div3.css('top'), 100 + 'px', 'topUntil four ' + (-temp4 / 10) + ' pass!');
            done();
            clearTimeout(arguments.callee, 150);
        }
    }, 150);
});

//  对bottomUntil的测试
QUnit.test("bottomUntil test", function (assert) {
    div.css('bottom', 0);
    div1.css('bottom', 0);
    div2.css('bottom', 0);
    div3.css('bottom', 0);
    div4.css('bottom', 0);
    var id, temp1,temp2,temp3,temp4,temp6, cach1, cach2,cach3,cach4,cach5;
    var done = assert.async(5);

    temp1 = 10;
    operator.bottomUntil(10, 100, 100, div);
    cach1 = div.css('bottom');
    setTimeout(function () {
        if (div.css('bottom') != '100px') {
            if (div.css('bottom') != cach1) {
                assert.equal(div.css('bottom'), temp1 + 'px', 'bottomUntil one ' + temp1 / 10 + ' pass!');
                done();
                temp1 += 10;
                cach1 = div.css('bottom');
            }
            setTimeout(arguments.callee, 100);
        } else {
            assert.equal(div.css('bottom'), 100 + 'px', 'bottomUntil one ' + temp1 / 10 + ' pass!');
            done();
            clearTimeout(arguments.callee, 100);
        }
    }, 100);

    temp2 = -10;
    operator.bottomUntil(-10, -100, 150, div1);
    cach2 = div1.css('bottom');
    setTimeout(function () {
        if (div1.css('bottom') != '-100px') {
            if (div1.css('bottom') != cach2) {
                assert.equal(div1.css('bottom'), temp2 + 'px', 'bottomUntil two ' + (-temp2 / 10) + ' pass!');
                temp2 -= 10;
                done();
                cach2 = div1.css('bottom');
            }
            setTimeout(arguments.callee, 150);
        } else {
            assert.equal(div1.css('bottom'), -100 + 'px', 'bottomUntil two ' + (-temp2 / 10) + ' pass!');
            done();
            clearTimeout(arguments.callee, 150);
        }
    }, 150);

    temp3 = 0;
    operator.bottomUntil(10, -100, 150, div2);
    cach3 = div2.css('bottom');
    setTimeout(function () {
        if (div2.css('bottom') != '-100px') {
            if (div2.css('bottom') != cach3) {
                assert.equal(div2.css('bottom'), temp3 + 'px', 'bottomUntil three ' + (-temp3 / 10) + ' pass!');
                temp3 -= 10;
                done();
                cach3 = div2.css('bottom');
            }
            setTimeout(arguments.callee, 150);
        } else {
            assert.equal(div2.css('bottom'), -100 + 'px', 'bottomUntil three ' + (-temp3 / 10) + ' pass!');
            done();
            clearTimeout(arguments.callee, 150);
        }
    }, 150);

    temp4 = 0;
    operator.bottomUntil(-10, 100, 150, div3);
    cach4 = div3.css('bottom');
    setTimeout(function () {
        if (div3.css('bottom') != '100px') {
            if (div3.css('bottom') != cach3) {
                assert.equal(div3.css('bottom'), temp4 + 'px', 'bottomUntil four ' + (-temp4 / 10) + ' pass!');
                temp4 -= 10;
                done();
                cach4 = div3.css('bottom');
            }
            setTimeout(arguments.callee, 150);
        } else {
            assert.equal(div3.css('bottom'), 100 + 'px', 'bottomUntil four ' + (-temp4 / 10) + ' pass!');
            done();
            clearTimeout(arguments.callee, 150);
        }
    }, 150);
});

