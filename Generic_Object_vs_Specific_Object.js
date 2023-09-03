/*

Ques.
Create a Student Objects (Assume 5 Student Objects)
Student contains rollno, name, age, 3 subject marks, total marks, grade
total you need to compute for every student
grade you need to compute for every student

Try with Object Literal and Identify the problems 
Try with Function Constructor, Prototype and then find out the difference b/w Specific and Generic

*/


// Creating student objects using object literals

const student1 = {
  rollNo: 101,
  name: "Alice",
  age: 20,
  marks: [85, 92, 78],
  getTotalMarks: function () {
    return this.marks.reduce((total, mark) => total + mark, 0);
  },
  getGrade: function () {
    const totalMarks = this.getTotalMarks();
    const percentage = (totalMarks / 300) * 100;
    if (percentage >= 90) return "A+";
    else if (percentage >= 80) return "A";
    else if (percentage >= 70) return "B";
    else if (percentage >= 60) return "C";
    else return "F";
  },
};

const student2 = {
  rollNo: 102,
  name: "Bob",
  age: 21,
  marks: [72, 88, 95],
  getTotalMarks: function () {
    return this.marks.reduce((total, mark) => total + mark, 0);
  },
  getGrade: function () {
    const totalMarks = this.getTotalMarks();
    const percentage = (totalMarks / 300) * 100;
    if (percentage >= 90) return "A+";
    else if (percentage >= 80) return "A";
    else if (percentage >= 70) return "B";
    else if (percentage >= 60) return "C";
    else return "F";
  },
};

const student3 = {
  rollNo: 103,
  name: "Bobby",
  age: 21,
  marks: [72, 88, 95],
  getTotalMarks: function () {
    return this.marks.reduce((total, mark) => total + mark, 0);
  },
  getGrade: function () {
    const totalMarks = this.getTotalMarks();
    const percentage = (totalMarks / 300) * 100;
    if (percentage >= 90) return "A+";
    else if (percentage >= 80) return "A";
    else if (percentage >= 70) return "B";
    else if (percentage >= 60) return "C";
    else return "F";
  },
};

const student4 = {
  rollNo: 104,
  name: "Babu",
  age: 21,
  marks: [72, 88, 95],
  getTotalMarks: function () {
    return this.marks.reduce((total, mark) => total + mark, 0);
  },
  getGrade: function () {
    const totalMarks = this.getTotalMarks();
    const percentage = (totalMarks / 300) * 100;
    if (percentage >= 90) return "A+";
    else if (percentage >= 80) return "A";
    else if (percentage >= 70) return "B";
    else if (percentage >= 60) return "C";
    else return "F";
  },
};

const student5 = {
  rollNo: 105,
  name: "Bobie",
  age: 21,
  marks: [72, 88, 95],
  getTotalMarks: function () {
    return this.marks.reduce((total, mark) => total + mark, 0);
  },
  getGrade: function () {
    const totalMarks = this.getTotalMarks();
    const percentage = (totalMarks / 300) * 100;
    if (percentage >= 90) return "A+";
    else if (percentage >= 80) return "A";
    else if (percentage >= 70) return "B";
    else if (percentage >= 60) return "C";
    else return "F";
  },
};


/*
Problems with Object Literals:

Code Duplication: 
You can see that the code for calculating the total marks and grade is duplicated for each student. 
This violates the DRY (Don't Repeat Yourself) principle and makes the code harder to maintain.

*/



// Define a constructor function for Student

function Student(rollNo, name, age, marks) {
  this.rollNo = rollNo;
  this.name = name;
  this.age = age;
  this.marks = marks;
}

// Add methods to the prototype to compute total marks and grade

Student.prototype.getTotalMarks = function () {
  return this.marks.reduce((total, mark) => total + mark, 0);
};

Student.prototype.getGrade = function () {
  const totalMarks = this.getTotalMarks();
  const percentage = (totalMarks / 300) * 100;
  if (percentage >= 90) return "A+";
  else if (percentage >= 80) return "A";
  else if (percentage >= 70) return "B";
  else if (percentage >= 60) return "C";
  else return "F";
};

// Creating student objects using the constructor

const student1 = new Student(101, "Alice", 20, [85, 92, 78]);
const student2 = new Student(102, "Bob", 21, [72, 88, 95]);
const student3 = new Student(103, "Babu", 20, [72, 88, 95]);
const student4 = new Student(104, "Bob", 21, [72, 88, 95]);
const student5 = new Student(105, "Bobie", 21, [72, 88, 95]);



/*
Differences between Specific and Generic:

Specific Approach (Object Literals): 
In the specific approach, we create individual objects for each student, and the methods (such as getTotalMarks and getGrade) are duplicated for each instance. 
This approach is less efficient in terms of memory usage because each object carries its own copy of methods.

Generic Approach (Function Constructor and Prototype): 
In the generic approach, we define a constructor function (e.g., Student) and attach methods to its prototype. 
This approach is more memory-efficient because all instances share the same methods defined in the prototype. 
It adheres to the DRY principle and is easier to maintain as changes made to methods in the prototype are reflected in all instances.

The generic approach is preferred for creating objects that share common behaviors and methods, as it optimizes memory usage and promotes code reusability.
*/
