// ============================================
// Strings in JavaScript
// ============================================

// There are two ways to create a string

// 1. String Literal (Most Common)
const name = "Sunny";

// 2. String Object
const gameName = new String("hitesh-hc-com");

console.log(name);
console.log(gameName);


// ============================================
// String Concatenation
// ============================================

const repoCount = 50;

// Old Way
console.log("Hello my name is " + name + " and my repo count is " + repoCount);

// Modern Way (Template Literals)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// ============================================
// Access Characters
// ============================================

console.log(gameName[0]);        // h
console.log(gameName[1]);        // i
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf("t")); // 2


// ============================================
// String Length
// ============================================

console.log(gameName.length); // 13


// ============================================
// Convert Case
// ============================================

console.log(gameName.toUpperCase()); // HITESH-HC-COM
console.log(gameName.toLowerCase()); // hitesh-hc-com


// ============================================
// substring(start, end)
// End index is NOT included.
// Negative values are treated as 0.
// ============================================

const subString = gameName.substring(0, 4);

console.log(subString); // hite


// ============================================
// slice(start, end)
// Supports negative indexes.
// End index is NOT included.
// ============================================

console.log(gameName.slice(0, 4));   // hite
console.log(gameName.slice(-3));     // com
console.log(gameName.slice(-8, -4)); // sh-h


// ============================================
// trim()
// Removes spaces from beginning and end.
// ============================================

const userName = "     Sunny Kumar     ";

console.log(userName);
console.log(userName.trim());


// ============================================
// replace()
// Replaces first matching value.
// ============================================

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));
// https://hitesh.com/hitesh-choudhary


// ============================================
// includes()
// Checks whether a string contains a value.
// Returns true or false.
// ============================================

console.log(url.includes("hitesh")); // true
console.log(url.includes("Sunny"));  // false


// ============================================
// split()
// Converts a string into an array.
// ============================================

console.log(gameName.split("-"));
// ["hitesh", "hc", "com"]

console.log("JavaScript is Awesome".split(" "));
// ["JavaScript", "is", "Awesome"]


// ============================================
// Extra Useful String Methods
// ============================================

// startsWith()
console.log(gameName.startsWith("hit")); // true

// endsWith()
console.log(gameName.endsWith("com")); // true

// repeat()
console.log("Hi ".repeat(3)); // Hi Hi Hi

// concat()
console.log("Hello ".concat("Sunny")); // Hello Sunny