//Both var and let are used to declare variables.var is function scoped
//let is block scoped
let x = 5;
console.log(x);

//Change the Value of Variables
x = 3; 
console.log(x);

//If you use a variable without initializing it, it will have an undefined value.
let y; // x is the name of the variable

console.log(y); // undefined
/*
//Simply, a constant is a type of variable whose value cannot be changed.
//Also, you cannot declare a constant without initializing it. For example,
const z = 5;
z = 10;  // Error! constant cannot be changed.
console.log(z) */

//The console.log() method is used to write messages to these consoles. For example,
console.log("rajeshwari");
console.log(9);

//Print Values Stored in Variables
let firstName = "Rajeshwari";
console.log(firstName);


//There are two ways to add comments to code:

// - Single Line Comments
/*  -Multi-line Comments */

/*JavaScript Data Types . There are eight basic data types in JavaScript. They are:
String,Number,BigInt,Boolean,undefined,null,Symbol,Object.
The Object data type (non-primitive type) can store collections of data, whereas primitive data type can only store a single data.
JavaScript String
String is used to store text. In JavaScript, strings are surrounded by quotes:

Single quotes: 'Hello'
Double quotes: "Hello"
Backticks: `Hello`
*/
//strings example
const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;

//Backticks are generally used when you need to include variables or expressions into a string. 
const number3 = 3e5 // 3 * 10^5


// Boolean data types examples

let javascriptIsfun = true;
console.log(javascriptIsfun);

//To find the type of a variable, you can use the typeof operator. 
console.log(typeof javascriptIsfun);
console.log(typeof 28);
console.log(typeof "Rajeshwari");

const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(value1);
console.log(value2);
console.log(value1.description);

/*
DYNAMIC TYPING 

For the first time, when we declare a new variable we use "let" keyword,
but when we want to change the value of the variable, we simply write it again 
but without using the "let" keyword.
*/

javascriptIsfun = "Yes!";
console.log(javascriptIsfun);
console.log(typeof javascriptIsfun);

/* 
UNDEFINED DATA TYPE

Undefined is the value taken by a variable that 
is not yet defined. basically that means its an empty value. 
*/

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(year);
console.log(typeof year);

console.log(typeof null);


// Assignment operators
let i = 10 + 5; //15
i += 10; // i = i + 10 = 25 
i *= 4; //i = i * 4 = 100
i++; //101
i--; //99
console.log(i); //100

/*
// Type Coercion - Javascript changes the value type behined the scene.

There are two types of type conversion in JavaScript.

Implicit Conversion - automatic type conversion
Explicit Conversion - manual type conversion

console.log("I am " + 30 + " years old"); // The + operator converts numbers to string. Concatination.

// null is 0 when used with number
let result1;

result1 = 4 + null;
console.log(result1);  // 4

result1 = 4 - null;
console.log(result1);  // 4


let result;

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(null);
console.log(result);  // 0

let result = Number(' ')
console.log(result);  // 0
result = Number('hello');
console.log(result); // NaN

You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor(). For example,

result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20

result = String(324);
console.log(result);  // "324"

*/

// Comparison Operators (>, < , >= , <=)

let ageJohn = 20;
let ageBob = 22
console.log(ageJohn > ageBob);
console.log(ageBob >= 18);

console.log(25 - 10 - 5); //left to right precedence.

// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false


// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false


//String and Template Literals
//to interpolate variables and expressions into strings is called string interpolation.
let m = 5;
let n = 10;
console.log(`Fifteen is ${m + n} and
not ${2 * m + n}.`);


/* control flows 
// check if the number is positive

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
 // the body of the if statement
  console.log("The number is positive");
}

console.log("The if statement is easy");
*/

/*
if..else.. statement
const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}

console.log("The if...else statement is easy");

*/

/* if...if else..else.. statement
const number = prompt("Enter a number: ");


// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number === 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

console.log("The if...else if...else statement is easy");

*/

/* nested if..else statement
const number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}
*/

/* for loop

let sum = 0;
const n = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);
*/

/* while loop

let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}
*/

/* 
let i = 1;
const n = 5;

// do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= n);
*/

/* 
//The break statement is used to terminate the loop immediately

// nested for loops

// first loop
for (let i = 1; i <= 3; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
          break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}
*/

/*

//The continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration.

// first loop
for (let i = 1; i <= 3; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (j == 2) {
          continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}
*/

/*
// Switch Statements - Its basically used to compare one value to multiple different options.

const day = "friday";

switch (day) {
  case "monday":
    console.log("New Week Started");
    console.log("1st day of the week");
    break;

  case "tuesday":
    console.log("2nd day of the week");
    break;

  case "wednesday":
  case "thursday":
    console.log("Middle of the week");
    break;

  case "friday":
    console.log("5th day of the week");
    break;

  case "saturday":
  case "sunday":
    console.log("Weekends");
    break;

  default:
    console.log("Not a valid Day!!!");
    break;
}
*/

/* functions
//// Function declarations can be called, before the codes is defined.
// program to add two numbers using a function
// declaring a function
function add(a, b) {
    console.log(a + b);
}

// calling functions
add(3,4);
add(2,9);

//
*/
/*
//The return statement can be used to return the value to a function call.
//// Function expressions cannot be called before the codes is defined.
let x = function (num) { 
    return num * num ;
 };
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);
*/

/*
//a variable has two types of scope:
-Global Scope:A variable declared at the top of a program or outside of a function is considered a global scope variable.
-Local Scope: it can only be accessed within a function.


*/

/*
//Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.


// program to print the text

greet();

function greet() {
    console.log('Hi, there.'); //Hi, there.
}

//when a function is used as an expression, an error occurs
greet1();

let greet1 = function() {
    console.log('Hi, there.');//error
}


*/

/* objects: non-primitive data-type
const person = { 
    name: 'John', 
    age: 20, 
    greet: function() { console.log('hello') }
};

// accessing property
console.log(person.name); // John
console.log(person["name"]); // John
person.greet(); // hello

//adding methods to a object
// creating an object
let student = { };

// adding a property
student.name = 'John';

// adding a method
student.greet = function() {
    console.log('hello');
}

// accessing a method
student.greet(); // hello
*/
/*
//"this" To access a property of an object from within a method of the same object
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person.greet();
*/