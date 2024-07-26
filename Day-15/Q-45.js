"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function my_car(manufacturer, modelName, optionalProperties) {
    let car_properties = {
        manufacturer,
        modelName,
        ...optionalProperties,
    };
    return car_properties;
}
const result = my_car("Toyata", "Civic", { color: "Red", manufacturerYear: 2017 });
console.log(result);
