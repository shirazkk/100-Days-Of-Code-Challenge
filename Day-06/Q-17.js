"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q_16_1 = require("./Q-16");
console.log("Q17", "\n");
console.log("Sorry To say but i can only invite two people at dinner ");
console.log(Q_16_1.guestList1.pop(), "Sorry I can't invite you for dinner");
console.log(Q_16_1.guestList1.pop(), "Sorry I can't invite you for dinner");
console.log(Q_16_1.guestList1.pop(), "Sorry I can't invite you for dinner");
console.log(Q_16_1.guestList1.pop(), "Sorry I can't invite you for dinner");
Q_16_1.guestList1.forEach(guestinvite => {
    console.log(`${guestinvite}: You are still invited at dinner`);
});
Q_16_1.guestList1.splice(0, 2);
console.log(Q_16_1.guestList1);
