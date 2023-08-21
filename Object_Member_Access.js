var emp = {id:1001, name:'Ram'};
undefined

// Using DOT Operator OR (Member Access Operator)
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

// Using [ ] Operator (Associative Array Operator)
emp['id'];
1001
emp['name'];
'Ram'
emp;
{id: 1001, name: 'Ram'}

// Diff b/w [] & . Operator
// Using square Operator we can able to access numeric key, as comapred to (.) Operator
var msdhoni = {name:'MS DHONI', age: 42, 100: 15, 50:52};
undefined
msdhoni.name;
'MS DHONI'
msdhoni.age;
42
msdhoni.50; // we won't able to acess numeric key using DOT Operator
VM429:1 Uncaught SyntaxError: Unexpected number
msdhoni['name'];
'MS DHONI'
msdhoni['age'];
42
msdhoni[50];  // we are able to acess numeric key using [] Operator
52
msdhoni[100];
15
msdhoni.city = 'Delhi';
'Delhi'
msdhoni;
{50: 52, 100: 15, name: 'MS DHONI', age: 42, city: 'Delhi'}
msdhoni.6 = 500;   // we won't able to add numeric key using DOT Operator
VM571:1 Uncaught SyntaxError: Unexpected number
msdhoni[6] = 500;  // we are able to add numeric key using [] Operator
500
msdhoni;
{6: 500, 50: 52, 100: 15, name: 'MS DHONI', age: 42, city: 'Delhi'}

// Special Character such as space we can add using [] Operator
msdhoni['current address'] = 'New Delhi';   // we are able to add key with space in b/w values using [] Operator
'New Delhi'
msdhoni.full name = "M.S . Dhoni";
VM752:1 Uncaught SyntaxError: Unexpected identifier 'name'
msdhoni."full name" = "M.S . Dhoni";  // we are not able to add key with space in b/w values using DOT Operator
VM757:1 Uncaught SyntaxError: Unexpected string

// Access variable by using [] Operator

var key = "age";
undefined
msdhoni.key; // can't able to access using DOT Operator
undefined
msdhoni[key]; // Able to access using [] Operator
42
