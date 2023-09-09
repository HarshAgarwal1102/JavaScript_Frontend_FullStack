// Clone an Array

//Using the spread operator we can make a clone of an array
var arr = [10, 20, 30, 40, 50, 60];

var arr1 = [...arr];

arr1;
(6) [10, 20, 30, 40, 50, 60]
arr1 === arr
false


//Without using the spread operator we can also make a clone of an array (using filter method)

var g = arr.filter(w=>true); // we are creating a sub array

g;
(6) [10, 20, 30, 40, 50, 60]
g === arr1;
false
