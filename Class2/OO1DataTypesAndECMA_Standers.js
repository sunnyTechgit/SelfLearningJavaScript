"Use stricts"; // Treate all JS code as newr version

// alert(3+34); 

/*
 We are using node.js not browser   // The alert() function is built into the browser, not JavaScript itself.
When JavaScript runs in a web browser (Chrome, Firefox, Edge), the browser provides extra features called Web APIs.
It runs JavaScript directly on your computer using Google's V8 JavaScript engine, but it does not have browser APIs like:

alert()
document
window
navigator
localStorage

So when you write:

alert("Sunny");

Node.js looks for a function named alert.

Since none exists, it throws an error:

ReferenceError: alert is not defined 
*/


// Two main documentation resources for JavaScript:
// 1. MDN Web Docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript)
// 2. ECMAScript Specification (https://tc39.es/ecma262/)



// Data Types in JavaScript
// 1. Primitive Data Types
//    - Number => 2 to pow 53 - 1   
//    - String => "Hello World"
//    - Boolean => true or false
//    - Undefined => variable declared but not assigned a value
//    - Null => intentional absence of a value      It an object type in JavaScript, but it is considered a primitive value.
//    - Symbol => unique and immutable value
//    - BigInt => for integers larger than 2 to pow 53 - 1

// 2. Non-Primitive Data Types
//    - Object => key-value pairs
//    - Array => ordered list of values
//    - Function =-> block of code that can be called and executed

// ==========================
// 1. Primitive Data Types
// ==========================

// Number
let age = 22;
let price = 99.99;

// String
let name = "Sunny Kumar";
let message = 'Hello World';

// Boolean
let isStudent = true;
let isLoggedIn = false;

// Undefined
let city;
console.log(city); // undefined

// Null
let selectedUser = null;
console.log(selectedUser); // null

// Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false (every Symbol is unique)

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);


// ==========================
// 2. Non-Primitive Data Types
// ==========================

// Object
let student = {
    name: "Sunny",
    age: 22,
    course: "B.Tech CSE"
};

console.log(student.name); // Sunny

// Array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple

// Function
function greet() {
    console.log("Welcome to JavaScript!");
}

greet(); // Welcome to JavaScript!