// What is Coercion ?
// Dynamically typed language use Coercion for Typecasting...


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



// Explicit Coercion...


100 + parseInt("100");          // We have converted it explicitly.. parseInt() is a function
200
100 - "100"        // this will work fine implicitly..
0
100 * "10"          // this will work fine implicitly..
1000
100 + parseFloat("100.20");        // We have converted it explicitly..  parseFloat() is a function
200.2
"Amit" + String(2000);      // We have converted it explicitly..
'Amit2000'
typeof String;        String is a Function...
'function'
typeof parseInt;
'function'

var e = 100;
undefined
e.toString();   // another ques aries that, How we applied . on primitive type, we can use it only with refernce types..
'100'              // Is everything Object in JS ??
