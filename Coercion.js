// What is Coercion ?
// Dynamically typed language used Coercion for Typecasting...


/*
  Implicit Coercion

    1. String + Number => String   // Anything with string returns String...
    2. Number + String => String
    3. String + Boolean => String
    4. Number + null => Number
    5. Number + Undefined => Number
    6. Number + Boolean => Number
    7. Undefined + null => Number
    8. null + Undefined => Number
    9. Array + Array => String
*/
var a = 10;
undefined
var name = "ram";
undefined
name + a;
'ram10'
10 + null;
10
10 + undefined;
NaN
typeof (10 + undefined)
'number'
undefined + null;
NaN
10 + true;
11
"Amit" + true;
'Amittrue'
[] + [];           Array + Array => String
''


100 + parseInt("100");
200
100 - "100"
0
100 * "10"
1000
100 + parseFloat("100.20");
200.2
"Amit" + String(2000);
'Amit2000'
typeof String;
'function'
typeof parseInt;
'function'
100.toString();
VM661:1 Uncaught SyntaxError: Invalid or unexpected token
var e = 100;
undefined
e.toString();
'100'
