'use strict';
// const myModule = require(__dirname + '/test.js');
const myModule = require('./test.js');

//console.log(myModule);
myModule.test();

let converter = require('./converter.js');
//console.log(converter.toString())
//console.log(converter.toString());

console.log(
    converter
);


/*
var num = 10;

var bin = converter.bin(num);
console.log('BIN:' + bin);

var hex = converter.hex(num);
console.log('HEX: ' + hex);
*/
