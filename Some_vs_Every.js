var arr = [10,20,1,2,90,33, 88];

// some vs every in array

arr.every(e=>e>0);           
true
arr.every(e=>e>10);       // If any of the case fails, returns false
false
arr.some(e=>e>10);        // If any of the case execute, returns true
true
arr.some(e=>e>10000);
false
