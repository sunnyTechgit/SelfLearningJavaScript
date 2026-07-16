let score =" 85";
console.log(typeof score); // string
let numericScore = Number(score);
console.log(typeof numericScore); // number
console.log(numericScore); // 85

let numString = "123abcd";
let numericValue = Number(numString);
console.log(numericValue);
 

// Conversion from string , null, undefined, boolean to number 
//  "22" => 22
//  null => 0
//  undefined => NaN
//  true => 1
//  false => 0
//"22qs" => NaN
 // Conversion from number to string,boolean
// 22 => "22"
// 0 => "0"
// 1 => "1"
/* let num = 22; // true
let num = -22; // true
let num =0; false
let isBool = Boolean(num);
console.log(isBool); // true or false // "23" 
let str = ""; // false
let str = " "; // true
let str = "23"; // true
console.log(Boolean(str));
*/
let nu = null;
console.log(typeof String(nu)); // "string"