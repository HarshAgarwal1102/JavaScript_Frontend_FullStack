// null vs undefined

// NULL is used for dereferencing...
// UNDEFINED means no value..


var t ;          // no value
undefined

var arr = [10,20,30];           // Currently arr contains refernce of the Object
undefined
typeof arr;
'object'

arr = null;              // we removed the refernce.....
null
typeof arr;
'object'
typeof null;           // NULL is an Object
'object'


typeof undefined;
'undefined'
t;
undefined
typeof t;
'undefined'


null == undefined;
true
typeof null;
'object'
typeof undefined;
'undefined'
null === undefined;
false
10 == "10"
true
10 === "10";
false
10 === 10;
true
10 + undefined;'
VM561:1 Uncaught SyntaxError: Invalid or unexpected token
10 + undefined;
NaN
10 + null;
10
arr;
null
var g = 100;
undefined
typeof g;
'number'
g = null;
null
typeof g;
'object'
