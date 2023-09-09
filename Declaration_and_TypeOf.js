// JS is a dynamically typed programming language, which means that data types of variables are determined by the value they hold at runtime 
// and can change throughout the program as we assign different values to them.

var a;
undefined
typeof a;   // if no value is assigned to a variable then it's value and type must be undefined
'undefined'
typeof undefined;   // undefined is undefined
'undefined'
a=100;
100
typeof a;
'number'
a= "Amit";
'Amit'
typeof a;
'string'
typeof (a);  // type of is not a function
'string'
typeof ((a));  // brackets are used for giving priority
'string'
typeof ((((a))));  
'string'
typeof typeof;  // it's like a keyword
VM226:1 Uncaught SyntaxError: Unexpected token ';'
a=true;
true
typeof a;  
'boolean'
a = "Amit";
'Amit'
typeof a;
'string'
typeof 10+20;  // this will work like concatination if we don't give priority
'number20'
typeof (10+20);  // priority given...
'number'
var x = 100;
undefined
var y = x;
undefined
y + 10;      // we have only add something to the value of y, but not assign it to y.
110
y;        // that's why value remains the same
100
