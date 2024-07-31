//calculate the area using named function
function CalculateAreaUsingNamedFunction(
  length: number,
  width: number
): number {
  let Area = length * width;
  return Area;
}
let Area = CalculateAreaUsingNamedFunction(5, 3);
console.log(`Area = 5 × 3 = ${Area} square units`);

//Refactor named function into arrow function to calculate the area.
let CalculateAreaUsingArrowFunction = (length: number, width: number) =>
  length * width;
let result = CalculateAreaUsingArrowFunction(5, 3);
console.log(`Area = 5 × 3 = ${result} square units`);
