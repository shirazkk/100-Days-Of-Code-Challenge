"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creates an adder function that adds a fixed number to any given number
function createAdder(magicNumber) {
    // Returns a function that adds 'magicNumber' to 'numberToAdd'
    return function (numberToAdd) {
        return numberToAdd + magicNumber;
    };
}
// Create an adder that adds 10 to any number
let adder = createAdder(10);
// Output the result of adding 10 to 20
console.log(adder(20)); // Output: 30
