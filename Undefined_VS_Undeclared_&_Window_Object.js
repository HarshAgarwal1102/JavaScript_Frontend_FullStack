// undefined vs undeclared
var a ; // undefined
undefined
a;
undefined
typeof a;
'undefined'

t; // undeclared
VM104:1 Uncaught ReferenceError: t is not defined
    at <anonymous>:1:1
(anonymous) @ VM104:1
r = 100;
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
typeof window;
'object'
window instanceof Window;
true
typeof Window;
'function'
window ;
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
this;
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
window == this;
true
