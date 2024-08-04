"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Define a function which add string and number 
function addStringAndNumber(num, str) {
    return num + Number(str); //Using Number constructorto convert string to number
}
console.log(addStringAndNumber(5, "5")); //output:10
