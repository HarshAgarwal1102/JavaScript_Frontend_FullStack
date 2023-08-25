// find vs findIndex vs Filter

var arr = [10, 20, 40, 30, 40, 50, 60, 40];
undefined
arr.find(e=>e==40);
40
arr.find(e=>e==400);
undefined
arr.find(e=>e==400)?"Found":"Not Found";
'Not Found'

arr.findIndex(e=>e==40);
2
arr.findIndex(e=>e==400);
-1

arr.filter(e=>e==40);
(3) [40, 40, 40]
var t = arr.filter(e=>e==40);
undefined
t;
(3) [40, 40, 40]
t.length;
3
arr.filter(e=>e==40).length;
3
