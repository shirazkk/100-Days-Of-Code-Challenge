"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//mixed array of string,numbers,boolean,object
let mixedArray = ["Cheeku", true, 3, "Apple", {}, "Shiraz"];
console.log(mixedArray); //mixed array of items
//use filter method to extract only string elemnts from array
//typeof operator check elements of array equal to string so return those elements
let onlyStrings = mixedArray.filter((words) => typeof words === "string");
console.log(onlyStrings); //list of only string elemnts
