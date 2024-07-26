"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "pakistan") {
    console.log(`${city} is the city of ${country}`);
}
describe_city("karachi");
describe_city("lahore");
describe_city("istanbul", "Turkey");
