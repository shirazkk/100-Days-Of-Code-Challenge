"use strict";
//Question 16
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList1 = void 0;
const Q_15_1 = require("./Q-15");
Object.defineProperty(exports, "guestList1", { enumerable: true, get: function () { return Q_15_1.guestList1; } });
console.log("Q16", "\n");
console.log("I find a big dinner table"); //log the message to tell people i find a big table
Q_15_1.guestList1.unshift("Rana Hamza"); //use unshift method to add guest at the beginning
console.log(Q_15_1.guestList1); //log the array
Q_15_1.guestList1.splice(2, 0, "Abdullah"); //use splice method to add guest at the middle of array
console.log(Q_15_1.guestList1);
Q_15_1.guestList1.push("Shiraz"); //use push method to add guest at the end of array
console.log(Q_15_1.guestList1);
//use forEach method to send invitation messages, one for each person.
Q_15_1.guestList1.forEach((guestInvitation) => {
    console.log(`I invite You for dinner: Dear ${guestInvitation}`);
});
