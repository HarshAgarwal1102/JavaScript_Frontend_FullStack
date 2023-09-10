// what is prototype?


function Customer(id, name, balance){
    this.id = id;
    this.name = name;
    this.balance = balance;
}
var tom = new Customer(1001, 'Tom', 22222);
var tim = new Customer(1002, 'Tim', 322222);
var kim = new Customer(1003, 'Kim', 42222);

undefined
tom;
Customer {id: 1001, name: 'Tom', balance: 22222}
tim;
Customer {id: 1002, name: 'Tim', balance: 322222}
kim;
Customer {id: 1003, name: 'Kim', balance: 42222}



function Customer(id, name, balance){
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.printCustomer = function(){
        console.log(`Id is ${this.id} Name ${this.name} Balance ${this.balance}`);
    }
}

var tom = new Customer(1001, 'Tom', 22222);
var tim = new Customer(1002, 'Tim', 322222);
var kim = new Customer(1003, 'Kim', 42222);

             // Problem with this is that now every object will have it's own printCustomer function...

tom;
Customer {id: 1001, name: 'Tom', balance: 22222, printCustomer: ƒ}
tim
Customer {id: 1002, name: 'Tim', balance: 322222, printCustomer: ƒ}
kim;
Customer {id: 1003, name: 'Kim', balance: 42222, printCustomer: ƒ}

tom.printCustomer();
Id is 1001 Name Tom Balance 22222

tim.printCustomer();
Id is 1002 Name Tim Balance 322222

kim.printCustomer();
Id is 1003 Name Kim Balance 42222


// We can resolve this function with the help of prototype...

Customer;
ƒ Customer(id, name, balance){
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.printCustomer = function(){
        console.log(`Id is ${this.id} Name ${this.name} Balance $…
Customer.prototype;
{constructor: ƒ}
typeof Customer.prototype;
'object'

Customer.prototype instanceof Object;
true
tom;
Customer {id: 1001, name: 'Tom', balance: 22222, printCustomer: ƒ}
tim;
Customer {id: 1002, name: 'Tim', balance: 322222, printCustomer: ƒ}
kim;
Customer {id: 1003, name: 'Kim', balance: 42222, printCustomer: ƒ}

tom.__proto__ === Customer.prototype;        //  tom.__proto__ is a reference variable of Customer.prototype
true
tom.__proto__ === tim.__proto__ && tom.__proto__ === kim.__proto__;
true

Customer.prototype.show= function(){   // Common function
    console.log(`Id is ${this.id} Name ${this.name} Balance ${this.balance}`);
}
ƒ (){
    console.log(`Id is ${this.id} Name ${this.name} Balance ${this.balance}`);
}

tom.show();  // can access that common function 
Id is 1001 Name Tom Balance 22222

kim.show();  // can access that common function 
Id is 1003 Name Kim Balance 42222

tim.show();  // can access that common function 
Id is 1002 Name Tim Balance 322222

tim;       // internally we have a reference
    Customer {id: 1002, name: 'Tim', balance: 322222, printCustomer: ƒ}
    balance: 322222
    id: 1002
    name: "Tim"
    printCustomer: ƒ ()
    [[Prototype]]: Object
    show: ƒ ()
    constructor: ƒ Customer(id, name, balance)
    [[Prototype]]: Object

tim.show();
Id is 1002 Name Tim Balance 322222

tim.__proto__;
{show: ƒ, constructor: ƒ}
tim.__proto__ === Customer.prototype;
true

tim.__proto__.show;  // proven that it has show function reference
ƒ (){
    console.log(`Id is ${this.id} Name ${this.name} Balance ${this.balance}`);
}

tim.__proto__.show();         // can't print values.... bcz values are with tim. not with __proto__
Id is undefined Name undefined Balance undefined

tom.show();    // internal working is tom.__proto__.show(); but that is printing undefined, bcz values are with tom
Id is 1001 Name Tom Balance 22222


// for maintaing the linkage of tom.show(); that was broken due to tom.__proto__.show();

tom.__proto__.show.call(tom);
Id is 1001 Name Tom Balance 22222

tom.show();   // equivalent to tom.__proto__.show.call(tom)
Id is 1001 Name Tom Balance 22222
