// Clone an Array

//Using the spread operator we can make a clone of an array
var arr = [10, 20, 30, 40, 50, 60];
undefined
var arr1 = [...arr];
undefined
arr1;
(6) [10, 20, 30, 40, 50, 60]


//Without using the spread operator we can also make a clone of an array (using filter method)

var g = arr.filter(w=>true);
undefined
g;
(6) [10, 20, 30, 40, 50, 60]
