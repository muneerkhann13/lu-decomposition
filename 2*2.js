var ndarray = require('ndarray');
var zeros = require('zeros');
var show = require('ndarray-show');
var make = require('../');

var A = ndarray([ 4, 3, 6, 3 ], [ 2, 2 ]);
var L = zeros([ 2, 2 ]);
var U = zeros([ 2, 2 ]);

make(A, L, U);
console.log('L=\n' + show(L));
console.log('U=\n' + show(U));
