"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define a function that takes a message as the first parameter and a rest parameter for multiple hobbies
function hobbies(message, ...myHobbies) {
    // Iterate over each hobby using forEach and log the message with each hobby
    return myHobbies.forEach((hobby) => {
        console.log(message, hobby);
    });
}
// Call the function with a message and multiple hobbies
hobbies("I enjoy", "Coding", "Photography", "Gaming", "traveling");
