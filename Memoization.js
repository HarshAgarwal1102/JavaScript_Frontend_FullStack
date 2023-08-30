// this function is going to take a lot of time first this will complete all the loops then return the result

function cube(num){
    for(let i = 1; i<=100000; i++){
        for(let j = 1; j<=10000; j++){
            
        }
    }
    return num**3;
}
undefined

cube(3);
27
Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// Good Solution
// Use of cahching facility

// we have created object of cache instead array, because object will complete the work in constant time and array will definately took some what n or logn time.
var cache = {};  
function cube(num){
    if(cache[num]){
        return cache[num];
    }
    for(let i = 1; i<=10000; i++){
        for(let j = 1; j<=10000; j++){
            
        }
    }
    cache[num] = num ** 3;
    return cache[num];
}
undefined

cube(3);    // this will take time to print the result bcz it's printing 1st time
27
Window {window: Window, self: Window, document: document, name: '', location: Location, …}

cache;     // data in cache memory.
{3: 27}

cube(3);   // this won't take time to print the result bcz this data was stored in cache memory.
27

cube(5);  // this will take time to print the result bcz it's printing 1st time
125

cache;    // data in cache memory.
{3: 27, 5: 125}

cube(5);   // this won't take time to print the result bcz this data was stored in cache memory.
125
