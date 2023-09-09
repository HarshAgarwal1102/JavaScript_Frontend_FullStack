// void type
// ForEach is a function and there is a loop going inside for traversal. It is Declarative Programming
// for_of is an iterator. It is Imperative Programming.

var arr = [10, 20, 30, 40, 50, 60];

arr.forEach(e=>console.log(e));
10
20
30
40
50
60

arr.forEach((element, index)=>console.log(index, element));
0 10
1 20
2 30
3 40
4 50
5 60
