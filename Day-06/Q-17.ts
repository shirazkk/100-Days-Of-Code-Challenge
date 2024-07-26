import { guestList1 } from "./Q-16";
console.log("Q17","\n",);


console.log("Sorry To say but i can only invite two people at dinner ");


console.log(guestList1.pop(),"Sorry I can't invite you for dinner");


console.log(guestList1.pop(),"Sorry I can't invite you for dinner");


console.log(guestList1.pop(),"Sorry I can't invite you for dinner");

console.log(guestList1.pop(),"Sorry I can't invite you for dinner");


guestList1.forEach(guestinvite=>{
    console.log(`${guestinvite}: You are still invited at dinner`);
    
})

guestList1.splice(0,2)
console.log(guestList1);

