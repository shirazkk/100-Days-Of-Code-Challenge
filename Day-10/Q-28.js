"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person_age = 20;
if (person_age < 2) {
    console.log("The person is baby");
}
else if (person_age >= 2 && person_age < 4) {
    console.log("The person is a toddler.");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("The person is a kid.");
}
else if (person_age >= 13 && person_age < 20) {
    console.log("The person is a teenager.");
}
else if (person_age >= 20 && person_age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
