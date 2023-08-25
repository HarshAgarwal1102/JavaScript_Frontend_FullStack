var arr = [1, 10, 2, 20, 33, 88, 90];
undefined

// Sorting on the basis of ASCII values.
arr.sort();
(7) [1, 10, 2, 20, 33, 88, 90]

// This is done on the basis of elements. This is Mutable
arr.sort((a,b)=>a-b);
(7) [1, 2, 10, 20, 33, 88, 90]

arr;
(7) [1, 2, 10, 20, 33, 88, 90]

var names = ["ram", "amit", "tim", "shyam"];
undefined
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
