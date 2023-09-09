// We can write a String using "" OR '' 
// If we want multiline then we can use BACKTICK `` 


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
'gjdfkghkdjfgjkdf\nfjhdsjkgdf\ngjhdfkj\nghsdkj'
console.log(a);          // Multiline 
gjdfkghkdjfgjkdf
fjhdsjkgdf
gjhdfkj
ghsdkj
undefined
var x = 10;
undefined
var y = 20;
undefined
"X is "+x+" and Y is "+y;
'X is 10 and Y is 20'
`X is ${x} and Y is ${y}`;
'X is 10 and Y is 20'
var t = true;
undefined
true + true;
2
true  + false;
1
100 + true;
101

// more on String_Interpolation
var candidateName = 'Ram';
var profile = 'SE';
var offerLetter = `Dear ${candidateName}, 
Your Job is Confirmed for ${profile}`;
undefined
offerLetter;
'Dear Ram, \nYour Job is Confirmed for SE'
console.log(offerLetter);
VM237:1 Dear Ram, 
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
