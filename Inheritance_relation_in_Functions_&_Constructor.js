// Basically in this we are doing linkaging of the objects

/*

Ques.
Create a Person Function , Having Id, Name, Age, City
Create a Student Function , Having Marks, Grade, College
Create a Employee Function. Having Salary, Bonus, CompanyName
Make a RelationShip b/w Employee , Student and Person
BY Using proto​​ and prototype
Hint : Use Call 

Think about how Chain RelationShip (Inheritance) and One Function Constructor call another Function Constructor like super constructor call.

*/

// Define the Person constructor function

function Person(id, name, age, city) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.city = city;
}

// Define the Student constructor function

function Student(id, name, age, city, marks, grade, college) {
  // Call the Person constructor to set common properties
  Person.call(this, id, name, age, city);

  this.marks = marks;
  this.grade = grade;
  this.college = college;
}

// Define the Employee constructor function

function Employee(id, name, age, city, salary, bonus, companyName) {
  // Call the Person constructor to set common properties
  Person.call(this, id, name, age, city);

  this.salary = salary;
  this.bonus = bonus;
  this.companyName = companyName;
}

// Establish the prototype chain to inherit Person's properties and methods
Student.prototype = Object.create(Person.prototype);

// Establish the prototype chain to inherit Person's properties and methods
Employee.prototype = Object.create(Person.prototype);

// Now, Create instances of Student and Employee
const student1 = new Student(1, "Alice", 20, "New York", [85, 92, 78], "A", "XYZ College");
const employee1 = new Employee(101, "Bob", 30, "San Francisco", 60000, 5000, "ABC Inc");

// Access both Person's and Student's or Employee's properties and methods
console.log(student1.name); // Alice
console.log(employee1.city); // San Francisco
