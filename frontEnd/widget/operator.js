/**
 * Created by XX on 2016/11/27.
 */
//   废弃的实现

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
