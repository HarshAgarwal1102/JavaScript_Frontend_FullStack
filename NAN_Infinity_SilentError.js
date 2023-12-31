// NaN is a silent error in JS
// Infinity is also a silent error in JS

// Both are of number type


// Helper methods are used to handle errors
// NaN => Helper method - isNaN();
// Infinity => Helper method - isFinite();


var a=10;
undefined
typeof a;
'number'
a=1;
1
typeof a;
'number'
a=1.2;
1.2
typeof a;
'number'
a=111111111;
111111111
typeof a;
'number'
a= "Amit" - 100;
NaN
a;
NaN
typeof a;
'number'
10 + undefined;
NaN
typeof NaN;
'number'
a;
NaN
isNaN(a);
true
isNaN(a)?0:a;  // Handling error...
0
a;
NaN
a=100;
100
isNaN(a)?0:a;
100
a = 10/0;
Infinity
a;
Infinity
typeof a;
'number'
isFinite(a);
false
a = 100;
100
isFinite(a);
true
a = 10/0;
Infinity
isFinite(a)?a:0;    // Handling error...
0

10 + "20"   
'1020'
10 + parseInt("20");   // Convert String into an Integer (Number)
30
10 + parseFloat("20.99");    // Convert String into an Float (Number)
30.99
