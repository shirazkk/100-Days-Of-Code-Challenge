"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = ["Ali", "Ahmed", "Fahad", "Asim", "Admin", "Abdullah", "Salman"];
users.forEach(Users => {
    if (Users == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello Eric, thank you for logging in again.");
    }
});
