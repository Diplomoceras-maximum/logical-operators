// Logical Operator

// Logical operators in javascript:
// || (OR)
// && (AND)
// ! (NOT)
// ?? (Nullish Coalescing)

// Logical operators can be applied to any data type

// Precedence of logical operators:
// ! NOT
// && AND
// || OR, ?? Nullish Coalescing

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

// If more than 2 operands, it evalautes from left to right
// Each operand is converted in order to boolean, if the result is "true" it stops and returns the original value of that operand
// If all operands are evalauted (all "false"), the last operand is returned

let firstName = "";
let lastName = "";
let nickName = "";

console.log(firstName || lastName || nickName || "Error"); // Error (there are no true values, so the last operand is returned)

// && AND

// Returns expression1 if it can be converted to "false", otherwise returns expression2.

/* Syntax of Logical AND

    expression1 && expression2

*/

// AND returns "true" is both operands are "true", otherwise it returns "false"

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// If an operand is not a boolean, it is converted to a boolean
// Example: 1 = "true", and 0 = "false"

let day = 30;
let month = 6;

if (day == 30 && month == 6) {
  console.log("It is your birthday!"); // It is your birthday! (both conditions are true so the string is logged)
}

// If more than 2 operands, it evalautes from left to right
// Each operand is converted in order to boolean, if the result is "false" it stops and returns the original value of that operand
// If all operands are evalauted (all "true"), the last operand is returned

console.log(1 && 2 && 3); // 3 (none of the values are "false" so the last value is returned)

// ! NOT

// Returns "false" if its single operand can be converted to "true", otherwise returns "true"

/* Syntax of Logical NOT

    !expression

*/

// NOT converts the operand to "true" or "false", then returns the inverse value

console.log(!true); // false
console.log(!false); // true
console.log(!1); // false
console.log(!0); // true

// Double NOT (!!) converts a value to a boolean data type

console.log(!!"Hello World!"); // true
console.log(!!null); // false

// ?? Nullish Coalescing

// Returns expression1 if it is neither null or undefined, otherwise returns expression2

/* Syntax of Logical Nullish Coalescing

    expression1 ?? expression2

*/

console.log(null ?? 1); // 1
console.log(undefined ?? 1); // 1

let user;
console.log(user ?? "Unknowm"); // Unknown (user is not defined)

user = "Max";
console.log(user ?? "Unknown"); // Max (user is not null and is defined)

// Nullish coalescing is often used to find the first value from a list that isnt null/undefined

firstName = "";
lastName = "";
nickName = "Diplomoceras-maximum";

console.log(firstName || lastName || nickName || "Error"); // Diplomoceras-maximum (first "defined" value)

// ?? is similar to || however:
// || returns the first "true" value
// ?? returns the first defined value
