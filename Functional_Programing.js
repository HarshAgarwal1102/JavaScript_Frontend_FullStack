// Functional Programming
// 1. Functions are No.- 1 citizens.
//     a) Passing function as an argument (callback function)
//     b) Function returns a function
//     c) Function as a data type
//     d) Nested Function
// 2. Declarative Programming vs Imperative Programming 

// Receiving function as a parameter
function show(calCube){
    for(var i =1; i<=10; i++){
        calCube(i);
    }
}
undefined
function cube(num){
    console.log(num**3); // this ** will works as the power num^3
}
undefined

show(cube);  // Passing function as an argument
VM314:2 1
VM314:2 8
VM314:2 27
VM314:2 64
VM314:2 125
VM314:2 216
VM314:2 343
VM314:2 512
VM314:2 729
VM314:2 1000
undefined


// Nested Function

function calculator(){
    var add = function(x,y){  
        return x+y;
    }
    return add;  // function returns function
}
undefined
var f = calculator(); 
undefined
f              // function as a data type
ƒ (x,y){
        return x+y;
    }
f(10, 20);
30
