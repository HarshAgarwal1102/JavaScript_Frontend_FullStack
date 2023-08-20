var emp = {id:1001, name:'Ram'};
undefined

// Using DOT Operator (Member Access)
emp.id;
1001
emp.name;
'Ram'
emp;
{id: 1001, name: 'Ram'}
typeof emp;
'object'
emp instanceof Object;
true
typeof Object;
'function'

// Using [ ] Operator (Associative Array)
emp['id'];
1001
emp['name'];
'Ram'


emp;
{id: 1001, name: 'Ram'}
var msdhoni = {name:'MS DHONI', age: 42, 100: 15, 50:52};
undefined
msdhoni.name;
'MS DHONI'
msdhoni.age;
42
msdhoni.50;
VM429:1 Uncaught SyntaxError: Unexpected number
msdhoni['name'];
'MS DHONI'
msdhoni['age'];
42
msdhoni[50];
52
msdhoni[100];
15
msdhoni.city = 'Delhi';
'Delhi'
msdhoni;
{50: 52, 100: 15, name: 'MS DHONI', age: 42, city: 'Delhi'}
msdhoni.6 = 500;
VM571:1 Uncaught SyntaxError: Unexpected number
msdhoni[6] = 500;
500
msdhoni;
{6: 500, 50: 52, 100: 15, name: 'MS DHONI', age: 42, city: 'Delhi'}
msdhoni['current address'] = 'New Delhi';
'New Delhi'
msdhoni.full name = "M.S . Dhoni";
VM752:1 Uncaught SyntaxError: Unexpected identifier 'name'
msdhoni."full name" = "M.S . Dhoni";
VM757:1 Uncaught SyntaxError: Unexpected string
var key = "age";
undefined
msdhoni.age;
42
msdhoni.key;
undefined
msdhoni[key];
42
