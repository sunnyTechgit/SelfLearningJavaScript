// # Stack and Heap Memory in JavaScript

// ## What is Memory?

// When we create variables in JavaScript, they are stored in the computer's memory.

// JavaScript mainly uses two types of memory:

// 1. Stack Memory
// 2. Heap Memory

// ```
// Computer Memory
// │
// ├── Stack Memory
// └── Heap Memory
// ```

// ---

// # 1. Stack Memory

// ### Definition

// Stack Memory stores **Primitive Data Types**.

// Primitive Data Types:

// * String
// * Number
// * Boolean
// * Null
// * Undefined
// * Symbol
// * BigInt

// ### Characteristics

// * Stores the actual value.
// * Fast memory.
// * Values are **copied by value**.
// * Changing one variable does not affect another.

// ### Example

// ```javascript
// let a = 10;
// let b = a;

// console.log(a); // 10
// console.log(b); // 10

// b = 20;

// console.log(a); // 10
// console.log(b); // 20
// ```

// ### Memory Representation

// Before changing `b`

// ```
// Stack

// a ───► 10
// b ───► 10
// ```

// After changing `b`

// ```
// Stack

// a ───► 10
// b ───► 20
// ```

// **Explanation:**
// `b` gets its own copy of the value. Changing `b` does not affect `a`.

// ---

// # 2. Heap Memory

// ### Definition

// Heap Memory stores **Reference (Non-Primitive) Data Types**.

// Reference Data Types:

// * Object
// * Array
// * Function

// ### Characteristics

// * Stores objects in memory.
// * Variables store only the reference (memory address).
// * Values are **copied by reference**.
// * Multiple variables can point to the same object.

// ### Example (Object)

// ```javascript
// let user1 = {
//     name: "Sunny"
// };

// let user2 = user1;

// console.log(user1.name); // Sunny
// console.log(user2.name); // Sunny

// user2.name = "Rahul";

// console.log(user1.name); // Rahul
// console.log(user2.name); // Rahul
// ```

// ### Memory Representation

// ```
// Stack

// user1 ───► 0x101
// user2 ───► 0x101
//               │
//               ▼

// Heap

// 0x101
// {
//     name: "Rahul"
// }
// ```

// **Explanation:**
// Both `user1` and `user2` point to the same object. Changing one changes the other.

// ---

// # Array Example

// ```javascript
// let arr1 = [10, 20, 30];
// let arr2 = arr1;

// arr2.push(40);

// console.log(arr1); // [10, 20, 30, 40]
// console.log(arr2); // [10, 20, 30, 40]
// ```

// **Explanation:**
// Arrays are stored in Heap Memory. Both variables refer to the same array.

// ---

// # Function Example

// ```javascript
// function greet() {
//     console.log("Hello");
// }

// let f1 = greet;
// let f2 = f1;

// f2();
// ```

// **Explanation:**
// Functions are also objects, so they are stored in Heap Memory.

// ---

// # Stack vs Heap

// | Stack Memory                           | Heap Memory                   |
// | -------------------------------------- | ----------------------------- |
// | Stores Primitive Data Types            | Stores Reference Data Types   |
// | Stores actual values                   | Stores objects in memory      |
// | Fast                                   | Slower than Stack             |
// | Copied by Value                        | Copied by Reference           |
// | Changes do not affect copied variables | Changes affect all references |

// ---

// # Interview Examples

// ## Stack Memory (Primitive)

// ```javascript
// let x = 5;
// let y = x;

// y = 100;

// console.log(x); // 5
// console.log(y); // 100
// ```

// **Output**

// ```
// 5
// 100
// ```

// ---

// ## Heap Memory (Reference)

// ```javascript
// let person1 = {
//     name: "Sunny"
// };

// let person2 = person1;

// person2.name = "Rahul";

// console.log(person1.name); // Rahul
// console.log(person2.name); // Rahul
// ```

// **Output**

// ```
// Rahul
// Rahul
// ```

// ---

// # Easy Trick to Remember

// ```
// Primitive Data Types
//         ↓
//    Stack Memory
//         ↓
//    Copy by Value
// ```

// ```
// Object, Array, Function
//           ↓
//       Heap Memory
//           ↓
//    Copy by Reference
// ```

// ---

// # Important Note

// This is the standard way JavaScript is taught for interviews and exams.

// * **Primitive values behave like values** → They are copied independently.
// * **Objects, Arrays, and Functions behave like references** → Multiple variables can point to the same object.
// // 