// Generic Object

var obj = {id:101, name:'Ram', city:'Delhi'};   // Object Literal

typeof obj;
'object'
obj instanceof Object;      
true
typeof Object;   // GOD Function
'function'

// It's not goood to write this like this... writting same thing again n again
var emp = {id:1001, name:'Tim'}
var emp2 = {id:1002, name:'Vim'};


// So we decided to create a function and use object literals..
function createEmp(id, name , salary){
    var emp = {}; // Object Literal
    emp.id = id;
    emp.name = name;
    emp.salary = salary;
    return emp;
}
var ram = createEmp(1001, 'Ram', 22222);
typeof ram;
'object'
ram instanceof createEmp;      // not a specific object
false
ram instanceof Object;       // Object is GOD Function
true
// but the issue with this that the object created through this is not the specific object... Object is created through object literal



// Specific Objects

// using Function Constructor
function Person(id, name ,age){
    console.log('Person ',this);
    this.id = id;
    this.name = name;
    this.age = age;
    console.log('Person with Values ',this);
    // this - keyword - current calling object reference
}
var tim = new Person(1001, 'Tim',21);
Person  Person {}
Person with Values  Person {id: 1001, name: 'Tim', age: 21}
undefined
tim instanceof Person;  // Specific Object
true
tim instanceof Object;
true
ram instanceof createEmp;     // this is a Generic Object
false 



// Prototypes 


Employee.prototype;
{constructor: ƒ}
Array.prototype;
[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
Array.prototype.forEach;
ƒ forEach() { [native code] }
Array.prototype.map
ƒ map() { [native code] }
Array.prototype.find;
ƒ find() { [native code] }
typeof Array;
'function'
typeof Array.prototype;
'object'
arr;
(3) [10, 20, 30]

arr.__proto__;
[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
arr.__proto__ === Array.prototype;
true
Array.prototype.__proto__ === Object.prototype;
true
Employee;
ƒ Employee(id, name, salary){
    // this - keyword (Current Calling Object Reference)

    this.id = id;
    this.name = name;
    this.salary = salary;  
}
var r = new Employee(1001, "R",9999);
undefined
r;
Employee {id: 1001, name: 'R', salary: 9999}
class Student{}
undefined
var s = new Student();
undefined
typeof s;
'object'
s instanceof Student;
true
