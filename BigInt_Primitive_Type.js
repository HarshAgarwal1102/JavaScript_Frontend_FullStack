var a ;
undefined
typeof a;
'undefined'
typeof undefined;
'undefined'
a  = 100;
100
typeof a;
'number'
a = "Amit";
'Amit'
typeof a;
'string'
a = true;
true
typeof a;
'boolean'
a =11111111111111;
11111111111111
typeof a;
'number'
a=433232132345353534564565756765765756756756756765;
4.332321323453535e+47
a;
4.332321323453535e+47
Number.isSafeInteger(a);
false
a=1000;
1000
Number.isSafeInteger(a);
true
a= Number.MAX_SAFE_INTEGER;
9007199254740991
a++;
9007199254740991
a++;
9007199254740992
a++;
9007199254740992
a++;
9007199254740992
a++;
9007199254740992
a++;
9007199254740992
a++;
9007199254740992
typeof a;
'number'
a = 9007199254740992n;
9007199254740992n
typeof a;
'bigint'
++a;
9007199254740993n
++a;
9007199254740994n
++a;
9007199254740995n
++a;
9007199254740996n
++a;
9007199254740997n
++a;
9007199254740998n
a + 111111;
VM687:1 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
    at <anonymous>:1:3
(anonymous) @ VM687:1
a + 111111n;
9007199254852109n
var salary = 7000;
undefined
typeof salary;
'number'
var salaries = [9999,2222,4444,5566];
undefined
typeof salaries;
'object'
salaries instanceof Array;
true
typeof Array;
'function'

// big int
undefined
var views = 1243243535345n;
undefined
typeof views;
'bigint'
views = BigInt("564873564783658743658763485768437");
564873564783658743658763485768437n
typeof BigInt;
'function'
var input = "453534543534532453243245";
undefined
views = BigInt(input);
453534543534532453243245n
views;
453534543534532453243245n
views++;
453534543534532453243245n
views++;
453534543534532453243246n
views++;
453534543534532453243247n
views++;
453534543534532453243248n
views++;
453534543534532453243249n
views++;
453534543534532453243250n
views++;
453534543534532453243251n
views++;
453534543534532453243252n
views + 543546456546n;
453534543535075999699799n
views + 43424;
VM481:1 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
    at <anonymous>:1:7
(anonymous) @ VM481:1
