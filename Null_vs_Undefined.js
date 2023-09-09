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


null == undefined;            // When Both are unequal then why it's giving true....
true
/*
    == is a loose comaprision Operator
    1. Type Conversion        // Convert one type into another
    2. Comparision     // now check that both have nothing

    that's why it's giving true...
*/
null == undefined;   
true
typeof null;
'object'
typeof undefined;
'undefined'

null === undefined;
false
/*
    === is a Strict comaprision Operator
    1. Type Check        // Check wheather both are of same type...
    if not same type then immediately return false
    else if same then ... 2nd step
    2. Comparision of values     // now check that both are similar or not

    that's why it's giving true...
*/

// Below are the example for better understanding....
10 == "10"
true
10 === "10";
false
10 === 10;
true
10 + undefined;
NaN
10 + null;
10
arr;
null


// BAD practice 

// Don't convert primmitive types to Object...

var g = 100;
undefined
typeof g;        // primmitive type
'number'
g = null;      // don't do this with primmitive types         // Not allowed in Typescript,  bcz that's a strict typescript (Static Language)
null
typeof g;      // Now it's Object
'object'
