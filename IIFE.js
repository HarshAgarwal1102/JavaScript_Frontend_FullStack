// IIFE (Immediately Invoked Function Expression) OR (Self Invoking Function)

(function(){
    console.log("IIFE ");
})();                                       // ()();  // In 1st bracket function then 2nd bracket is the function call.
IIFE 


/*
USED because of 2 reasons.
    1. When we don't want to recall the parent function for re-allocation.
    2. This method is used before let. ()
*/


// 1st reason...

// ISSUE with closure is that if we recalled the init() then the value get reset.

    
function init(){
    var count = 0; // Local Variable
    function counter(){
        count++;
        return count;   
    }
    return counter;
}

var t = init();     it's perfect here
t();
1
t();
2
t();
3
t();
4
t();
5

t = init();   // When we recalled this init function, the count value vanishes.  // this is the issue.

t();  // re allocation of count value.
1
t();
2
t();
3


// SOLUTION    Here we can use IIFE.

// we removed the function name... so now there is no chance to recall the function...

var g  = (function (){
var count = 0; // Local Variable
function counter(){
    count++;
    return count;
}
    return counter;
})();

g;     // here g contains returned function.
ƒ counter(){
   // var count = 0; // Local Variable
    count++;
    return count;
    
}

g();
1
g();
2
g();
3
g();
4
g();
5
g();         // now there is no way to resest the count value.
6

// Using VAR.

function scope(){
    console.log(" i is ", i);    // undefined
    for(var i = 1; i<=5; i++){
        console.log("I is ", i);
    }
    console.log("I is ", i);      // 6
}

scope();
i is  undefined
I is  1
I is  2
I is  3
I is  4
I is  5
I is  6         // It's clear that there is no blocking scope of var. 


//  When let is there in ES6(2015).

function scope(){
    console.log(" i is ", i); // Error
    for(let i = 1; i<=5; i++){
        console.log("I is ", i);
    }
    console.log("I is ", i); // Error
}

scope();
VM566:2 Uncaught ReferenceError: i is not defined
    at scope (<anonymous>:2:27)
    at <anonymous>:1:1
scope @ VM566:2
(anonymous) @ VM589:1


 
// BEFORE LET we use IIFE

function scope(){
    console.log(" i is ", i); // Error
    (function(){
    for(var i = 1; i<=5; i++){     // still hoisting is done but we have limited it in IIFE function call
        console.log("I is ", i);
    }
    })();
    console.log("I is ", i); // Error
}
undefined
scope();
VM615:2 Uncaught ReferenceError: i is not defined
    at scope (<anonymous>:2:27)
    at <anonymous>:1:1
scope @ VM615:2
(anonymous) @ VM647:1
