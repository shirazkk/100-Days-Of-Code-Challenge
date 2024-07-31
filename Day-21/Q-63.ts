// Define a custom union type alias for shapes: either a circle or a rectangle
type Shape =
  | {
      shapeType: "Circle";
      radius: number;
    }
  | {
      shapeType: "Rectangle";
      width: number;
      height: number;
    };
//Create an object representing a circle
let Circle: Shape = {
  shapeType: "Circle",
  radius: 20,
};
// Create an object representing a rectangle
let Rectangle: Shape = {
  shapeType: "Rectangle",
  width: 25,
  height: 50,
};
//Define a function to describe the shape based on its type
function describeShape(shape: Shape): string {
  if (shape.shapeType === "Circle") {
    // Handle the case where the shape is a circle
    return `The radius of the circle is: ${shape.radius}`;
  } else {
    // Handle the case where the shape is a rectangle
    return `Rectangle with width ${shape.width} and height ${shape.height}`;
  }
}
console.log(describeShape(Circle)); // Output: The radius of the circle is: 20
console.log(describeShape(Rectangle)); // Output: Rectangle with width 25 and height 50
