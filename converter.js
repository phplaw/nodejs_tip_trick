'use strict';

exports.bin = function(input) {
    return input.toString(2);
}

exports.hex = function(input) {
    return input.toString(16);
}

exports.xxx = {
    hex: function(input) {
        return input.toString(16);
    },
    bin: function(input) {
        return input.toString(2);
    }
};

exports.yyy = function() {
    console.log('fuck them all');

}

// @override all
module.exports = function () {
    console.log('bar!');
  }
