"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points");
}
alien_color = "red";
if (alien_color == "green") {
    //its fail because we change the alien_color from green to red
}
