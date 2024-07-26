"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AreaOfRectangle(length, width) {
    let Area = length * width;
    return Area;
}
let Area = AreaOfRectangle(5, 3);
console.log(`Area = 5 × 3 = ${Area} square units`);
let Areaofrectangle = (length, width) => length * width;
let result = Areaofrectangle(5, 3);
console.log(`Area = 5 × 3 = ${result} square units`);
