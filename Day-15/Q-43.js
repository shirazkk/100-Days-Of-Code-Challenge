"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians_names = ["Thomas", "John", "David", "Micheal"];
function the_greet(magicians_names) {
    let greet_magiciansArray = [];
    for (let i = 0; i < magicians_names.length; i++) {
        greet_magiciansArray.push("The Greet " + magicians_names[i]);
    }
    return greet_magiciansArray;
}
function show_magicians(magicians_names) {
    magicians_names.forEach(magicians => {
        console.log(magicians);
    });
}
let greetMagicians = the_greet(magicians_names.slice()); //make a copy of array
console.log(greetMagicians);
show_magicians(magicians_names); //original array
show_magicians(greetMagicians); //modified array
