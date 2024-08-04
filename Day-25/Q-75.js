"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Define a function where we do compound operation with different operators
function CompoundAssignment() {
    let x = 5; //initilize variable x=5
    console.log(`Initial Value=${5}`); //log the initial value
    x += 2; //add 2 in 5
    console.log(`Addition:x=${x}`); //output: 7
    x *= 2; //multiple 7 by 2
    console.log(`Multipliction:x=${x}`); //output:14
    x -= 2; //subtract 2 from 14
    console.log(`Subtraction:x=${x}`); //output:12
    x /= 2; //divide 2 by 12
    console.log(`Division:x=${x}`); //output:6
}
CompoundAssignment();
