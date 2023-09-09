/* Is Everything Object in JS?
     No, Primitive are not Objects. 
     Null, undefined, strings, numbers, boolean, and symbols, these are called primitive values or primitive types, 
     they have pure values, but still we are able to access methods & properties.
*/

//  Why this ques arise..?


// Objects => Data + Methods + Properties..   This is perfectly fine...
// Updation will be done in Mutable way
var arr = [10,20,30];          // Data 
undefined
typeof arr;
'object'
arr.push(100);     // Method
4
arr;
(4) [10, 20, 30, 100]
arr.pop();           // Method
100
arr;
(3) [10, 20, 30]
arr.unshift(99);        // Method
4
arr;
(4) [99, 10, 20, 30]
arr.shift();          // Method
99
arr;
(3) [10, 20, 30]
arr.length;      // Property..
3

// Problem... 

// How using value types we are able to access methods and propeties..

var a = 10;
undefined
a;     
10
typeof a; 
'number'

// Here this ques arise, Is Everything Object in JS?
a.toString();         // Not Object Still we are able to access the methods, due to Auto-Boxing concept
'10'
a;  // here updation will be done in Immutable way.. not changed the original value..
10


// Some where Wrapper types came into the picture... 
// For every primitive type there is a Wrapper type..

// okay so that's alright we can access methods and properties using wrapper types because wrapper types are functions.
// But how this value type able to access??
// Bcz when we apply (.) to primitive types then at runtime it convert it into wrapper type => this will convert it into Object type.
/* Behind the scene it uses the concept of Auto-Boxing.
     1. Boxing
     2. Unboxing
*/

var b = new Number(10);
undefined
a;
10
b;
Number {10}
typeof a;
'number'
typeof b;    
'object'
b instanceof Number;
true
typeof Number;     
'function'

var name = "Amit";   // Immutable
undefined
typeof name;
'string'
var name2 = new String("Amit");   // Mutable (Wrapper Classes)
undefined
name2;
String {'Amit'}
typeof name2;
'object'
name2 instanceof String;
true
name.toUpperCase();     // It's not an Object still we are able to access the methods, due to Auto-Boxing concept
'AMIT'
name;       // Immutable will not make any change in original values, it will always create a Copy of Value
'Amit'
typeof name.toUpperCase();    // this is copy of value
'string'
var r = new String("AMIT");
undefined
var g  = "Amit";
undefined
typeof r;
'object'
typeof g;
'string'
g.toLowerCase();
'amit'
r;
String {'AMIT'}
var h = new String("Amit");
undefined
var j = h.toUpperCase();    // this is copy of value
undefined
j;
'AMIT'
typeof j;
'string'
typeof h;
'object'
