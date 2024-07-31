"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//create a smartphone object
let Smartphone = {
    Brand: "Tecno",
    Model: "Tecno LD7",
    Features: {
        CPU: "Helio G80", //create nested object to shown key features of smartphone
        screenSize: "7.1 inch",
        Ram: "8 GB",
        Rom: "128 GB",
        Battery: "6000 MH",
        Frontcamera: "8 MP",
        Backcamera: "13 MP"
    }
};
console.log(Smartphone); //log the smartphone object
