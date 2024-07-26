//Question 16

 import { guestList1 } from "./Q-15";
console.log("Q16","\n");

console.log("I find a big dinner table"); //log the message to tell people i find a big table

guestList1.unshift("Rana Hamza"); //use unshift method to add guest at the beginning
console.log(guestList1); //log the array

guestList1.splice(2, 0, "Abdullah"); //use splice method to add guest at the middle of array
console.log(guestList1);
guestList1.push("Shiraz"); //use push method to add guest at the end of array
console.log(guestList1);

//use forEach method to send invitation messages, one for each person.
guestList1.forEach((guestInvitation) => {
  console.log(`I invite You for dinner: Dear ${guestInvitation}`);
});

export {guestList1}
