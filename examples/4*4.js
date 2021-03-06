var ndarray = require('ndarray');
var show = require('ndarray-show');
var zeros = require('zeros');
var decom = require('../');

var A = ndarray([
    2, 1, 1, 3, 
    1, 2, 2, 1, 
    1, 2, 9, 1, 
    3, 1, 1, 7, 
], [ 4, 4 ]);
var L = zeros([ 4, 4 ]);
var U = zeros([ 4, 4 ]);

decom(A, L, U);
console.log('L=\n' + show(L));
console.log('U=\n' + show(U));
