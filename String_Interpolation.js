// We can write a String using "" OR '' 

/*
ES6 onwards we have an advantage of the following...
    1. If we want multiline String then we can use BACKTICK `` 
    2. String Interpolation `X is ${x} and Y is ${y}`; easy as compared with "X is "+x+" and Y is "+y;
*/


var a = "Amit";       // String in ""
undefined
typeof a;
'string'
a = 'Amit';        // String in ''
'Amit'
typeof a;
'string'
a = 'A';             // Nothing like character in JS
'A'
typeof a;
'string'

a = "Let's Do It ";    // Advantage as we can apply ' directly in ""
"Let's Do It "
typeof a;
'string'
a = `gjdfkghkdjfgjkdf
fjhdsjkgdf
gjhdfkj
ghsdkj`;

console.log(a);          // Multiline 
gjdfkghkdjfgjkdf
fjhdsjkgdf
gjhdfkj
ghsdkj

var x = 10;
undefined
var y = 20;
undefined
"X is "+x+" and Y is "+y;       // in this simple string we need to take care for all the double quotes to be closed properly
'X is 10 and Y is 20'
`X is ${x} and Y is ${y}`;        // this is string interpolation, it simplifies the way of writing -> just use backtick(`) and ${} then it will print the values
'X is 10 and Y is 20'





// About booleans , 
var t = true;
undefined
true + true;  // true is treated as 1   ->    1+1 = 2
2
true  + false;    // false is treated as 0   ->    1+0 = 1
1
100 + true;
101



// More on String_Interpolation

// Real life example and advantage...
// when we want to give multiline output with changing values.... as we can't do this thing easily with ""

var candidateName = 'Ram';
var profile = 'SE';
var offerLetter = `Dear ${candidateName}, 
Your Job is Confirmed for ${profile}`;
undefined
console.log(offerLetter);
Dear Ram, 
Your Job is Confirmed for SE
undefined
candidateName = 'Shyam';
'Shyam'
profile = 'DevOps';
'DevOps'
var offerLetter = `Dear ${candidateName}, 
Your Job is Confirmed for ${profile}`;
undefined
console.log(offerLetter);
VM421:1 Dear Shyam, 
Your Job is Confirmed for DevOps
undefined
