// undefined vs undeclared


var a ;            // undefined
undefined
a;
undefined
typeof a;
'undefined'

t;                  // undeclared
VM104:1 Uncaught ReferenceError: t is not defined
    at <anonymous>:1:1
(anonymous) @ VM104:1

r = 100;            // Accidental Global Variable
100 
r;
100
typeof r;
'number'
r;
100

// Window Object
window.r;
100
typeof window;          // window is an object
'object'
window instanceof Window;         // Window is a function
true
typeof Window;
'function'

window ;
Window {window: Window, self: Window, document: document, name: '', location: Location, …}

this;           // this is reffering to current object i.e., window
Window {window: Window, self: Window, document: document, name: '', location: Location, …}

window == this;
true
