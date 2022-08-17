/*
// Spread Operator

const langs = ["Python", "C++", "Java", "PHP"];

// console.log(...langs);

const lang2 = ["JavaScript", "C#", ...langs];

console.log(lang2);
*/
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, b, ...number2] = numbers;

console.log(a, b);
console.log(number2);
*/

const addNumbers = (a, b, c) => console.log(a + b + c);
const numbers = [100, 200, 300];

addNumbers(...numbers);