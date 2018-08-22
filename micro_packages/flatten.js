
var flatten = require('arr-flatten')

var srcArr = ['a',['b','c'],['d',['e','f',['g',['h','i']]]]];

console.log(flatten(srcArr));

//=> [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]