"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians_names = ["Thomas", "John", "David", "Micheal"];
function show_magicians(magicians_names) {
    magicians_names.forEach((magiciansname) => {
        console.log(magiciansname);
    });
}
function make_greet(magicians_names) {
    for (let i = 0; i < magicians_names.length; i++) {
        console.log(magicians_names[i] = "The Greet " + magicians_names[i]);
    }
}
show_magicians(magicians_names); //magician names only
make_greet(magicians_names); //modified the magicians name add The Greet message.
console.log("\n");
show_magicians(magicians_names); //permantely modified 
