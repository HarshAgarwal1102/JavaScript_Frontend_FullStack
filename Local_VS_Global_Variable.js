// Local Variable 

function counter(){
    var count = 0; // Local Variable scope is Function level scope
    count++;
    return count;
}
undefined
counter();
1
counter();
1
counter();
1
counter();
1
counter();
1


// Global Variable

var count = 0;         // global scope
function counter(){
    count++;
    return count;
}
undefined
count;
0
window.count;
0
counter();
1
counter();
2
counter();
3
counter();
4
counter();
5
counter();
6
window.count;
6



// Disadvantage of using global (we can change it).
count = "AMIT";
'AMIT'
counter();
NaN
counter();
NaN

count++;
NaN
