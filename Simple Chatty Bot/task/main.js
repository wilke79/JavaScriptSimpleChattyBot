const input = require("sync-input");

console.log("Hello! My name is Aid.\nI was created in 2022.");
let yourName = input("Please, remind me your name.\n");
console.log(`What a great name you have, ${yourName}!`);
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.");
let remainder3 = input();
let remainder5 = input();
let remainder7 = input();
let yourAge = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;
console.log(`Your age is ${yourAge}; that's a good age to start programming!`);
console.log("Now I will prove to you that I can count to any number you want.")
let number = input();
let count = 0;
do {
    console.log(`${count} !`);
} while (++count <= number);
console.log("Let's test your programming knowledge.");
console.log("Why do we use methods?");
console.log("1. To repeat a statement multiple times.")
console.log("2. To decompose a program into several small subroutines.")
console.log("3. To determine hte execution of a program.")
console.log("4. To interrupt the execution of a program.")
let answer = input();
while (answer !== "2") {
    console.log("Please, try again.");
    answer = input();
}
console.log("Congratulations, have a nice day!")