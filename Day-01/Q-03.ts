let personName: string = "shiRaZ ";
let uppercase = personName.toUpperCase(); //all characters become capital
let lowercase = personName.toLowerCase(); //all character becomes small
let tittlecase =
  personName.charAt(0).toUpperCase() + lowercase.slice(1).toLowerCase(); //for tittlecase firstly
//personName.chart.(0).touppercase() it will convert personName into uppercase then  personName.slice(1).tolowercase() it will convert all characters in lowercase except first letter.

console.log(`Normal name:${personName}`);
console.log(`Name in Uppercase:${uppercase}`);
console.log(`Name in lowercase:${lowercase}`);
console.log(`Name in tittlecase:${tittlecase}`);
