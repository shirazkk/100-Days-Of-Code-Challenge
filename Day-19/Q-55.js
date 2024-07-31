"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//make a array list of numbers
let nums = [1, 2, 3, 4, 5];
console.log(nums); //original array
let twiceNums = nums.map((val) => val * 2); //Use map method to iterate over each element and multiply by 2 
console.log(twiceNums); //new array output: [2,4,6,8,10]
