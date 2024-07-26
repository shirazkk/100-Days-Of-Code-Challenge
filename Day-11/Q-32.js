"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Ahmed", "Ali", "Furqan", "Basit", "shiRaz"];
let new_users = ["Shiraz", "Ali", "Owais", "Mehran", "furqan"];
new_users.find(newusers => {
    if (current_users.some(checkcurrentusers => checkcurrentusers.toLowerCase() === newusers.toLowerCase())) {
        console.log(`The ${newusers} will need to enter a new username`);
    }
    else {
        console.log(`${newusers} is available.`);
    }
});
