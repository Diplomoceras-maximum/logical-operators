// Logical Operator

// Logical operators in javascript:
// || (OR)
// && (AND)
// ! (NOT)
// ?? (Nullish Coalescing)

// Logical operators can be applied to any data type

// || OR

// Returns expression1 if it can be converted to "true", otherwise returns expression2

/* Syntax of Logical OR

    expression1 || expression2

*/

// With boolean values, if any of the arguments are "true", it returns true, otherwise it is false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// If an operand is not a boolean, it is converted to a boolean
// Example: 1 = "true", and 0 = "false"

console.log(1 || 0); // 1 (true)

// OR is used most often in if statements:

let hour = 12;

if (hour < 10 || hour > 18) {
  console.log("The shop is closed."); // loggs nothing as the hour 12 doesnt match either of the two conditions
}

// If more than 3 operands, it evalautes from left to right
// Each operand is converted in order to boolean, if the result is true it stops and returns the original value of that operand
// If all operands are evalauted (all false), the last operand is returned

let firstName = "";
let lastName = "";
let nickName = "";

console.log(firstName || lastName || nickName || "Error"); // Error (there are no true values, so the last operand is returned)
