// for vs for of vs for in

var arr = [10,20,30,40,50];
undefined

// simple for loop

for(var i = 0 ; i<arr.length; i++){
    console.log(arr[i]);
}
VM305:3 10
VM305:3 20
VM305:3 30
VM305:3 40
VM305:3 50
undefined

// for of (Iterator)

for(var a of arr){
    console.log(a);
}
VM445:2 10
VM445:2 20
VM445:2 30
VM445:2 40
VM445:2 50
undefined

// for in (Object Traverse)  
// best for key value access 

typeof arr;
'object'
for(var key in arr){
    console.log(key);
}
VM620:2 0
VM620:2 1
VM620:2 2
VM620:2 3
VM620:2 4
undefined
for(var key in arr){
    console.log(key, arr[key]);
}
VM657:2 0 10
VM657:2 1 20
VM657:2 2 30
VM657:2 3 40
VM657:2 4 50
undefined
var emp = {id:1001, name:'Amit', address:'Delhi'};
undefined
typeof emp;
'object'
for(var key in emp){
    console.log(key);
}
VM906:2 id
VM906:2 name
VM906:2 address
undefined
for(var key in emp){
    console.log(key, emp[key]);
}
VM940:2 id 1001
VM940:2 name Amit
VM940:2 address Delhi
undefined
