#lu-decomposition


```js
var decom=require("lu-decomposition")
```
```js
var d=decom(A,L,U);
```
Decompose matrix into L U but does not modify A


#example
```js


var ndarray = require('ndarray');
var zeros = require('zeros');
var show = require('ndarray-show');
var decom = require('lu-decomposition');

var A = ndarray([ 25,5,1,64,8,1,144,12,1 ], [ 3, 3 ]);
var L = zeros([ 3, 3 ]);
var U = zeros([ 3, 3 ]);

decom(A, L, U);
console.log('L=\n' + show(L));
console.log('U=\n' + show(U));
```
output:
```
L=
  1.00   0.000    0.00
  2.56   1.00     0.00
  5.76   3.50     1.00
  
U=
   25.00    5.00    1.00
   0       -4.8    -1.56
   0        0.00    0.70
```
