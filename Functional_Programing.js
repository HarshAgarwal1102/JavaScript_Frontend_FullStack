/*
Functional Programming
1. Functions are No.- 1 citizens.
    a) Passing function as an argument (callback function)
    b) Function returns a function
    c) Function as a data type
    d) Nested Function
2. Declarative Programming vs Imperative Programming 
3. Pure Functions
      Arrow Functions (No own Arguments, No own this keyword)
        a) Easy to Write
        b) Easy to Understand
        c) Easy to Debug
*/

// Receiving function as a parameter

function show(calCube){
    for(var i =1; i<=5; i++){
        calCube(i);
    }
}
function cube(num){
    console.log(num**3);   // this ** will works as the power num^3
}

show(cube);      // Passing function as an argument
1
8
27
64
125


// Nested Function

function calculator(){
    var add = function(x,y){  
        return x+y;
    }
    return add;  // function returns function
}

var f = calculator(); 
f;              // function as a data type
ƒ (x,y){
        return x+y;
    }

f(10, 20);
30


// Imperative Programming (Normally we do it on a daily basis...)

var arr = [10, 20, 40, 30, 40, 50, 60, 40];
var search = 40;
var arr2 = [];

for(var i=0; i<arr.length; i++){
    if(arr[i] == search){
        arr2.push(arr[i]);
    }
}
3
arr2;
(3) [40, 40, 40]

arr2.length;
3


// Declarative Programming

// if you want to store multiple records we can use filter method.
arr.filter((e)=>e==40);   // Pure func" (Arrow Functions) contains No Arguments, No this keyword
(3) [40, 40, 40]
var g = arr.filter((e)=>e==40);
undefined
g.length;
3

// if you want to store a single record we can use find method.
var c = arr.find((e)=>e==10);
undefined
c.length;
1
