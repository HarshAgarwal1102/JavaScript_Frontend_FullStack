var arr = [10,20,1,2,90,33, 88];
undefined

// some vs every in array

arr.every(e=>e>0);
true
arr.every(e=>e>10);
false
arr.some(e=>e>10);
true
arr.some(e=>e>10000);
false
