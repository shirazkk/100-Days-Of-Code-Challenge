"use strict";
//create a numeric enum of vehicles
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Cars"] = 0] = "Cars";
    Vehicles[Vehicles["Trucks"] = 1] = "Trucks";
    Vehicles[Vehicles["Motarcycles"] = 2] = "Motarcycles";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles.Cars); //output:0   
//if we can't give a value to enum so It shows 0 because enums start counting from 0
