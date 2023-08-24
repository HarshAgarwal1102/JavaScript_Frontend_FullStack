// Filter vs Map

var arr = [10, 20, 30, 40, 50, 60];
undefined

// Filter creates the array(basically array length) on the basis of the condition

var g = arr.filter(w=>true);
undefined
g;
(6) [10, 20, 30, 40, 50, 60]
g === arr1;
false

arr;
(6) [10, 20, 30, 40, 50, 60]

// Map creates the array(basically array length) same as the given array

var j = arr.map(e=>e*2);
undefined
j;
(6) [20, 40, 60, 80, 100, 120]
