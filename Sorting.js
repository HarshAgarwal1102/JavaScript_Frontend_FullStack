// If we want to sort number from primitive types => a-b
// If we want to sort string from primitive types => a.localeCompare(b)


var arr = [1, 10, 2, 20, 33, 88, 90];

arr.sort();            // Sorting on the basis of ASCII values.
(7) [1, 10, 2, 20, 33, 88, 90]


/*
  Three trigring points on sorting..
    1. if a-b => negtive then <
    2. if a-b => positive then >
    3. if a-b => equal then 0
*/

arr.sort((a,b)=>a-b);       // This is done on the basis of elements. This is Mutable
(7) [1, 2, 10, 20, 33, 88, 90]       // a-b => ascending order..

arr;
(7) [1, 2, 10, 20, 33, 88, 90]

var names = ["ram", "amit", "tim", "shyam"];

"ram".localeCompare("amit");  // ram > amit  // true
1
"amit".localeCompare("ram");  // amit > ram   // false
-1
"amit".localeCompare("amit");  // amit > amit 
0

names.sort((a,b)=>a.localeCompare(b));  // ascending order
(4) ['amit', 'ram', 'shyam', 'tim']
names.sort((a,b)=>b.localeCompare(a));  // descending order
(4) ['tim', 'shyam', 'ram', 'amit']



// If we want to sort number from object => a.keyname - b.keyname
// If we want to sort string from object => a.keyname.localeCompare(b.keyname)

var products = [{id:1001, name:'Adidas', price:2000}, {id:1000, name:'Puma', price:1100}, {id:1003,name:'Bata', price:2999}];
undefined

// Sorting acc. to Names
products.sort((a,b)=>a.name.localeCompare(b.name));
(3) [{…}, {…}, {…}]
  0: {id: 1001, name: 'Adidas', price: 2000}
  1: {id: 1003, name: 'Bata', price: 2999}
  2: {id: 1000, name: 'Puma', price: 1100}
  length: 3
  [[Prototype]]: Array(0)

// Sorting acc. to Price
products.sort((a,b)=>a.price - b.price);
(3) [{…}, {…}, {…}]
  0: {id: 1000, name: 'Puma', price: 1100}
  1: {id: 1001, name: 'Adidas', price: 2000}
  2: {id: 1003, name: 'Bata', price: 2999}
  length: 3
  [[Prototype]]: Array(0)
