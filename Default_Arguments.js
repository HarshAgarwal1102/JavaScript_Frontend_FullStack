// default arguments in JS

function show(x,y){
    return  x + y;
}
undefined
show(10,20);
30
show(10);
NaN  // reason in next line
10 + undefined;
NaN
show();
NaN  // reason in next line
undefined + undefined;
NaN

function show(x =0,y=0){
    return  x + y;
}
undefined
show();
0
show(10);
10
show(10,20);
30

function disp(x,y){
    return x + y;
}
undefined
disp();
NaN


// Before this we have concept of truthy and falsy

var a ;
undefined
a;
undefined
a?"Truthy":"Falsy";
'Falsy'
a=10;
10
a?"Truthy":"Falsy";
'Truthy'
a=null;
null
a?"Truthy":"Falsy";
'Falsy'
a=0;
0
a?"Truthy":"Falsy";
'Falsy'
a="";
''
a?"Truthy":"Falsy";
'Falsy'
a=NaN;
NaN
a?"Truthy":"Falsy";
'Falsy'
a="Amit";
'Amit'
a?"Truthy":"Falsy";
'Truthy'
function disp(x,y){
    x = x || 0;
    y = y || 0;
    return x + y;
}
undefined
disp(); 
0
disp(10);
10
disp(10,20);
30
