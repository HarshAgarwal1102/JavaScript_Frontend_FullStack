// IQ - Internal RelationShip of Function and Object

// Function Constructor

function Customer(id, name, balance){
    console.log('this is ', this);
    this.id = id;
    this.name = name;
    this.balance = balance;
}

// Explicit Binding

var tom = new Customer(1001, "Tom", 2222); // Explicit Binding of an Object
VM307:4 this is  Customer {}
undefined
tom;
Customer {id: 1001, name: 'Tom', balance: 2222}

// Default Binding

// by defualt this is bing with the window object.

Customer(111, 'WWWWW',22222); // window.Customer(111, 'WWWWW',22222);
VM307:4 this is  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
window.id;
111
window.name;
'WWWWW'
window.balance;
22222

Customer.prototype;
{constructor: ƒ}
Customer.call;
ƒ call() { [native code] }




// Type of Object Binding

function whoAmI(){
    console.log('I am ', this);
}

typeof whoAmI;
'function'

// Default Binding

whoAmI(); // window bind
VM152:2 I am  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
window.whoAmI();
VM152:2 I am  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
undefined


// Implicit Binding

var obj = {
    name:'Amit', 
    city:'Delhi'
}
undefined
var obj = {
    name:'Amit', 
    city:'Delhi',
    show(){
        console.log('I am ', this);
    }
}
undefined
obj.show();    // Implicit Binding
VM458:5 I am  {name: 'Amit', city: 'Delhi', show: ƒ}
undefined



// Explicit Binding

var w = new whoAmI();  // Explicit Binding
 I am  whoAmI {}
undefined

// Explicit Binding consists 3 types => 1) Call  => Binding + Invoke => C for comma seperated
//                                      2) Apply => Binding + Invoke => A for Array
//                                      3) Bind  => Binding
var x = {
    name:'Tim'}
undefined
var y = {
    name:'Kim'
}
undefined
x;
{name: 'Tim'}
y;
{name: 'Kim'}
whoAmI.call(x);
VM152:2 I am  {name: 'Tim'}
undefined
whoAmI();
VM152:2 I am  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
whoAmI.call(x);
VM152:2 I am  {name: 'Tim'}
undefined
window.whoAmI();
VM152:2 I am  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
window.whoAmI.call(x);
VM152:2 I am  {name: 'Tim'}
undefined
window.whoAmI.call(y);
VM152:2 I am  {name: 'Kim'}
undefined
function whoAmI(a,b,c){
    console.log('I am ', this, a, b, c);
}
undefined
window.whoAmI.call(x,10,20,30);      // C for comma seperated
VM918:2 I am  {name: 'Tim'} 10 20 30
undefined
window.whoAmI.call(y,100,200,300);
VM918:2 I am  {name: 'Kim'} 100 200 300
undefined
window.whoAmI.apply(x,[100,200,300]);     // A for Array
VM918:2 I am  {name: 'Tim'} 100 200 300
undefined
window.whoAmI.apply(y,[100,200,300]);
VM918:2 I am  {name: 'Kim'} 100 200 300
undefined
var g = whoAmI.bind(y);   // Binding
undefined
typeof g;
'function'
g;
ƒ whoAmI(a,b,c){
    console.log('I am ', this, a, b, c);
}
g(10,20,30);    // then arguments
VM918:2 I am  {name: 'Kim'} 10 20 30
undefined
g(10,20,30);
VM918:2 I am  {name: 'Kim'} 10 20 30
undefined
g(10,20,30);
VM918:2 I am  {name: 'Kim'} 10 20 30
undefined
g(10,20,30);
VM918:2 I am  {name: 'Kim'} 10 20 30
undefined
var g2 = whoAmI.bind(x);
undefined
g2;
ƒ whoAmI(a,b,c){
    console.log('I am ', this, a, b, c);
}
g2(1000,2000,3000);
VM918:2 I am  {name: 'Tim'} 1000 2000 3000
undefined
g2(1000,2000,3000);
VM918:2 I am  {name: 'Tim'} 1000 2000 3000
undefined
whoAmI
ƒ whoAmI(a,b,c){
    console.log('I am ', this, a, b, c);
}
console.dir(whoAmI);
VM1330:1 ƒ whoAmI(a,b,c)arguments: nullcaller: nulllength: 3name: "whoAmI"prototype: {constructor: ƒ}[[FunctionLocation]]: VM918:1[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()[[FunctionLocation]]: [[Prototype]]: Object[[Scopes]]: Scopes[0][[Scopes]]: Scopes[1]
undefined
whoAmI.__proto__ == Function.prototype;
true
Function.prototype;
ƒ () { [native code] }
console.dir(Function.prototype);
VM1508:1 ƒ anonymous()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()[[FunctionLocation]]: [[Prototype]]: Object[[Scopes]]: Scopes[0]
undefined
