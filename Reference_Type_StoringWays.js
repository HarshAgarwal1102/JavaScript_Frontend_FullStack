// Multiple Ways to store references...


// 1st way
var arr = [10,20,30];
undefined
typeof arr;
'object'
arr instanceof Array;
true
typeof Array;
'function'

// 2nd way
var obj = {}; // Object Literal
undefined
var temp = [10,12, 33, 38, 24, 25, 27, 39];
undefined
temp[0];
10
temp[1];
12
var temp2 = {'shimla':10, 'manali':12, 'delhi':33};
undefined
temp2['shimla'];
10

// 3rd Way
function show(){
    console.log('I am the Show ');
}
undefined
typeof show;
'function'
show();
VM520:2 I am the Show 
undefined
var g = show;          // here we stored the refernce..
undefined
typeof g;
'function'
g();
VM520:2 I am the Show 
undefined
