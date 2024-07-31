"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let circle = {
    shapeType: "Circle",
    radius: 20
};
let Rectangle = {
    shapeType: "Rectangle",
    width: 12,
    height: 24
};
function describeshape(shape) {
    if (shape.shapeType === "Circle") {
        return `The Radius of circle is:${shape.radius}`;
    }
    else {
        return `Rectangle with width ${shape.width} and height ${shape.height}`;
    }
}
let Circleshape = describeshape(circle);
let Rectangleshape = describeshape(Rectangle);
console.log(Circleshape);
console.log(Rectangleshape);
