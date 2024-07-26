"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt() {
    let shirt_properties = {
        message: "polo Brand",
        size: "Large",
    };
    return `Making a "${shirt_properties.size}" t-shirt with the message:"${shirt_properties.message}" printed on it`;
}
let shirt_descriptions = make_shirt();
console.log(shirt_descriptions);
