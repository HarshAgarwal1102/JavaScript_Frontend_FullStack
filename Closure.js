// Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.
// fn" return + lexical scope return => Closure 

function init(){
   var count = 0;       // Local Variable
   function counter(){
      // var count = 0;      // Local Variable
       count++;
       return count;   
   }
    return counter;    // fn" return + lexical scope return => Closure   // lexical scope is like memories and here it is count variable... 
}

var t = init();
t;
ƒ counter(){
   // var count = 0;      // Local Variable
    count++;
    return count;
}

t();
1
t();
2
t();
3
t();
4
t();
5

console.dir(t);      // to check whether that init is returning lexical scope also or not
ƒ counter()
   arguments: null
   caller: null
   length: 0
   name: "counter"
   prototype: {constructor: ƒ}
      [[FunctionLocation]]: 
      [[Prototype]]: ƒ ()
      [[Scopes]]: Scopes[2]
         0: Closure (init) {count: 5}         // lexical scope is also returned here...
         1: Global {window: Window, self: Window, document: document, name: '', location: Location, …}

function a(x){
    var g = 100;
    return function b(y){
        return function c(z){
            return x + y + z;
        }
    }
}

a(10)(20)(30);
60

var m = a(10)(20);
m;
ƒ c(z){
            return x + y + z;
        }

console.dir(m);
ƒ c(z)arguments: null
      caller: null
      length: 1
      name: "c"
      prototype: {constructor: ƒ}
      [[FunctionLocation]]: 
      [[Prototype]]: ƒ ()
      [[Scopes]]: Scopes[3]
         0: Closure (b) {y: 20}         // proof that it is also returning lexical scope...
         1: Closure (a) {x: 10}
         2: Global {window: Window, self: Window, document: document, name: '', location: Location, …}

function show(y){
    var z = 100;
    var m = 200;
    return function(x){
        var a = 10;
        return a + x + y; 
    }
}

show(100);
ƒ (x){
        var a = 10;
        return a + x + y; 
    }
var g = show(100);

g(1);
111
console.dir(g);
   ƒ anonymous(x)arguments: null
   caller: null
   length: 1
   name: ""prototype: {constructor: ƒ}
   [[FunctionLocation]]: VM141:4
   [[Prototype]]: ƒ ()
   [[Scopes]]: Scopes[2]
      0: Closure (show) {y: 100}
      1: Global {window: Window, self: Window, document: document, name: '', location: Location, …}
