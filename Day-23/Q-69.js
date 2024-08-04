"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Define a funcion which take two number type parameter
function DividingAndFindingTheRemainder(num1, num2) {
    //define object to find division and remainder
    let divisionAndRemainder = {
        Quotient: Math.floor(num1 / num2), //use math.floor method to discard the fractional part
        Remainder: num1 % num2,
    };
    return divisionAndRemainder; //return object
}
console.log(DividingAndFindingTheRemainder(10, 5)); //output: { Quotient: 2, Remainder: 0 }
