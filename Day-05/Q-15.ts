export
let guestList1: string[] = ["Umair", "Hamza", "Taimoor"]; //old guestlist
console.log(guestList1);

let notAttending = guestList1[1]
console.log(`${notAttending} can't attend dinner.`); //this guest not attend dinner

let newGuest = "Mazz";
console.log(`Dear,${newGuest} i invite you for dinner`); //new guest is invited

guestList1[guestList1.indexOf(notAttending)] = newGuest; //indexOf remove "Hamza",add "Mazz",in new guestlist

console.log(guestList1); //print new guest list
