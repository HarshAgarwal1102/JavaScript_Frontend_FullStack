var arr = [10,20,1,2,90,33, 88];
undefined

arr.splice(1,1000);
(6) [20, 1, 2, 90, 33, 88]

arr;
[10]

arr.insert;  // no such func
undefined

Array.prototype.push;  
ƒ push() { [native code] }
Array.prototype.forEach;
ƒ forEach() { [native code] }

typeof Array.prototype;
'object'
Array.prototype.insert = function(index, value){   // but we can define our own function using Prototype Objects
    this.splice(index, 0, value);
    return this.length;
}
ƒ (index, value){
    this.splice(index, 0, value);
    return this.length;
}
var arr = [10,20,1,2,90,33, 88];
undefined
arr.insert(1,1000);
8
arr;
(8) [10, 1000, 20, 1, 2, 90, 33, 88]
arr.replace;
undefined
Array.prototype.replace = function(index, newValue){    // We can define our own function using Prototype Objects
    this.splice(index, 1, newValue);
    return "Replace Done";
}
ƒ (index, newValue){
    this.splice(index, 1, newValue);
    return "Replace Done";
}
arr;
(8) [10, 1000, 20, 1, 2, 90, 33, 88]
arr.replace(0,8888);
'Replace Done'
arr;
(8) [8888, 1000, 20, 1, 2, 90, 33, 88]
Array.prototype.forEach = function(){    // Over riding for each function, but we aren't changing js engine.
    console.log(" this is my for each ");
}
ƒ (){
    console.log(" this is my for each ");
}
arr.forEach();
VM967:2  this is my for each 
undefined
